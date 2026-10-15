import { Logger } from "kage-library/client";
import { config } from "../app.config.js";

export const log = new Logger({
    useNerdFonts: config.useNerdFonts
});
