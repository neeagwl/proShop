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


