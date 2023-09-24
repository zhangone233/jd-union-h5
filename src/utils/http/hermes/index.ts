import { omit } from 'lodash-es';
import {
  REG_URL_PATTERN,
  CONTENT_TYPE_FORM,
  CONTENT_TYPE_JSON,
  CONTENT_TYPE_PLAIN,
} from './const';
import type { HermesOptions, RequestOptions } from './type';

export class Hermes {
  private _baseUrl: string;
  private _timeout: number;
  private _headers: Record<string, unknown>;
  /**
   * `responseType` 表示浏览器将要响应的数据类型
   *  - blob (浏览器环境专属)
   */
  private _responseType: HermesOptions['responseType'];

  constructor(options?: HermesOptions) {
    const {
      baseUrl = '',
      timeout = 0,
      headers = {},
      responseType = 'json',
    } = options ?? {};

    this._baseUrl = baseUrl;
    this._timeout = timeout;
    this._headers = headers;
    this._responseType = responseType;
  }

  private _getUrl<Req>(options: RequestOptions<Req>) {
    const { url: uri, query, method } = options;

    let url = '';
    const { _baseUrl } = this;
    if (REG_URL_PATTERN.test(uri)) url = uri;
    else {
      if (!_baseUrl) console.warn('The request lacks the baseUrl');
      if (!REG_URL_PATTERN.test(_baseUrl))
        console.warn('This request is invalid for baseUrl');
      url = `${_baseUrl}${uri}`;
    }
    if (/^GET$/i.test(method!))
      url += this._stringify<Req>(query);
    return url;
  }

  private _stringify<Req>(query?: Req) {
    if (!query) return '';
    return `?${new URLSearchParams(query).toString()}`;
  }

  private _formatBody<Req>(options: RequestOptions<Req>) {
    const { body, method } = options;
    if (!body) return undefined;
    if (/^POST$/i.test(method!)) {
      if (body instanceof FormData) return body;
      try {
        return JSON.stringify(body);
      } catch (e) {
        console.error(e);
      }
    }
    // more...
  }

  private _setHeaders<Req>(options: RequestOptions<Req>) {
    const { method, headers } = options;
    const _headers = new Headers({
      'Content-Type': CONTENT_TYPE_PLAIN,
      ...this._headers,
    });
    if (!method) return _headers;
    if (/^GET$/i.test(method)) {
      _headers.set('Content-Type', CONTENT_TYPE_FORM);
    }
    if (/^POST$/i.test(method)) {
      _headers.set('Content-Type', CONTENT_TYPE_JSON);
    }

    headers &&
      Object.keys(headers).forEach((k) => {
        const v = Reflect.get(headers, k);
        _headers.has(k) ? _headers.set(k, v) : _headers.append(k, v);
      });

    return _headers;
  }

  public request<Res, Req, TRes = WrapperResp<Res>>(
    options: RequestOptions<Req>,
  ): Promise<TRes> {
    const url = this._getUrl<Req>(options);
    const body = this._formatBody<Req>(options);
    const headers = this._setHeaders(options);
    const requestConf: RequestInit = Object.assign(
      {
        url,
        body: JSON.stringify(body),
        headers,
        credentials: 'same-origin',
      } as RequestInit,
      omit<RequestOptions<Req>, keyof RequestOptions<Req>>(options, [
        'url',
        'body',
        'query',
      ]),
    );
    const request = new Request(url, requestConf);
    console.log(request, 'req');

    return new Promise((rs, rj) => {
      fetch(request)
        .then((response) => {
          if (!response.ok) {
            throw new Error('网络请求失败，请检查！');
          }

          let result = null;
          const { responseType = this._responseType } = options;
          switch (responseType) {
          case 'text':
            result = response.text();
            break;
          case 'json':
            result = response.json();
            break;
          case 'blob':
            result = response.blob();
            break;
          case 'stream':
            result = response.body?.getReader();
            break;
          case 'formData':
            result = response.formData();
            break;
          case 'arraybuffer':
            result = response.arrayBuffer();
            break;
          }

          rs(result as TRes);
        })
        .catch(rj);
    });
  }

  public request2<Res, Req, TRes = WrapperResp<Res>>(
    options: RequestOptions<Req>,
  ) {
    return this.request<Res, Req, TRes>(options)
      .then((res) => [null, res])
      .catch((err) => [err, null]);
  }
}

export default Hermes;

/**
 * TODO:
 * 1. timeout 请求超时，可利用Promise.race()
 * 2. 请求中途取消
 *
 */
