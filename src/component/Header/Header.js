import React from 'react';
import Typed from 'react-typed';




function Header() {
    return (
        <div className="header-wraper" id="Home">
            <div className="main-info">
            <h1 data-text="Thibaud Robillard"><span>Thibaud Robillard</span></h1>
                <Typed className="string"
                strings={[
                    'Web Developer',
                    '웹 개발자',
                    'Web Designer',
                    ' 디자이너',
                    'Front-End',
                    '프런트 엔드',
                    'Back-End',
                    '백엔드']}
                    typeSpeed={60}
                    backSpeed={70}
                    loop >
                </Typed>
                <div>
                <p className="neon arrow"><ion-icon name="chevron-down-outline"></ion-icon></p>
                </div>
            </div>
        </div>
    )
}

export default Header

