// How to Use: 

// import  ApiServices  from  './ApiServices';
// const  Api  =  new  ApiServices();
  
import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com/users/';

class ApiServices{
 
    getData() {
        const url = `${API_URL}`;
        return axios.get(url);
    }  

    getDataById(pk) {
        const url = `${API_URL}${pk}`;
        return axios.get(url);
    }

    deleteData(customer){
        const url = `${API_URL}${customer.pk}`;
        return axios.delete(url);
    }

    createData(customer){
        const url = `${API_URL}`;
        return axios.post(url,customer);
    }

    updateUpdate(customer){
        const url = `${API_URL}${customer.pk}`;
        return axios.put(url,customer);
    }

}

export default ApiServices;