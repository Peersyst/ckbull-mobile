import { createStylesheets } from "@peersyst/react-native-styled";
import { dialogStylesheet } from "./Dialog.stylesheet";
import { dottedPaginationStylesheet } from "./DottedPagination.stylesheet";
import { formControlHintStylesheet } from "./FormControlHint.stylesheet";
import { formControlErrorStylesheet } from "./FormControlError.stylesheet";
import { formControlLabelStylesheet } from "./FormControlLabel.stylesheet";
import { labelStylesheet } from "./Label.stylesheet";
import { modalStylesheet } from "./Modal.stylesheet";
import { paperStylesheet } from "./Paper.stylesheet";
import { swipeButtonStylesheet } from "./SwipeButton.stylesheet";
import { typographyStylesheet } from "@peersyst/react-native-components";

export default createStylesheets(
    dialogStylesheet,
    dottedPaginationStylesheet,
    formControlHintStylesheet,
    formControlErrorStylesheet,
    formControlLabelStylesheet,
    labelStylesheet,
    modalStylesheet,
    paperStylesheet,
    swipeButtonStylesheet,
    typographyStylesheet,
);
