import axios from 'axios';

export const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');
    console.log(token)
//bullshit comment for demo purposes haha
    return axios.create({
        headers: {
            Authorization: token
        }
    })
}