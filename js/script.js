"use strict";

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: true,
   start: function () {
      this.count = +prompt("Сколько фильмов Вы посмотрели за последний месяц?", "");
      while (this.count == "" || this.count == null || isNaN(this.count)) {
         this.count = +prompt("Сколько фильмов Вы посмотрели за последний месяц?", "");
      }
   },
   writeYourGenres: function () {
      let favGenre;
      for (let i = 1; i <= 3; i++) {
         favGenre = prompt(`Введите любимый жанр под номером ${i}`);
         if (favGenre == "" || favGenre == null || !isNaN(favGenre)) {
            console.log("Ошибка, жанр не тот");
            i--;
         } else {
            this.genres[i - 1] = favGenre;
         }
      }
   },
   showYourGenres: function () {
      this.genres.forEach(function (item, i, arr) {
         console.log(`${i + 1}-й любимый жанр: ${item} в массиве --- ${arr}`);
      });
   },
   rememberMyFilms: function () {
      for (let i = 0; i != this.count; i++) {
         const filmName = prompt("Название просмотренного фильма"),
            filmRate = prompt("Какую оценку дадите?");
         if (filmName != null && filmRate != null & filmName != '' && filmRate != '' && filmName.length < 50) {
            this.movies[filmName] = filmRate;
            console.log("done");
         } else {
            console.log("error");
            i--;
         }
      }
   },
   detectPersonalLevel: function () {
      if (this.count == 0) {
         console.log("Вы не смотрели фильмов");
      } else if (this.count <= 10) {
         console.log("Вы посмотрели достаточно мало фильмов");
      } else {
         console.log("Да Вы киноман!");
      }
   },
   toggleVisibleMyDB: function () {
      if (this.privat) {
         this.privat = false;
      } else {
         this.privat = true;
      }
   },
   showMyDB: function () {
      if (this.privat) {
         console.log("База данных приватна.");
      } else {
         console.log(personalMovieDB);
      }
   }
};

personalMovieDB.start();

personalMovieDB.writeYourGenres();
personalMovieDB.showYourGenres();

personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();