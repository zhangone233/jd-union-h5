/**
 * @type { RegExp }
 * 判断一个 URI 是否为 URL
 */
export const REG_URL_PATTERN: RegExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

export const CONTENT_TYPE_HTML: string = 'text/html';
export const CONTENT_TYPE_PLAIN: string = 'text/plain';
export const CONTENT_TYPE_FILE: string = 'multipart/form-data';
export const CONTENT_TYPE_JSON: string = 'application/json;charset=utf-8';
export const CONTENT_TYPE_FORM: string = 'application/x-www-form-urlencoded';
