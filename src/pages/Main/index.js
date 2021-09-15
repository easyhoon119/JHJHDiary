import React, { useState } from 'react';

function Main() {
    let [name, setName] = useState([['아쿠아 플레닛', 0], ['보정동 카페거리', 0], ['코엑스 디디쇼', 0]]);
    let newName = [...name];

    setInterval(() => {
        newName.sort(function (a, b) {
            return b[1] - a[1];
        })
    }, 1000);

    return (
        <div className="App">
            <div className="navbar">
                <h3>My Blog</h3>
            </div>
            <div className="list">
                <div className="content">
                    <h3>{name[0][0]} <span onClick={() => { newName[0][1] += 1; setName(newName); }}>😍</span> {name[0][1]}</h3>
                    <p>현이와 광교에 위치한 아쿠아 플래닛 간날!</p>
                    <p>2021년 5월 6일</p>
                    <hr />
                </div>
                <div className="content">
                    <h3>{name[1][0]} <span onClick={() => { newName[1][1] += 1; setName(newName); }}>😍</span> {name[1][1]}</h3>
                    <p>현이와 보정동에 위치한 보정동 카페거리 간날!</p>
                    <p>2021년 5월 19일</p>
                    <hr />
                </div>
                <div className="content">
                    <h3>{name[2][0]} <span onClick={() => { newName[2][1] += 1; setName(newName); }}>😍</span> {name[2][1]}</h3>
                    <p>현이와 삼성동에 위치한 코엑스 디디쇼 간날!</p>
                    <p>2021년 6월 13일</p>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Main;