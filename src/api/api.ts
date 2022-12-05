import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://blogs-black.vercel.app'
})

export const blogsAPI = {
    getBlogsData() {
        return instance.get<ResponseBlogsType>('/blogs')
    }
}

// types blogs
export type ResponseBlogsType = {
    pagesCount: number;
    page: number;
    pageSize: number;
    totalCount: number;
    items: BlogItemType[];
}
type BlogItemType = {
    id: string;
    name: string;
    websiteUrl: string;
    description: string;
    createdAt: string;
}

export const postsApi = {
    getPostsData() {
        return instance.get('/posts')
    }
}

