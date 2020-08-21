import axios from 'axios';

export const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');
//bullshit comment for demo purposes
    return axios.create({
        headers: {
            Authorization: token
        }
    })
}