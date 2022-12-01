import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://lessfiv.herokuapp.com'
})

export const testsAPI = {
    getTestBlogsData() {
        return instance.get('/blogs')
    }
}

