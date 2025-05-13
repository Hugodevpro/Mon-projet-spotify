import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

// Définir le token d'accès (vous devez obtenir ce token via le processus d'authentification)
const setAccessToken = (token) => {
  spotifyApi.setAccessToken(token);
};

export { spotifyApi, setAccessToken };
