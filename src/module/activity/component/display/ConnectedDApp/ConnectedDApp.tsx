import { PartialDappDto } from "module/api/service";
import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";
import { useTranslate } from "module/common/hook/useTranslate";
import DestructiveAction from "../../input/DangerousOption/DestructiveAction";
import useCancelableDialog from "module/common/hook/useCancelableDialog";
import useDisconnectDApp from "module/activity/queries/useDisconnectDApp";

interface ConnectedDAppProps {
    dApp: PartialDappDto;
}

const ConnectedDApp = ({ dApp: { id, image, name, description } }: ConnectedDAppProps) => {
    const translate = useTranslate();

    const { showCancelableDialog, hideDialog } = useCancelableDialog();

    const { mutate: disconnectDApp } = useDisconnectDApp();

    const handleDisconnectDApp = () => {
        showCancelableDialog({
            title: translate("disconnect"),
            content: "By disconnecting your account, you will no longer be able to use this dApp.",
            buttons: [
                {
                    text: translate("disconnect"),
                    type: "destructive",
                    action: () => {
                        disconnectDApp(id);
                        hideDialog();
                    },
                },
            ],
        });
    };

    return (
        <ActivityCard
            imageUrl={image!}
            title={name}
            description={description}
            onAction={() => undefined}
            actionElement={<DestructiveAction label={translate("disconnect")} onPress={handleDisconnectDApp} />}
        />
    );
};

export default ConnectedDApp;
