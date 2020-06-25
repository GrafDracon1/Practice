"use strict";

let numberOfFilms;

function start(){
  numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Переглянуто доволі мало фільмів');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичний глядач");
  } else if (personalMovieDB.count >= 30){
    console.log('Ви кіноман');
  } else {
    console.log('Виникла помилка');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if(!hidden){
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres.push(prompt(`Ваш любимий жанр під номером ${i}`));
  }
}

writeYourGenres();
