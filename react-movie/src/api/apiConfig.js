const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7f33442a38f74a17f634176c63c20145',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;