import React from 'react';
import { SearchBar, WeatherList } from '../containers';

function App() {
  return (
    <div className="App" style={{width:'1200px', height:'auto', margin: '0 auto'}}>
        <SearchBar />
        <WeatherList />
        <ul style={{textAlign: 'center', listStyle:'none', color:'red'}}>
          <li>해외에서 지역 좌표를 가지고 와서 위치 및 데이터가 제한적이고 정확하지 않습니다.</li>
          <li>중복되거나 없는 지역, 입력이 잘못되었을 경우 에러를 반환합니다.</li>
          <li><strong>해외 api라 영어로 검색해 주세요.</strong></li>
          <li>출처(api) = OpenWeatherMap</li>
        </ul>
    </div>
  );
};

export default App;
