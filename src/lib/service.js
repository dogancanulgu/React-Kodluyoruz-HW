import axios from "axios"; 

const getData = async(number) => {
    const { data : users } = await axios("https://jsonplaceholder.typicode.com/users/" + number);

    const { data : posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+number);
    const filteredPost = posts.filter( item => item.id === number);

    let newObj = {users, filteredPost};

    console.log(newObj);
    // console.log("posts", posts);
};

export default getData;