import * as api from '../../api/index'
import { AUTH } from '../constants/actionType'

export const signIn = (formData, navigate) => async (dispatch) =>{
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data })
        navigate('/')
    } catch(err) {
        console.log(err)
    }
}


export const signUp = (formData, navigate) => async (dispatch) =>{
    try {

        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data })
        navigate('/')
    } catch(err) {
        console.log(err)
    }
}