import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';


function Movie({title, year, summary, poster, genres}){
    return (
    <div className = "movie">
            <Link
                to= {{
                    pathname: '/movie-detail',
                    state: { year, title, summary, poster, genres },
                }}
                >
        <img src = {poster} alt = {title} title = {title} />
        <div className = "movie__data">
            <h3 className = "movie__title">{title}</h3>
            <h5 className = "movie__year">{year}</h5>
            <ul className = "movie__genres">
                {genres.map((genre, index) => {
                    return <li key = {index} className = "movie__genre">{genre}</li>;
                })}
            </ul>
            <p className = "movie_summary">{summary.slice(0,180)}...</p> 
        </div>
    </Link>
 </div>
    );
}

// Movie에 넘어와야 하는 영화 데이터를 정의하고 관리하기 위해 PropTypes를 사용. p는 반드시 소문자로...^^
Movie.propTypes = {
                   year: PropTypes.number.isRequired,
                   title: PropTypes.string.isRequired,
                   summary: PropTypes.string.isRequired,
                   poster: PropTypes.string.isRequired, //영화 포스터 이미지 주소 저장. props의 이름을 이해하기 쉽도록 medium_cover_image가 아니라 poster라고 지정했다고.
                   genres: PropTypes.arrayOf(PropTypes.string).isRequired, //장르는 여러개일 수 있으므로 배열
                 }; // id는 자료형이 Number이고, 반드시 있어야 하니까 PropTypes.number.isRequired로 작성한다.

export default Movie;