export interface BaseResponse<T> {
  succeeded: boolean;
  statusCode: number;
  message?: string;
  problemErrors: string[];
  responseData?: T;
}
