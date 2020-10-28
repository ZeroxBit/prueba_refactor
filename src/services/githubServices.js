import { cnn } from "./connect";

const BASE_PATH = "users/";

export const getUser = async (path) => {
    const result = await cnn(`${BASE_PATH}${path}`);

    return result;
}