

fetch('https://dummyapi.online/api/pokemon').then((res) =>
res.json().then((data) =>{
    data.map((movie) => console.log(movie.pokemon))
}))

