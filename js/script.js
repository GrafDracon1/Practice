"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Останній переглянутий фільм?'),
    b = prompt('На скільки ви його оціните?');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log('error');
    i--;
  }
}

// let i = 0;
// while (i < 2) {
//   const a = prompt('Останній переглянутий фільм?'),
//   b = prompt('На скільки ви його оціните?');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     i++;
//   } else {
//     console.log('error');
//     i--;
//   }
// }

// let i = 0;
// do {
//   const a = prompt('Останній переглянутий фільм?'),
//   b = prompt('На скільки ви його оціните?');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     i++;
//   } else {
//     console.log('error');
//     i--;
//   }
// } while (i < 2);

if (personalMovieDB.count < 10) {
  console.log('Переглянуто доволі мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Ви класичник глядач");
} else if (personalMovieDB.count >= 30){
  console.log('Ви кіноман');
} else {
  console.log('Виникла помилка');
}

console.log(personalMovieDB);