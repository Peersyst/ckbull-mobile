import { useQuery } from "react-query";
import { ckbSdkInstance } from "module/common/service/CkbSdkService";

export default function (account?: number): any {
    return useQuery(["nfts", account], () => ckbSdkInstance.getNfts());
}
