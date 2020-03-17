let app = new Vue({
  el: '#app',
  data: { //Er wordt een lege array en lege error- en statusmelding gemaakt voor de div met id="App"
    movies: [],
    error: '',
    status
  },
  methods: {
    //FUNCTIE fetchMovies
    fetchMovies: function () {
      this.status="";
      this.error="";
      let url = 'http://localhost:3000/movies/'; //Deze url geeft de inhoud van de json-file weer (wanneer de json-server 'aan staat')
      this.movies=[];
      fetch(url) //Als er gefetcht wordt op de 'website', volgt er een response.
        .then((response) => {
          if (response.status === 200) {
            return response.json(); //Geeft json-waardes terug
          } else {
            throw `error with status ${response.status}`;
          }
        })
        .then((movies) => { //Als de response lukt, worden de films uit movies.json in de array gezet
          this.movies = movies;
        })
        .catch((error) => {
          this.error = error;
        });
    },
    //FUNCTIE updateMovie
    updateMovie: function (id,title, genre, img) {
      this.status="";
      this.error="";
      let url = 'http://localhost:3000/movies/';
      let movie = {id: id, title: title, genre: genre, img: img}; //Variabele 'movie' aanmaken die de naam 'name' krijgt
      fetch(url + id,
        {
          method: "PUT", //PUT = iets aanpassen
          body: JSON.stringify(movie), //Zet een JavaScript-object om naar een json-string
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            return response.json();
          } else {
            throw `error with status ${response.status}`;
          }
        })
        .then((movie) => {
          //this.status=`Gewijzigd: ${movie.title}`;
          alert("De film werd succesvol gewijzigd.");
        })
        .catch((error) => {
          this.error = error;
        });
    },
    //FUNCTIE addMovie
    addMovie: function (id,title, genre, img) {
      this.status="";
      this.error="";
      let url = 'http://localhost:3000/movies/';
      let movie = {id: id, title: title, genre: genre, img: img}; //Variabele 'movie' aanmaken die de naam 'name' krijgt
      fetch(url + id,
        {
          method: "POST", //PUT = iets aanpassen
          body: JSON.stringify(movie), //Zet een JavaScript-object om naar een json-string
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            return response.json();
          } else {
            throw `error with status ${response.status}`;
          }
        })
        .then((movie) => {
          this.status=`Gewijzigd: ${movie.title}`;
        })
        .catch((error) => {
          this.error = error;
        });
    },
    //FUNCTIE deleteMovie
    deleteMovie: function (id,title, genre, img) {
      this.status="";
      this.error="";
      let url = 'http://localhost:3000/movies/';
      let movie = {id: id, title: title, genre: genre, img: img}; //Variabele 'movie' aanmaken die de naam 'name' krijgt
      fetch(url + id,
        {
          method: "DELETE", //PUT = iets aanpassen
          body: JSON.stringify(movie), //Zet een JavaScript-object om naar een json-string
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            return response.json();
          } else {
            throw `error with status ${response.status}`;
          }
        })
        .then((movie) => {
          alert("De film werd succesvol verwijderd. U wordt nu teruggestuurd naar de home-pagina.");
          window.location.href = "http://localhost:63342/Wp1/Wp1/MovieManager%20Project/moviemanager/project/home.html?_ijt=pv6tti1rcj11gpktif90kftc3h";
        })
        .catch((error) => {
          this.error = error;
        });
    },
  }
});
