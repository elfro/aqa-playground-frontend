export const getErrorMessage = (error: unknown) => {
  let message: string = 'Something went wrong';

  if (error instanceof Error) {
    message = error.message;
  }

  if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  }

  if (typeof error === 'string') {
    message = error;
  }

  return message;
};
