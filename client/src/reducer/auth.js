import AUTH_CONT from "../actions/actionconstant"


const auth = (state = { authData : null }, action) => {
    switch(action.type){
        case AUTH_CONT.LOGIN : 
            state.authData = action.data
            return state.authData
        
        case AUTH_CONT.LOGOUT : 
            window.open("http://localhost:5005/oauth/logout","_self");
            
            return state;

        case AUTH_CONT.LOGIN_GIT :
             state.authData = action.data
             return state.authData 
            
        default : 
            return state
    }
}

export default auth