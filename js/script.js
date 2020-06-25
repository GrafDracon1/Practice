"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    this.count = +prompt("Скільки фільмів ви вже переглянули?");

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Скільки фільмів ви вже переглянули?");
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Останній переглянутий фільм?'),
        b = prompt('На скільки ви його оціните?');
    
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        this.movies[a] = b;
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (this.count < 10) {
      console.log('Переглянуто доволі мало фільмів');
    } else if (this.count >= 10 && this.count < 30) {
      console.log("Ви класичний глядач");
    } else if (this.count >= 30){
      console.log('Ви кіноман');
    } else {
      console.log('Виникла помилка');
    }
  },
  showMyDB: function(hidden){
    if(!hidden){
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },
  writeYourGenres: function() {
    // for(let i = 1; i <= 3; i++) {
    //   let genre = prompt(`Ваш любимий жанр під номером ${i}`);
    //   if(genre === '' || genre == null) {
    //     console.log('Ви ввели не коректні дані або не ввели їх зовсім');
    //     i--;
    //   } else {
    //     this.genres.push(genre);
    //   }
    // }

    for(let i = 1; i < 2; i++) {
      let genres = prompt(`Введіть ваші любимі жанри через кому`).toLowerCase();
      if(genres === '' || genres == null) {
        console.log('Ви ввели не коректні дані або не ввели їх зовсім');
        i--;
      } else {
        this.genres = genres.split(', ');
        this.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i)=>{
      console.log(`Любимий жанр #${i + 1} - це ${item}`);
    });
  }
};
