type BaseRequestInit = Omit<RequestInit, 'body'>;
type ResponseType =
| 'arraybuffer'
| 'json'
| 'text'
| 'blob'
| 'formData'
| 'stream';

export interface RequestOptions<T = BodyInit | null> extends BaseRequestInit {
  url: string;
  body?: T;
  query?: T;
  responseType?: ResponseType;
}

export interface HermesOptions {
  baseUrl?: string;
  timeout?: number;
  headers?: Record<string, unknown>;
  /**
   * `responseType` 表示浏览器将要响应的数据类型
   *  - blob (浏览器环境专属)
   */
  responseType?: ResponseType
}
