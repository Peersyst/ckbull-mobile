import { OpenAPI } from "./service";
import config from "config/config";

OpenAPI.TOKEN = "";
OpenAPI.WITH_CREDENTIALS = true;
OpenAPI.BASE = config.signerUrl;
OpenAPI.CREDENTIALS = "omit";
