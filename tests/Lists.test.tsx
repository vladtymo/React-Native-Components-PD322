import { render, screen, waitFor } from "@testing-library/react-native";
import axios from "axios";
import Lists from "../components/Lists";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Lists", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // clean slate before each test

        mockedAxios.get.mockResolvedValue({
            data: [
                {
                    "id": 1,
                    "title": "Fjallraven",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "rating": {
                        "rate": 3.9,
                        "count": 120
                    }
                },
                {
                    "id": 2,
                    "title": "Mens Casual",
                    "price": 22.3,
                    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    "rating": {
                        "rate": 4.1,
                        "count": 259
                    }
                },
            ],
            status: 200,
            statusText: 'Ok',
            headers: {},
            config: {},
        });
    });

    it("renders correctly", async () => {
        const { getByText } = render(<Lists />);
        await waitFor(() => {
            expect(getByText("Products")).toBeTruthy();
        })
    });

    it("renders items correctly", async () => {
        render(<Lists />);

        const elementTitle1 = 'Fjallraven';
        const elementTitle2 = 'Mens Casual';
        expect(await screen.findByText(elementTitle1)).toBeTruthy();
        expect(await screen.findByText(elementTitle2)).toBeTruthy();
    });

    it("axios.get invokes once", async () => {
        render(<Lists />);
        await waitFor(() => {
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        }, { timeout: 3000 })
    });
});
