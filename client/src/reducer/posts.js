const posts = (posts = [] , action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;

        case "CREATE" :
            console.log(posts);
            return [...posts.data , action.payload];


        default:
            return posts;
    }
}

export default posts