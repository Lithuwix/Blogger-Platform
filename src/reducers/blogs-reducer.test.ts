import {blogsReducer, setBlogsDataAC} from "./blogs-reducer";

export const state = {
    pagesCount: 0,
    page: 0,
    pageSize: 0,
    totalCount: 0,
    blogItems: []
}

export const getBlogsResponse = {
    pagesCount: 10,
    page: 1,
    pageSize: 3,
    totalCount: 12,
    items: {
        id: 'id-1',
        name: 'name',
        websiteUrl: 'some URL',
        description: 'description',
        createdAt: 'date'
    }
}

// test('set blogs DATA', () => {
//     const blogsReducer1 = blogsReducer(state, setBlogsDataAC(getBlogsResponse))
//     expect(blogsReducer1.totalCount).toBe("loading")
// })