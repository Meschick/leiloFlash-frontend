export interface ApiResponseInterface<T> {
  data: T;
  message: string;
  success: boolean;
}
