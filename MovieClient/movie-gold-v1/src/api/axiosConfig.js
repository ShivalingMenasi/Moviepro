import axios from 'axios';

export default axios.create({
    baseURL:"https://2b61-103-191-91-174.ngrok-free.app/",
    headers:{"ngrok-skip-browser-warning":"true"}
});