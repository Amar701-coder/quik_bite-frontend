// import statements 
import {serverURL} from './serverURL'
import { API } from './Api'

// api for get all table for rest 
export const GetTablesByRestaurant = (restaurantId) => {
    return API('get', `${serverURL}/tables?restaurantId=${restaurantId}`);
  };
  