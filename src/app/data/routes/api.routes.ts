import { environment as ENV } from "../../../environments/environment";

export const API_ROUTES = {
    AUTH: {
        LOGIN:`${ENV.apiUrl}API/Identity/Login`,
        REGISTER:`${ENV.apiUrl}API/Identity/Registro`,
        TEST_CONNECTION:`${ENV.apiUrl}API/Identity/TestConnection`
    }
}