import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    About: undefined;
    Forms: { initialEmail: string };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type FormsScreenProps = NativeStackScreenProps<RootStackParamList, 'Forms'>;
export type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'>;