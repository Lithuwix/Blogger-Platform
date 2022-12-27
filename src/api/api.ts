import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'https://blogs-black.vercel.app',
    withCredentials: true
})

export const authAPI = {
    register(data: RegisterParamsType) {
        return instance.post<RegisterParamsType, any>('/auth/registration', data)
    //    /////////////////////////////////// type fix it later plz
    },
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
export type RegisterParamsType = {
    login: string
    password: string
    email: string
}
export type LoginParamsType = {
    loginOrEmail: string
    password: string
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


