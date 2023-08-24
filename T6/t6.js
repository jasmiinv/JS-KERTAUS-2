'use strict';

/*let more = true;
while (more) {
  const title = prompt('Syötä elokuvan nimi');
  const rating = prompt('Syötä arvio (1-5)');
  const movie = {title, rating};
  movies.push(movie);
  const more = confirm('Halautko syöttää lisää');
}*/
const movies = [
  {title: 'No Country for Old Men', rating: '2'},
  {title: 'Star Wars', rating: '5'},
  {title: 'Jaws', rating: '4'},
  {title: 'Uuno', rating: '1'},
];

function sortMovies(a, b) {
  const vertailu = a.rating - b.rating;
  return vertailu;
}

movies.sort(sortMovies);
console.log(movies);
for (const movie of movies) {
  const td1 = document.createElement('td');
  td1.innerText = movie.title;

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('kohde').append(tr);
}

const favorite = movies[0];
document.getElementById('fav').innerText = favorite.title;
