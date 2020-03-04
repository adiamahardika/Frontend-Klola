import axios from 'axios';

export const getAllCategory = () => {
    return{
        type: 'GET_CATEGORY',
        payload: axios({
            method: "GET",
            url: "http://localhost:5000/category"
        })
    }
}

export const postCategory = (data) => {
    return{
        type: 'POST_CATEGORY',
        payload: axios({
            method: "POST",
            url: "http://localhost:5000/category",
            data: data
        })
    }
}

export const patchCategory = (data, categoryId) => {
    return{
        type: 'PATCH_CATEGORY',
        payload: axios({
            method: "PATCH",
            url: `http://localhost:5000/category/${categoryId}`,
            data: data
        })
    }
}

export const deleteCategory = ( categoryId) => {
    return{
        type: 'DELETE_CATEGORY',
        payload: axios({
            method: "DELETE",
            url: `http://localhost:5000/category/${categoryId}`
        })
    }
}