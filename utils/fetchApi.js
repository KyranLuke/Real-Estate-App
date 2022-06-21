// headers: {
//     'X-RapidAPI-Key': ,
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// };
import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '94b8526263msh113f497cca6c2d2p11253ajsn8ec193a47861' ,
      },
    });
      
    return data;
  }