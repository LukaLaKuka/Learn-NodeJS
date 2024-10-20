import "dotenv/config";
import { get } from "env-var";

export const Config = {
    PORT: get("PORT").required().asPortNumber()
};