interface APIResponseError {
  success: false;
  error: {
    id: string;
    message: string;
  };
}

interface APIResponseSuccess {
  success: true;
  data: any;
}

type APIResponse = APIResponseError | APIResponseSuccess;

export default APIResponse;
