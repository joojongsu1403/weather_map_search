import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import _ from 'lodash';

const API_KEY = 'AIzaSyBL-tQiYqrtG9CmbUtTKQOO4BiaK3Fl2fo';

class WeatherList extends PureComponent {

    renderWeather = (cityData) => {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lat, lon } = cityData.city.coord;
        

        function average(data) {
            return _.round(_.sum(data)/data.length);
        };

        return (
            <tr key={name}>
                <td style={{textAlign:'center'}}>
                    <div style={{marginRight:'10px', width: '200px', height: '250px'}}>
                        <Map 
                            google={this.props.google}
                            style={{
                                width: '200px',
                                height: '250px'
                            }}
                            initialCenter={{
                                lat: lat,
                                lng: lon
                            }}
                            zoom={12}></Map>
                    </div>
                    <strong>{name}</strong>
                </td>
                <td><Chart average={average(temps) - 273} data={temps} color="orange" units="&#176;C" /></td>
                <td><Chart average={average(pressures)} data={pressures} color="green" units="hPa" /></td>
                <td><Chart average={average(humidities)} data={humidities} color="blue" units="%" /></td>
            </tr>
        );
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>도시</th>
                        <th>기온 (&#176;C)</th>
                        <th>기압 (hPa)</th>
                        <th>습도 (%)</th>
                    </tr>
                </thead>
                <tbody style={{width:'100%', height:'100px'}}>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    };
};

function mapStateToProps({ weather }) {
    return { weather };
};

export default connect(mapStateToProps)(GoogleApiWrapper({
    apiKey: API_KEY
})(WeatherList)); 