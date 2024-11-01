import React from 'react';

const Test05Sub = ({ name, age, addr, tel, color, bgcolor, done }) => {
    return (
        <div>
            <h2>신상명세서</h2>
            <ul style={{color: color, backgroundColor: bgcolor}}>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>핸드폰 : {tel}</li>
                <li>동의여부 : {done ? '동의' : '비동의'}</li>
            </ul>
        </div>
    );
};

export default Test05Sub;