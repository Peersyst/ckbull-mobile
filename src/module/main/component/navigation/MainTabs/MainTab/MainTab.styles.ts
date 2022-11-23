import styled from "@peersyst/react-native-styled";
import { Paper, Tab } from "react-native-components";
import { Platform, ViewStyle } from "react-native";

export const MainTabRoot = styled(Tab)(() => ({
    flex: 1,
}));

export interface MainTabContentProps {
    active: boolean;
}

export const MainTabContent = styled(Paper)<MainTabContentProps>(({ active }) => {
    const style: ViewStyle = active
        ? {
              shadowOffset: {
                  height: -3,
                  width: 0,
              },
              shadowRadius: 2,
              shadowOpacity: 0.15,
              elevation: 0,
              ...(Platform.OS === "android" && { borderWidth: 1, borderBottomWidth: 0, borderColor: "rgba(0, 0, 0, 0.03)" }),
          }
        : {
              backgroundColor: "transparent",
              shadowOffset: {
                  height: 0,
                  width: 0,
              },
              elevation: 0,
          };

    return {
        padding: 10,
        zIndex: 1,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        ...style,
    };
});
