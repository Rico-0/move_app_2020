import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


//a href는 페이지 전체를 새로고침하는 링크이므로 리액트 장점 활용이 힘들어서 Link to 태그를 쓴다.
// pathname은 URL , state는 우리가 route props에 보내줄 데이터 (to props에 객체를 전달했음)
// {{ pathname: '/about', state: { fromNavigation: true}}}
function Navigation(){
    return (
        <div className = "nav">
            <Link to = "/">home</Link> 
            <Link to = "/about">About</Link>
        </div>
    );
}

export default Navigation;