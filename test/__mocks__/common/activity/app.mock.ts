import BaseMock from "mocks/common/base.mock";
import { AppDto } from "module/activity/dto/dtos";

export class AppMock extends BaseMock implements AppDto {
    title: string;
    imageUrl?: string;
    constructor({ title = "title", imageUrl = "url" }: Partial<AppDto> = {}) {
        super();
        this.title = title;
        this.imageUrl = imageUrl;
    }
}
