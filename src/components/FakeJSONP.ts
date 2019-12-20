/**
 * JSONP拦截器
 */
export default class FakeJSONP {
     fake(): void {
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
