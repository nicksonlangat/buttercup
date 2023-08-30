import axios from 'axios'

export default () => {
    const Api = axios.create({
        baseURL: process.env.VUE_APP_BASE_URL,
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    return Api
}
