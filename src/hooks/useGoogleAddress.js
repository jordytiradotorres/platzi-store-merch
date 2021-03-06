import axios from 'axios';
import { useEffect, useState } from 'react';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const APIKEY = 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw';
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${APIKEY}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
