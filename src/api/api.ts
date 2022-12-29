import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    //https://blogs-api-seven.vercel.app
    //https://blogs-black.vercel.app
    baseURL: 'https://blogs-black.vercel.app',
    withCredentials: true
})

export const authAPI = {
    register(data: RegisterParamsType) {
        return instance.post<RegisterParamsType, AxiosResponse>('/auth/registration', data)
    //    /////////////////////////////////// type fix it later plz
    },
    authMe() {
        return instance.get<ResponseAuthMeType>('/auth/me')
    },
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse>('/auth/login', data)
    },
    confirmRegistration(data: any) {
        return instance.post('/auth/registration-confirmation', data)
    }
}

export const blogsAPI = {
    getBlogsData() {
        return instance.get<ResponseBlogsType>('/blogs')
    }
}

export const postsAPI = {
    getPostsData() {
        return instance.get<ResponsePostsType>('/posts')
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
export type ResponseAuthMeType = {
	email: string
	login: string
	userId: string
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


