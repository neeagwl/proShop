export const userLoginReducer = (state={},action)=>{
    switch(action.type){
        case 'USER_LOGIN_REQ':
            return {loading:true}

        case 'USER_LOGIN_SUCCESS':
            return {loading:false, userInfo:action.payload}
            
        case 'USER_LOGIN_FAIL':
            return {loading:false, error:action.payload}
        case 'USER_LOGOUT':
            return {}
        default:
            return state    
    }
}

export const userRegisterReducer = (state={},action)=>{
    switch(action.type){
        case 'USER_REGISTER_REQ':
            return {loading:true}

        case 'USER_REGISTER_SUCCESS':
            return {loading:false, userInfo:action.payload}
            
        case 'USER_REGISTER_FAIL':
            return {loading:false, error:action.payload}
        default:
            return state    
    }
}

export const userDetailsReducer = (state={user:{}},action)=>{
    switch(action.type){
        case 'USER_DETAILS_REQ':
            return {...state,loading:true}

        case 'USER_DETAILS_SUCCESS':
            return {loading:false, user:action.payload}
            
        case 'USER_DETAILS_FAIL':
            return {loading:false, error:action.payload}
        default:
            return state    
    }
}

export const updateProfileReducer = (state={},action)=>{
    switch(action.type){
        case 'USER_UPDATE_PROFILE_REQ':
            return {...state,loading:true}

        case 'USER_UPDATE_PROFILE_SUCCESS':
            return {loading:false, success:true,user:action.payload}
            
        case 'USER_UPDATE_PROFILE_FAIL':
            return {loading:false, error:action.payload}
        default:
            return state    
    }
}