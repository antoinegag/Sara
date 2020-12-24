interface APIResponseBase {
  success: boolean;
}

interface APIResponseError extends APIResponseBase {
  error: {
    id: string;
    message: string;
  };
}

interface APIResponseSuccess extends APIResponseBase {
  data: any;
}

type APIResponse = APIResponseError | APIResponseSuccess;

export default APIResponse;
