import { get } from "../utils/api";

export const getBlogs = async (params) => await get(`/blog?pageSize=${params.pageSize}&pageNumber=${params.pageNumber}`);
export const getBlogById = async (id) => await get('/blog/' + id)