let number0Films = +prompt('Сколько фильмов вы уже посмотрели ?', '');
let personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let lastFilms = prompt('Один из последних просмотренных фильмов?', '');
let gradeFilms = prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastFilms] = gradeFilms;

console.log(personalMovieDB)
