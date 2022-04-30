import * as api from "../api/index"

export const getposts = () => async (dispatch) => {
    try{
        const res = await api.fetchposts();

        dispatch({type:"FETCH_ALL" , payload : res});

    }catch(err){
        console.log(err);
    }

    // const action = {type :"FETCH_ALL" , payload : []}

    // return action
}; 