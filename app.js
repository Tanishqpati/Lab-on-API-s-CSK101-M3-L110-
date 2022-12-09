// Progression 1: create a function and fetch the api using axios
const articleGrid= document.getElementById('articleGrid')


// <div class="article">
//     <h3>Title</h3>
//     <img src="" alt="image here">
//     <p>Content</p>
//     </div>

function populateData(){
  axios.get('https://gnews.io/api/v4/top-headlines?token=387f7fa987b560b954e655311ca10b9b&lang=en').then((res)=>{
console.log(res.data)
const articles= res.data.articles;

articles.forEach((article)=>{
  const articleElement=document.createElement('div')
  const titleElement = document.createElement('h3')
  const imageElement= document.createElement('img')
  const contentElement = document.createElement('p')

  //css for article element
  articleElement.setAttribute('class','article')

  titleElement.innerText=article.title
  imageElement.setAttribute('src',article.image)
  contentElement.innerText=article.content

  articleElement.append(titleElement)
  articleElement.append(imageElement)
  articleElement.append(contentElement)

  articleGrid.append(articleElement)
})
  })
}
populateData()