import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'https://blogs-black.vercel.app'
})

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse>('/auth/login', data)
    }
}

export const blogsAPI = {
    getBlogsData() {
        return instance.get<ResponseBlogsType>('/blogs')
    }
}

export const postsAPI = {
    getPostsData() {
        return instance.get('/posts')
    }
}


//types auth
type LoginParamsType = {
    loginOrEmail: string
    password: string
}
export type ResponseAuthType = {

}

// types blogs
export type ResponseBlogsType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: BlogItemType[]
}
export type BlogItemType = {
    id: string
    name: string
    websiteUrl: string
    description: string
    createdAt: string
}

// types posts
export type ResponsePostsType = {
	pagesCount: number
	page: number
	pageSize: number
	totalCount: number
	items: PostItemType[]
}
export type PostItemType = {
	id: string
	title: string
	shortDescription: string
	content: string
	blogId: string
	blogName: string
	createdAt: string
}


