import * as api from '../../api/index'
import * as types from '../constants/actionType'
// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        const action = { type: types.FETCH_ALL, payload: data }
        dispatch(action);
    } catch (err) {
        console.log(err)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: types.CREATE, payload: data })
    } catch (err) {
        console.log(err)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: types.UPDATE, payload: data })
    } catch (err) {
        console.log(err)
    }
}
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: types.DELETE, payload: id })
    } catch (err) {
        console.log(err)
    }

}
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: types.LIKE, payload: data })
    } catch (err) {
        console.log(err)
    }
}