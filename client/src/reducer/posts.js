import POST_CONT from "../actions/constant";

const posts = (posts = [] , action) => {
    switch (action.type) {
        case "DELETE" :
            
            return posts.filter((item)=>{return item._id !== action.payload._id});

        case POST_CONT.FETCH_ALL:
          
            return action.payload;

        case POST_CONT.CREATE :
            return [...posts , action.payload];
            
        case POST_CONT.UPDATE :
        case POST_CONT.LIKEPOST :
            return posts.filter((item)=>{return item._id !== action.payload.id ? [...posts] : item});

        default:
            return posts;
    }
}

export default posts