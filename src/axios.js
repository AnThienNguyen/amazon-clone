import axios from "axios";

const instance = axios.create({
    // The API (cloud) URL
    baseURL: 'https://us-central1-clone-eb991.cloudfunctions.net/api'

    // http://localhost:5001/clone-eb991/us-central1/api
});

export default instance;