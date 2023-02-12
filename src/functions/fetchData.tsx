import axios from 'axios';

const Fetch = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data} = response;
    return data;
}

export default Fetch;