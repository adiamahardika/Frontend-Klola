import axios from 'axios'
require ('dotenv').config()

export const checkout = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'CHECKOUT',
        payload: axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/order`,
            data: data,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const readOrder = () => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'READ_ORDER',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/order`,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}