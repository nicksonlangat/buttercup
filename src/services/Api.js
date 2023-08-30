import axios from 'axios'

export default () => {
    axios.defaults.withCredentials = true
    const Api = axios.create({
        baseURL: process.env.VUE_APP_BASE_URL,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    return Api
}
