import axios from "axios";

// create base request from TMDB
export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
})