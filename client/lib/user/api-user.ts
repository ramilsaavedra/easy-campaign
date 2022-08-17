import axios from 'axios';

export default async () => {
  try {
    const res = await axios.get('/api/current-user');
    return res;
  } catch (error) {
    throw error;
  }
};
