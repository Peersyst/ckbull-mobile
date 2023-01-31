import DAOCard from "module/dao/component/core/DAOAccountCard/DAOCard";
import { DAOSliderRoot } from "module/dao/component/core/DAOSlider/DAOSlider.styles";

const DAOSlider = (): JSX.Element => {
    return <DAOSliderRoot Card={DAOCard} />;
};

export default DAOSlider;
