import { http, HttpResponse } from "msw";
import * as UserApi from "./apis/user.api";
export const handlers = [...Object.values(UserApi)];
