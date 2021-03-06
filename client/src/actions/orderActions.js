import axios from 'axios';

export const createOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ORDER_CREATE_REQ',
      })
  
      const {userLogin: {userInfo} } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization : `Bearer ${userInfo.token}`
        },
      }
  
      const { data } = await axios.post(
        `/api/orders/`,order,config )
  
      dispatch({
        type: 'ORDER_CREATE_SUCCESS',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'ORDER_CREATE_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  } 

  export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ORDER_DETAILS_REQ',
      })
  
      const {userLogin: {userInfo} } = getState();
      const config = {
        headers: {
          Authorization : `Bearer ${userInfo.token}`
        },
      }
  
      const { data } = await axios.get(
        `/api/orders/${id}`,config )
  
      dispatch({
        type: 'ORDER_DETAILS_SUCCESS',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'ORDER_DETAILS_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  } 

  export const payOrder = (orderId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ORDER_PAY_REQ',
      })
  
      const {userLogin: {userInfo} } = getState();
      console.log(userInfo);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization : `Bearer ${userInfo.token}`
        },
      }
  
      // const { data } = await axios.put(
      //   `/api/orders/${orderId}/pay`,config )

      const data = { isPaid :true,
                     paidAt: Date.now() }
                     
      console.log(data);
      dispatch({
        type: 'ORDER_PAY_SUCCESS',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'ORDER_PAY_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  } 

export const listMyOrders = () => async ( dispatch, getState) => {
    try {
      dispatch({
        type: "ORDER_LIST_MY_REQ",
      })
  
      const {userLogin: { userInfo },} = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/orders/myorders`,config )
  
      dispatch({
        type: "ORDER_LIST_MY_SUCCESS",
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({
        type: "ORDER_LIST_MY_FAIL",
        payload: message,
      })
    }
  }