import { PartialDappDto } from "module/api/service";

export class PartialDappDtoMock implements PartialDappDto {
    id: number;
    name: string;
    description: string;
    email: string;
    projectUrl: string;
    supportUrl: string;
    apiKey: string;
    termsUrl?: string;
    privacyPolicyUrl?: string;
    image?: string;
    createdAt: string;
    updatedAt: string;

    constructor({
        id = 1,
        name = "name",
        description = "description",
        email = "email",
        projectUrl = "projectUrl",
        supportUrl = "supportUrl",
        apiKey = "apiKey",
        termsUrl = "termsUrl",
        privacyPolicyUrl = "privacyPolicyUrl",
        image = "image",
        createdAt = "createdAt",
        updatedAt = "updatedAt",
    }: Partial<PartialDappDto> = {}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.email = email;
        this.projectUrl = projectUrl;
        this.supportUrl = supportUrl;
        this.apiKey = apiKey;
        this.termsUrl = termsUrl;
        this.privacyPolicyUrl = privacyPolicyUrl;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
