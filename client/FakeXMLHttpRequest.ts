import Interceptor from "./Interceptor";
/**
 * XMLHttpRequest拦截器
 */
class FakeXMLHttpRequest implements XMLHttpRequest {
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    readonly readyState: number;
    readonly response: any;
    readonly responseText: string;
    responseType: XMLHttpRequestResponseType;
    readonly responseURL: string;
    readonly responseXML: Document | null;
    readonly status: number;
    readonly statusText: string;
    timeout: number;
    readonly upload: XMLHttpRequestUpload;
    withCredentials: boolean;
    abort(): void {
    }

    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener | EventListenerObject, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener | EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type, listener, options?: boolean | AddEventListenerOptions): void {
    }

    dispatchEvent(event: Event): boolean {
        return false;
    }

    getAllResponseHeaders(): string {
        return "";
    }

    getResponseHeader(name: string): string | null {
        return undefined;
    }

    open(method: string, url: string): void;
    open(method: string, url: string, async: boolean, username?: string | null, password?: string | null): void;
    open(method: string, url: string, async?: boolean, username?: string | null, password?: string | null): void {
    }

    overrideMimeType(mime: string): void {
    }

    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener | EventListenerObject, options?: boolean | EventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, callback: EventListener | EventListenerObject | null, options?: EventListenerOptions | boolean): void;
    removeEventListener(type, listener, options?: boolean | EventListenerOptions): void {
    }

    send(body?: Document | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | string | null): void {
    }

    setRequestHeader(name: string, value: string): void {
    }
    intercept(): void {

    }
}
