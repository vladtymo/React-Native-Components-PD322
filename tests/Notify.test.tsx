import { fireEvent, render, screen, waitFor } from "@testing-library/react-native";
import NotifyExample from "../app/(tabs)/notifications";
import * as Notifications from 'expo-notifications';
import { except } from "drizzle-orm/gel-core";

jest.mock('expo-notifications')
const mockedNotifications = Notifications as jest.Mocked<typeof Notifications>;

describe("Notify", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // clean slate before each test

        mockedNotifications.scheduleNotificationAsync.mockResolvedValue('564737');
    });

    it("renders correctly", async () => {
        render(<NotifyExample />);

        expect(await screen.getByText("Notifications Example")).toBeTruthy();
    });

    it("notification now schedules correctly", async () => {
        render(<NotifyExample />);

        const notifyNowBtn = screen.getByTestId('notifyNowBtn');

        expect(notifyNowBtn).toBeOnTheScreen();
        fireEvent.press(notifyNowBtn);

        expect(mockedNotifications.scheduleNotificationAsync)
            .toHaveBeenCalledTimes(1);
    });

    it("notification schedules now correctly", async () => {
        render(<NotifyExample />);

        const notifyNowBtn = screen.getByTestId('notifyNowBtn');

        expect(notifyNowBtn).toBeOnTheScreen();
        fireEvent.press(notifyNowBtn);

        expect(mockedNotifications.scheduleNotificationAsync).toHaveBeenCalledWith(
            expect.objectContaining({
                trigger: null
            })
        )
    });
});
