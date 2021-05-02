"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы посмотрели за последнюю неделю?", "");

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}; 

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

console.log(personalMovieDB);
