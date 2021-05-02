"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов Вы посмотрели за последний месяц?", "");

   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов Вы посмотрели за последний месяц?", "");
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

let favGenre;

function writeYourGenres() {
   
   for (let i = 1; i <= 3; i++) {
      favGenre = prompt(`Введите любимый жанр под номером ${i}`);
      
      if (favGenre == "" || favGenre == null || !isNaN(favGenre)) {
         console.log("Ошибка, жанр не тот");
         i--;
      } else {
         i--;
         personalMovieDB.genres[i] = favGenre;
         i++;
      }

   }

}

writeYourGenres();

function rememberMyFilms() {
   for (let i = 0; i != numberOfFilms; i++) {
      const filmName = prompt("Название просмотренного фильма"),
            filmRate = prompt("Какую оценку дадите?");
   
      if (filmName != null && filmRate != null & filmName != '' && filmRate != '' && filmName.length < 50) {
         personalMovieDB.movies[filmName] = filmRate;
         console.log("done");
      } else {
         console.log("error");
         i--;
      }
   }
}

rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count == 0) {
      console.log("Вы не смотрели фильмов");
   } else if (personalMovieDB.count <= 10) {
      console.log("Вы посмотрели достаточно мало фильмов");
   } else {
      console.log("Да Вы киноман!");
   }
}

detectPersonalLevel();

function showMyDB() {
   if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
   } else {
      console.log("База данных приватна.");
   }
}

showMyDB();