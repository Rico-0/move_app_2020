import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie'; //Movie 컴포넌트 import
import './Home.css';


class Home extends React.Component {
  state = {
    isLoading: true, //영화 앱 데이터 로딩 체크하는 변수. 초기값은 true임
    movies: [], // 로딩된 영화 데이터를 저장할 수 있도록 movies state를 만든다.
  };

  getMovies = async() => { // getMovies() 함수는 시간이 필요하고
      const{  // 구조 분해 할당
        data:{
          data : {movies},
        }
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
      // axios.get()의 실행을 기다려 달라고 await로 자바스크립트에게 말해 줌
     this.setState({movies, isLoading: false}); // 왼쪽은 state고 오른쪽은 구조 분해 할당으로 얻은 영화 데이터가 있는 변수임! 하지만 ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 코드 축약이 가능함.
    }

  componentDidMount(){
    // 영화 데이터 (영화 앱) 로딩. JS의 fetch() 함수를 알아야 하지만 어려워서 Axios라는 도구를 사용할 예정
    //axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.getMovies();
    
  }

  render(){ 
    // 구조 분해 할당 : this.state에 있는 isLoadingd을 우선 얻으면 항상 this.state를 입력하지 않아도 된다.
    const { isLoading, movies } = this.state;
    // 삼항 연산자 : isLoading이 true이면 Loading..., false이면 영화 데이터 출력   (컴포넌트를 여러 개 출력할 때는 유일한 값을 이용하여 key props를 추가해야 한다. 그 key가 id)
    return (
       <section className="container">
         {isLoading ? ( <div className="loader">
                          <span className="loader__text">Loading...</span>
                        </div>
       ) : (
         <div className="movies">
            {movies.map((movie) => (
                                <Movie
                                   key={movie.id} 
                                   year={movie.year} 
                                   title={movie.title} 
                                   summary={movie.summary} 
                                   poster={movie.medium_cover_image}
                                   genres={movie.genres} 
                                   />
                                  ))}
                                  </div>
       )}
        </section> // 'We are ready' 부분에 영화 데이터를 출력할 것이다. -> 그 부분에 movies.map() 함수로 컴포넌트를 출력한다.
    );
  }
}

export default Home;
