const BASE_URL = 'https://moviesdatabase.p.rapidapi.com'
const KEY = 'f5515d7ccbmsh80e73fc9840cb41p1d7850jsn64668639aa59';
const HOST = 'moviesdatabase.p.rapidapi.com';

export const errorInterceptor = (instance) => {
  instance.onError((err) => {
    const { data, status } = err.response;
    const error = { status };

    if (error.status === 403) {
      if (typeof data === 'string') {
        // prevent to pass html string as an error message
        error.message = "You don't have access to this page";
      } else {
        error.message = data.error.message;
      }
    } else {
      error.message = data.error.message;
    }

    throw error;
  });
};


export const createServiceInstance = ({ context, baseURL = '' }) => {
  const headers = {
    'X-RapidAPI-Key': KEY,
    'X-RapidAPI-Host': HOST
  };

  const {
    $axios,
  } = context;
  const instance = $axios.create({ baseURL: BASE_URL + baseURL, headers });

  errorInterceptor(instance);

  return instance;
};