import { useQuery } from "react-query";
import { ckbSdkInstance } from "module/common/service/CkbSdkService";

export default function (): any {
    return useQuery(["nfts"], () => ckbSdkInstance.getNfts());
}
