import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "8bb3698696b546d7a142bff66411c48c";
const redirectURi = "http://localhost:3000/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}
client_id=${clientID}&redirect_uri=${redirectURi}
&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;

const apiClient = axios ({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization = "Bearer" + token;
        return config;
    })
}

export default apiClient;