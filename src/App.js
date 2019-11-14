import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  // async 선언으로 비동기화(오기까지 기다림) 그거 뭐냐고 물으신다면 await가 있는 부분이 다 올때까지 기다림
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    console.log(movies);
    this.setState({ movies, isLoading: false });
  }
  // data patch 하는 부분
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state
    return (
    <section className="container">{isLoading
      ? (
        <div className="loader">
           <span className="loader_text">Loading ...</span> 
        </div>
      )
      : (
          <div className="movies">
            {
               movies.map(movie => {
                return <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image} 
                  genres={movie.genres}
                  />
              })
            }
          </div>
        )}
     </section>
    )
  }
}
export default App;
