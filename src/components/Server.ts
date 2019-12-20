import Middleware from "./Middleware";
import {Method} from "../modules/constants";
import {warn, error} from "../modules/utils";
import ApiPool from "./ApiPool";

interface ApiConfig {
    url: string;
    handler: object | string | number | Function;
    delay?: number;
    desc?: string;
}

interface GlobalVarConfig {
    name: string;
    value?: any;
    isHiddenInput?: boolean;
    desc?: string;
    pattern?: string;
}

export default class Server {
    readonly middleware: Middleware[];
    readonly apiPool: ApiPool;
    constructor(options: {
        middleware?: Middleware[],
        apiPool: ApiPool
    }) {
        this.middleware = Array.isArray(options.middleware) ? options.middleware : [];
        this.apiPool = options.apiPool;
    }
    /**
     * 定义get请求
     * @param config
     */
    get(config: ApiConfig) {
        this.apiPool.add({
            ...config,
            method: Method.GET
        });
    }

    /**
     * 定义post方法
     * @param config
     */
    post(config: ApiConfig) {
        this.apiPool.add({
            ...config,
            method: Method.POST
        });
    }

    /**
     * 定义put方法
     * @param config
     */
    put(config: ApiConfig) {
        this.apiPool.add({
            ...config,
            method: Method.PUT
        });
    }
    /**
     * 定义put
     * @param config
     */
    delete(config: ApiConfig) {
        this.apiPool.add({
            ...config,
            method: Method.DELETE
        });
    }
    /**
     * 定义全局变量
     * @param config
     */
    globalVar(config: GlobalVarConfig) {
        if (config.isHiddenInput) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = config.name;
            input.value = config.value;
            document.body.insertBefore(input, document.body.firstChild);
        } else {
            const descriptor = Object.getOwnPropertyDescriptor(window, config.name);
            if (descriptor === undefined) {
                window[config.name] = config.value;
                return;
            }
            if (descriptor.configurable) {
                window[config.name] = config.value;
                warn(`全局变量: ${config.name} 已存在, 请检查你的配置是否与已有全局变量冲突`)
            } else {
                error(`全局变量: ${config.name} 无法配置, 请检查你的配置是否与已有全局变量冲突`)
            }
        }
    }
    use(middleware: Middleware) {
        this.middleware.push(middleware);
    }
}
