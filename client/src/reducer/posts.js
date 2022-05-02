const posts = (posts = [] , action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;

        case "CREATE" :
            return [...posts , action.payload];
            
        case "UPDATE" :
            return posts.filter((item)=>{return item._id !== action.payload.id ? [...posts] : item});

        default:
            return posts;
    }
}

export default posts