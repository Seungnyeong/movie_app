import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

// 상태값 즉 state가 필요하지 않는 컴포넌트는 굳이 클래스 컴포넌트로 만들지 않고
// 함수형 컴포넌트로 선언한다

function Movie({title, year, summary, poster, genres}){
return <div className="movie">
         
            <img src={poster} alt={title} tilte="title"/>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres_genre">{genre}</li>
                    )
                )}
            </ul>
            <p className="movie_summary">{summary.slice(0,140)}...</p>
        </div>
      </div>
}   

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;