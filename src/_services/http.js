import axios from 'axios';

const API_URL = process.env.REACT_APP_API;

class Api{

    getToken = () => {
        let userToken;
        try {
            const user = sessionStorage.getItem('loginUser');
            userToken = user && JSON.parse(user).AccessToken;
            return userToken.replace(/['"]+/g, ''); // Replace single or duble quotes from string
        } catch (e) {
            console.log('user token not found.');
        }
    };

    getData(endpoint, isToken) {
        let authToken;
        let url = API_URL + endpoint;
        if (isToken) {
            authToken = 'JWT '+ this.getToken();
            return axios.get(url, {
                headers: {
                    'Authorization': authToken,
                }
            })
        } else {
            return axios.get(url);
        }
    }  

    postData(endpoint, isToken, data){let authToken;
        let url = API_URL + endpoint;
        if (isToken) {
            authToken = 'JWT '+ this.getToken();
            return axios.post(url, data, {
                headers: {
                    'Authorization': authToken,
                }
            })
        } else {
            return axios.post(url, data);
        }
    }

    getDataById(pk) {
        const url = `${API_URL}${pk}`;
        return axios.get(url);
    }

    putData(endpoint, isToken, data){let authToken;
        let url = API_URL + endpoint;
        if (isToken) {
            authToken = 'JWT '+ this.getToken();
            return axios.put(url, data, {
                headers: {
                    'Authorization': authToken,
                }
            })
        } else {
            return axios.put(url, data);
        }
    }

    deleteData(endpoint, isToken, data){let authToken;
        let url = API_URL + endpoint;
        if (isToken) {
            authToken = 'JWT '+ this.getToken();
            return axios.delete(url, data, {
                headers: {
                    'Authorization': authToken,
                }
            })
        } else {
            return axios.delete(url, data);
        }
    }

}

export default Api;