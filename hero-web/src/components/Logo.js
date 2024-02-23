// src/components/Header.js

import React from 'react';

function Logo() {
    const imagePath = process.env.PUBLIC_URL + '/logo.png';

    // 로고 클릭시 메인페이지로 이동
    return (
        <div>
            <img
                src= {imagePath}
                alt="로고"
                style={ {width: "150px"}}
                onClick={() => window.location.href = "/"}
            />
        </div>
    );
}

export default Logo;
