import axios from "axios";

const rmService = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character/",
    headers: {
        Authorization: "Bearer ......"
    },
    timeout: 3600,
    
})

export { rmService }