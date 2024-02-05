// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Replace with your API's base URL
import Cookies from 'js-cookie';
// const BASE_URL = 'http://127.0.0.1:8000';
const BASE_URL = 'http://127.0.0.1:5324';
// const BASE_URL = 'https://jsonplaceholder.typicode.com';
// using this site to test api calls
// https://jsonplaceholder.typicode.com/guide/

// set state in here and return it as a state and use it as a hook.

interface RequestResponse {
  data: any | null;
  error: string | null;
}

async function makeRequest(
  url: string,
  method: string,
  csrf?: string,
  payload?: any
): Promise<RequestResponse> {
  const requestOptions = {
    method,
    ...(payload && {
      headers: {
        'Content-Type': 'application/json',
        'CSRF-Token': csrf,
      },
      body: JSON.stringify(payload),
    }),
  };

  try {
    const response = await fetch(BASE_URL + url, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    let data;
    try {
      data = await response.json();
    } catch (error: any) {
      console.error('Error parsing JSON:', error);
      throw new Error(`Non-JSON response received: ${error.message}`);
    }

    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'An error occurred' };
  }
}

export default makeRequest;
