const apiUrlStart = 'http://www.omdbapi.com/?t=';
const apiUrlEnd = '&apikey=d4e17fd6';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const module = document.getElementById('module');

this.data;

var movies = [
  { title: 'Inception', youtubeId: 'YoHD9XEInc0' },
  { title: 'The Departed', youtubeId: 'iojhqm0JTW4' },
  { title: 'Shutter Island', youtubeId: '5iaYLCiq5RM' },
  { title: 'Notorious', youtubeId: 'kDDv6pAbN_U' },
  { title: 'The Intouchables', youtubeId: '34WIbmXkewU' },
  { title: 'The Green Mile', youtubeId: 'Ki4haFrqSrw' },
  { title: 'The Matrix', youtubeId: 'vKQi3bBA1y8' },
  { title: 'The Hateful Eight', youtubeId: 'nIOmotayDMY' },
  { title: 'Interstellar', youtubeId: 'zSWdZVtXT7E' },
  { title: 'Catch Me If You Can', youtubeId: '7pyIxz8Qg' },
  { title: 'Snatch', youtubeId: '9Jar2XkBboo' },
  { title: 'The Usual Suspects', youtubeId: 'oiXdPolca5w' },
  { title: 'Inglorious Basterds', youtubeId: 'KnrRy6kSFF0' },
  { title: 'Django Unchained', youtubeId: '0fUCuvNlOCg' },
  { title: 'Se7en', youtubeId: 'znmZoVkCjpI' },
  { title: 'Scarface', youtubeId: '7pQQHnqBa2E' },
  { title: 'Hacksaw Ridge', youtubeId: 's2-1hz1juBI' },
  { title: 'Gangs of New York', youtubeId: 'qHVUPri5tjA' },
  { title: 'Blood Diamond', youtubeId: 'yknIZsvQjG4' },
  { title: 'Gran Torino', youtubeId: 'RMhbr2XQblk' },
];

function calculateRelease(year) {
  currentTime = new Date();
  console.log(currentTime.getFullYear() + ' ' + year);

  return currentTime.getFullYear() - parseInt(year);
}

showMovies(apiUrlStart, apiUrlEnd);

function showMovies(startUrl, endUrl) {
  let i = 0;

  movies.forEach((movie) => {
    console.log(movie.title);
    fetch(apiUrlStart + movie.title + apiUrlEnd)
      .then((response) => {
        return response.json();
      })
      .then((m) => {
        console.log(m);

        const el = document.createElement('div');
        el.setAttribute('class', 'movie-gallery');

        const image = document.createElement('img');
        const text = document.createElement('h2');
        const description = document.createElement('plot');
        const movies = this.movies;
        const info = document.createElement('div-2');
        const rating = document.createElement('rating');
        const release = document.createElement('release');
        const metacriticRating = document.createElement('p');
        const rottenTomatoesRating = document.createElement('p');
        const video = document.createElement('iframe');

        video.setAttribute('class', 'video');
        video.src = 'https://www.youtube.com/embed/' + movie.youtubeId;

        image.src = m.Poster;

        description.innerText = m.Plot;

        text.innerHTML = m.Title;

        rating.innerText = 'Rating: ' + m.imdbRating;

        release.innerText =
          'Released ' + calculateRelease(m.Year) + ' Years ago';

        // metacriticRating.innerText = 'Metacritic: ' + m.Ratings[2].Value;
        // rottenTomatoesRating.innerText =
        //   'RottenTomatoes: ' + m.Ratings[0].Value;

        info.appendChild(description);
        el.appendChild(text);
        // el.appendChild(image);
        //el.appendChild(description);
        el.appendChild(video);

        el.appendChild(info);
        el.appendChild(rating);
        el.appendChild(release);
        main.appendChild(el);
      });
  });

  // // const searchUrl = "http://www.omdbapi.com/?t="+searchTerm+"&apikey="+apiKey;Here is your key: 62ae43fb

  // Please append it to all of your API requests,

  // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=62ae43fb

  // Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=bae0c994-e709-4218-a640-bd63be97cd28
  // If you did not make this request, please disregard this email.
}
