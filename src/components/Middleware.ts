import Request from './Request';
import Response from './Response';

export default interface Middleware {
    (req: Request, res: Response): void
}
