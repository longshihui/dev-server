import Server from "./components/Server";
import QueryValidator from './middleware/QueryValidator';
import ApiPool from "./components/ApiPool";

const server = new Server({
    apiPool: new ApiPool()
});

server.use(QueryValidator);

export default server;
