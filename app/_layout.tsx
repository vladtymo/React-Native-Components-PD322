import { Stack } from 'expo-router';
import { Suspense } from 'react';
import { ActivityIndicator, View, Text, Button } from 'react-native';
import { SQLiteProvider, openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../drizzle/migrations';
import { Provider } from 'react-redux';
import { store } from './store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ErrorBoundary from 'react-native-error-boundary'

export const DATABASE_NAME = 'tasks';

// const CustomFallback = (props: { error: Error, resetError: Function }) => (
//     <View>
//       <Text>Something happened!</Text>
//       <Text>{props.error.toString()}</Text>
//       <Button onPress={props.resetError} title={'Try again'} />
//     </View>
//   )

export default function RootLayout() {
    const expoDb = openDatabaseSync(DATABASE_NAME);
    const db = drizzle(expoDb);
    const { success, error } = useMigrations(db, migrations);

    if (error) {
        return (
            <View>
                <Text>Migration error: {error.message}</Text>
            </View>
        );
    }
    if (!success) {
        return (
            <View>
                <Text>Migration is in progress...</Text>
            </View>
        );
    }

    return (
        <Suspense fallback={<ActivityIndicator size="large" />}>
            <SQLiteProvider
                databaseName={DATABASE_NAME}
                options={{ enableChangeListener: true }}
                useSuspense>
                <Provider store={store}>
                    <GestureHandlerRootView>
                        <Stack>
                            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                            <Stack.Screen name="+not-found" />
                        </Stack>
                    </GestureHandlerRootView>
                </Provider>
            </SQLiteProvider>
        </Suspense>
    );
}
