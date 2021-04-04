import axios from 'axios';

export const listProducts =()=> async(dispatch)=>{
    try{
        dispatch({type:'PRODUCT_LIST_REQ'});

        const {data} = await axios.get('/api/products');
        dispatch({type:'PRODUCT_LIST_SUCCESS',payload:data})
    }catch(error){
        dispatch({
            type:'PRODUCT_LIST_FAIL',
        payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
    }
}

export const listProductDetails =(id)=> async(dispatch)=>{
    try{
        dispatch({type:'PRODUCT_DETAIL_REQ'});

        const {data} = await axios.get(`/api/products/${id}`);
        dispatch({type:'PRODUCT_DETAIL_SUCCESS',payload:data})
    }catch(error){
        dispatch({
            type:'PRODUCT_DETAIL_FAIL',
        payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
    }
}

export const createProductReview = (id, review) => async(dispatch, getState)=>{
    try{
        dispatch({type:'PRODUCT_CREATE_REVIEW_REQ'});

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const {data} = await axios.post(`/api/products/${id}/reviews`, review, config);

        dispatch({type:'PRODUCT_CREATE_REVIEW_SUCCESS',payload:data})

    }catch(error){
        dispatch({
            type:'PRODUCT_CREATE_REVIEW_FAIL',
        payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
    }
}