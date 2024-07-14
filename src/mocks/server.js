import { handlers } from "./handler";
import { setupWorker } from "msw/browser";

export const server = setupWorker(...handlers);
