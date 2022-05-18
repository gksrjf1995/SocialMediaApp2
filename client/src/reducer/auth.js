import AUTH_CONT from "../actions/actionconstant"


const auth = (state = { authData : null }, action) => {
    switch(action.type){
        case AUTH_CONT.LOGIN : 
            state.authData = action.data
            return state.authData
        
        case AUTH_CONT.LOGOUT : 
            return state;

        default : 
            return state
    }
}

export default auth