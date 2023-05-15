const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  params: {
    api_key: API
  }
})

async function getTrendingMoviesPreview() {
  const {data} = await api("trending/movie/day")
  const movies = data.results

  trendingMoviesPreviewList.innerHTML = ""

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div")
    movieContainer.classList.add("movie-container")

    const movieImg = document.createElement("img")
    movieImg.classList.add("movie-img")
    movieImg.setAttribute("alt", movie.title)
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/" + movie.poster_path
    )
    movieContainer.appendChild(movieImg)
    trendingMoviesPreviewList.appendChild(movieContainer)
  })
}

async function getCategoriesPreview() {
  const {data} = await api("genre/movie/list")
  const categories = data.genres

  categoriesPreviewList.innerHTML = ""

  categories.forEach((categorie) => {
    const categorieContainer = document.createElement("div")
    categorieContainer.classList.add("category-container")

    const categorieTitle = document.createElement("h3")
    categorieTitle.classList.add("category-title")
    categorieTitle.setAttribute("id", "id" + categorie.id)
    categorieTitle.addEventListener("click", () => {
      location.hash = `#category=${categorie.id}-${categorie.name}`
    })
    const categoryTitleText = document.createTextNode(categorie.name)

    categorieTitle.appendChild(categoryTitleText)
    categorieContainer.appendChild(categorieTitle)
    categoriesPreviewList.appendChild(categorieContainer)
  })
}

async function getMoviesByCategorie(id) {
  const {data} = await api("discover/movie", {
    params: {
      with_genres: id
    }
  })
  const movies = data.results

  genericSection.innerHTML = ""

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div")
    movieContainer.classList.add("movie-container")

    const movieImg = document.createElement("img")
    movieImg.classList.add("movie-img")
    movieImg.setAttribute("alt", movie.title)
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/" + movie.poster_path
    )
    movieContainer.appendChild(movieImg)
    genericSection.appendChild(movieContainer)
  })
}
