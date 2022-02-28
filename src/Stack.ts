import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamsList = {
    //Main
    Home: undefined;
    Settings: undefined;
    Notifications: undefined;
    WelcomeBack: undefined;
    //Auth
    Login: undefined;
    AuthSwitch: undefined;
    CreateWallet: undefined;
    ImportWallet: undefined;
};

export default createNativeStackNavigator<RootStackParamsList>();
