import axios from 'axios';

const baseURL = 'http://localhost:8000'

const API = axios.create({ baseURL })

API.interceptors.request.use((req) => {

    if(sessionStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(sessionStorage.getItem('profile')).token}`
    } 
    return req
})

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`${'/posts'}/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`${'/posts'}/${id}`)
export const likePost = (id) => API.patch(`${'/posts'}/${id}/like`)

export const signIn = (formData) => API.post('/user/signIn', formData);
export const signUp = (formData) => API.post('/user/signUp', formData);