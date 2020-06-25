"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Останній переглянутий фільм?'),
      b = prompt('На скільки ви його оціните?'),
      c = prompt('Останній переглянутий фільм?'),
      d = prompt('На скільки ви його оціните?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);