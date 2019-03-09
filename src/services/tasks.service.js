import fetch from 'cross-fetch';
import { TASKS_URL } from '../consts.js';

export function getTasks(){
   return fetch(TASKS_URL)
    .then((res) => {
        if(res.status == 200){
            return res.json();
        }
           return [];
        })
    .catch(error => console.error('Error:', error));
}