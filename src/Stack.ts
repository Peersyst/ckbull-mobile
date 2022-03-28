import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type MainStackParamsList = {
    //Main
    Main: undefined;
    Home: undefined;
    Settings: undefined;
    GeneralSettings: undefined;
    SecuritySettings: undefined;
    Notifications: undefined;
    Dao: undefined;
    News: undefined;
    Send: undefined;
    Receive: { address: string };
};
export type RootStackParamsList = {
    //Auth
    Login: undefined;
    AuthSwitch: undefined;
    CreateWallet: undefined;
    ImportWallet: undefined;
} & MainStackParamsList;

export const BottomTab = createBottomTabNavigator<MainStackParamsList>();

export default createNativeStackNavigator<RootStackParamsList>();
