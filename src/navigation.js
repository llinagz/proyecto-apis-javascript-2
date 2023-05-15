const navegador = () => {
  console.log({location})

  const HASHES = {
    "#trends": () => trendsPage(),
    "#search=": () => searchPage(),
    "#movie=": () => moviePage(),
    "#category=": () => categoryPage()
  }

  for (const KEY of Object.keys(HASHES)) {
    if (location.hash.startsWith(KEY)) {
      HASHES[KEY]()

      return
    }
  }

  homePage()
}

const homePage = () => {
  console.log("HOME")

  headerSection.classList.remove("header-container--long")
  headerSection.style.background = ""
  arrowBtn.classList.add("inactive")
  arrowBtn.classList.remove("header-arrow--white")
  headerTitle.classList.remove("inactive")
  headerCategoryTitle.classList.add("inactive")
  searchForm.classList.remove("inactive")

  trendingPreviewSection.classList.remove("inactive")
  categoriesPreviewSection.classList.remove("inactive")
  genericSection.classList.add("inactive")
  movieDetailSection.classList.add("inactive")

  getTrendingMoviesPreview()
  getCategoriesPreview()
}

const categoryPage = () => {
  console.log("CATEGORY 37")

  headerSection.classList.remove("header-container--long")
  headerSection.style.background = ""
  arrowBtn.classList.remove("inactive")
  arrowBtn.classList.remove("header-arrow--white")
  headerTitle.classList.add("inactive")
  headerCategoryTitle.classList.remove("inactive")
  searchForm.classList.remove("inactive")

  trendingPreviewSection.classList.add("inactive")
  categoriesPreviewSection.classList.add("inactive")
  genericSection.classList.remove("inactive")
  movieDetailSection.classList.add("inactive")

  const [_, categoryData] = location.hash.split("=") // ['#category', 'id-name]
  const [categoryId, categoryName] = categoryData.split("-")

  headerCategoryTitle.innerHTML = categoryName

  getMoviesByCategorie(categoryId)
}

const moviePage = () => {
  console.log("MOVIE")

  headerSection.classList.add("header-container--long")
  //headerSection.style.background = ""
  arrowBtn.classList.remove("inactive")
  arrowBtn.classList.add("header-arrow--white")
  headerTitle.classList.add("inactive")
  headerCategoryTitle.classList.add("inactive")
  searchForm.classList.add("inactive")

  trendingPreviewSection.classList.add("inactive")
  categoriesPreviewSection.classList.add("inactive")
  genericSection.classList.add("inactive")
  movieDetailSection.classList.remove("inactive")
}

const searchPage = () => {
  console.log("SEARCH")

  headerSection.classList.remove("header-container--long")
  headerSection.style.background = ""
  arrowBtn.classList.remove("inactive")
  arrowBtn.classList.remove("header-arrow--white")
  headerTitle.classList.add("inactive")
  headerCategoryTitle.classList.remove("inactive")
  searchForm.classList.remove("inactive")

  trendingPreviewSection.classList.add("inactive")
  categoriesPreviewSection.classList.add("inactive")
  genericSection.classList.remove("inactive")
  movieDetailSection.classList.add("inactive")
}

const trendsPage = () => {
  console.log("TRENDS")

  headerSection.classList.remove("header-container--long")
  headerSection.style.background = ""
  arrowBtn.classList.remove("inactive")
  arrowBtn.classList.remove("header-arrow--white")
  headerTitle.classList.add("inactive")
  headerCategoryTitle.classList.remove("inactive")
  searchForm.classList.add("inactive")

  trendingPreviewSection.classList.add("inactive")
  categoriesPreviewSection.classList.add("inactive")
  genericSection.classList.remove("inactive")
  movieDetailSection.classList.add("inactive")
}

searchFormBtn.addEventListener("click", () => {
  location.hash = "#search="
})

trendingBtn.addEventListener("click", () => {
  location.hash = "#trends"
})

arrowBtn.addEventListener("click", () => {
  location.hash = "#home"
})

window.addEventListener("load", navegador, false)
window.addEventListener("hashchange", navegador, false)
