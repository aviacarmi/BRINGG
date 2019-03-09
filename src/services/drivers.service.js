import fetch from 'cross-fetch';
import { DRIVERS_URL } from '../consts.js';

export function getDrivers(){
   return fetch(DRIVERS_URL)
    .then((res) => {
        if(res.status == 200){
            return res.json();
        }
           return [];
        })
    .catch(error => console.error('Error:', error));
}