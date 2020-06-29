export class FrostResult<T> {
  result: T;
  success: boolean;
  errorMessage: string;

  constructor(obj: T, success: boolean, error?: string) {
    this.result = obj;
    this.success = success;
    if (!error) {
      this.errorMessage = "";
    } else {
      this.errorMessage = error;
    }
  }
}
