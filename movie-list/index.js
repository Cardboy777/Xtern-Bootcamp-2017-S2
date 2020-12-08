const movieForm = document.querySelector('form#movieForm')
const movies = []

function handleDelete(ev) {
  const f = ev.target
  console.log('Delete')
}
function handlePromote() {
  const f = ev.target
  console.log('Promote')
}

function renderMovieData(movieData) {
  const row = document.createElement('p')
  row.innerHTML = `${movieData.name} \t ${movieData.rating}
      <button type="submit">Delete</button> <button type="submit">Promote</button>`
  rowkid = row.children
  console.log(rowkid)
  rowkid[0].addEventListener('submit', handleDelete)
  rowkid[1].addEventListener('submit', handlePromote)
  return row
}

function renderBox(movieData) {
  const box = document.createElement('div');
  //EDIT: get a border around box
  box.appendChild(renderMovieData(movieData))
  return box
}

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')

  movies[movies.length] = {
    name: f.movieName.value,
    rating: f.rating.value,
  }

  details.appendChild(renderBox(movies[movies.length - 1]))
}

movieForm.addEventListener('submit', handleSubmit)