import axios from "axios";

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "e730cbcf4afee57465309a19bd7a2be5",
        language: "es-ES"
    }
});

export default movieDB;