export const createOrderReducer = (state={},action)=>{
    switch(action.type){
        case 'ORDER_CREATE_REQ':
            return {loading:true}

        case 'ORDER_CREATE_SUCCESS':
            return {loading:false, order:action.payload, success:true}
            
        case 'ORDER_CREATE_FAIL':
            return {loading:false, error:action.payload}
        default:
            return state    
    }
}

export const orderDetailsReducer = (state={loading:true,shippingAddress:{},orderItems:[]},action)=>{
    switch(action.type){
        case 'ORDER_DETAILS_REQ':
            return {...state,loading:true}

        case 'ORDER_DETAILS_SUCCESS':
            return {loading:false, order:action.payload, success:true}
            
        case 'ORDER_DETAILS_FAIL':
            return {loading:false, error:action.payload}
        default:
            return state    
    }
}

export const orderPayReducer = (state={paidOrder:{}},action)=>{
    switch(action.type){
        case 'ORDER_PAY_REQ':
            return {loading:true}

        case 'ORDER_PAY_SUCCESS':
            return {loading:false, success:true, paidOrder:action.payload}
            
        case 'ORDER_PAY_FAIL':
            return {loading:false, error:action.payload}
        case 'ORDER_PAY_RESET':
            return {}    
        default:
            return state    
    }
}



