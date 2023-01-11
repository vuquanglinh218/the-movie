const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "c8c59cd4a56b4ae655b5f7b9ef92a815",
  originalImage: (path) => `https://image.tmdb.org/t/p/original/${path}`,
  w500Image: (path) => `https://image.tmdb.org/t/p/w500/${path}`,
}

export default apiConfig