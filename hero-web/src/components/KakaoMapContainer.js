import React, {useState} from 'react';
import {Map, MapMarker, CustomOverlayMap} from "react-kakao-maps-sdk";
import locations from '../locations.json';
import './KakaoMapContainer.css';

function KakaoMapContainer({location}) {
    const [selectedMarker, setSelectedMarker] = useState(null);

    const recycleBinBox = {
        src: process.env.PUBLIC_URL + '/recycleBox.png',
        size: { width: 32, height: 32 },
    };

    return (
        <Map
            center={location}
            className="kakaoMap" // CSS 클래스 적용
        >
            {locations.map((location, index) => (
                <MapMarker
                    key={index}
                    position={{lat: location.위도, lng: location.경도}}
                    image={recycleBinBox}
                    onClick={() => setSelectedMarker(location)}
                />
            ))}

            {selectedMarker && (
                <CustomOverlayMap
                    position={{lat: selectedMarker.위도, lng: selectedMarker.경도}}
                    zIndex={2}
                >
                    <div className="customOverlay"> {/* CSS 클래스 적용 */}
                        {selectedMarker.정류소명}
                    </div>
                </CustomOverlayMap>
            )}
        </Map>
    );
}

export default KakaoMapContainer;
