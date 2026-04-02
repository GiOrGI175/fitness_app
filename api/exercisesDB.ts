import { rapIdApiKey } from '@/constants';
import axios from 'axios';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url: string, params?: any) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'x-rapidapi-key': rapIdApiKey,
      },
    };

    const res = await axios.request(options);
    return res.data;
  } catch (err: any) {
    console.log('API ERROR:', err?.response?.data || err.message);
    throw err;
  }
};

export const fetchExercisesByBodyParts = async (bodyPart: string) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);

  return data;
};
