import DAOCard from "module/dao/component/core/DAOAccountCard/DAOCard";
import { DAOSliderRoot } from "module/dao/component/core/DAOSlider/DAOSlider.styles";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";

const DAOSlider = (): JSX.Element => {
    return (
        <DarkThemeProvider>
            <DAOSliderRoot Card={DAOCard} />
        </DarkThemeProvider>
    );
};

export default DAOSlider;
