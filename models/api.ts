export interface ApiResponse {
  header: {
    'access-control-allow-headers': string;
    'access-control-allow-methods': string;
    'access-control-allow-origin': string;
    'access-control-expose-headers': string;
    'connection': string;
    'content-encoding': string;
    'content-type': string;
    'date': string;
    'transfer-encoding': string;
    'vary': string;
    'x-app-rate-limit': string;
    'x-app-rate-limit-count': string;
    'x-method-rate-limit': string;
    'x-method-rate-limit-count': string;
    'x-riot-edge-trace-id': string;
  };
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}
