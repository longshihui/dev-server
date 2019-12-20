import { Method } from "../modules/constants";

export interface ApiConfig {
    url: string;
    method: Method;
    handler: object | string | number | Function;
    delay?: number;
    desc?: string;
}

export default class ApiPool {
    readonly pool: ApiConfig[];
    add(api: ApiConfig) {
        this.pool.push(api);
    }
};
