// 메인페이지이다. KakaoMapContainer과 SearchBar를 렌더링한다.
import React, {useState} from "react";
import KakaoMapContainer from "../components/KakaoMapContainer";
import Header from "../components/Header";

function SearchPage() {

    const startLocation = {lat: 37.556944, lng: 126.923917};
    const [location, setLocation] = useState(startLocation);

    const handleSearch = (searchTerm) => {
        let ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(searchTerm, function (data, status, pagination) {
                if (status === window.kakao.maps.services.Status.OK) {
                    setLocation({lat: data[0].y, lng: data[0].x});
                }
            }
        );
    };

    return (
        <div>
            <Header onSearch={handleSearch}/>
            <KakaoMapContainer location={location}/>
        </div>
    );
}

export default SearchPage;