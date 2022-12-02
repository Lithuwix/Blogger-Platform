import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://blogs-black.vercel.app'
})

export const blogsAPI = {
    getBlogsData() {
        return instance.get('/blogs')
    }
}

