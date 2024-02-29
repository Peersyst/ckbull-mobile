import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import BaseMainScreen from "module/main/component/layout/BaseMainScreen/BaseMainScreen";
import useGetNews from "module/news/query/useGetNews";
import NewsCard from "../component/display/SimpleNewsCard/NewsCard";
import { NewsList, NewsSpacer } from "./NewsScreen.styles";
import { NewsDto } from "../types";

const NewsScreen = (): JSX.Element => {
    const { data = [], refetch, isLoading } = useGetNews();
    return (
        <BaseMainScreen>
            <NewsList<NewsDto>
                renderItem={({ item, index }) => {
                    return <NewsCard loading={isLoading} news={item} key={index} />;
                }}
                onRefresh={refetch}
                keyExtractor={(_, index) => index.toString()}
                data={isLoading ? new Array(5).fill({}) : data}
                ItemSeparatorComponent={() => <NewsSpacer />}
                ListFooterComponent={() => <NewsSpacer style={{ paddingTop: 40 }} />}
                ListEmptyComponent={isLoading ? undefined : <EmptyListComponent />}
            />
        </BaseMainScreen>
    );
};

export default NewsScreen;
