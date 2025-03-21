import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAppSelector } from '../hook';
import { selectNotifications, selectTitle } from '../slices/menuSlice';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const title = useAppSelector(selectTitle);
    const notifications = useAppSelector(selectNotifications);

    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: title || "Home",
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    tabBarBadge: notifications === 0 ? undefined : notifications
                }} />
            <Tabs.Screen
                name="forms"
                options={{
                    title: 'Forms',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
                }} />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
                }} />
        </Tabs>
    );
}
