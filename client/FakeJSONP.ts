/**
 * JSONP拦截器
 */
import Interceptor from "./Interceptor";

export default class FakeJSONP implements Interceptor {
    intercept(): void {
        let originalAppendChild = Node.prototype.appendChild;
        Node.prototype.appendChild = function<T extends Node>(newChild: T): T {
            if (newChild.nodeName.toLowerCase() === 'script') {
                
            } else {
                originalAppendChild.call(this, newChild);
            }
            return newChild;
        }
    }
}
