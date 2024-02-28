import Root from "./src";
import useCachedResources from "./src/module/common/hook/useCachedResources";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
//Explanation link :https://github.com/facebook/react-native/issues/12981#issuecomment-652745831
import { LogBox } from "react-native";

const App = (): JSX.Element | null => {
    const isLoadingComplete = useCachedResources();
    LogBox.ignoreLogs(["Setting a timer"]);
    LogBox.ignoreLogs(["Require cycles"]);
    LogBox.ignoreLogs(["Require cycle:"]);
    return isLoadingComplete ? <Root /> : null;
};

export default App;
