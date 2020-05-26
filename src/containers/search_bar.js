import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        };
    };

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const list = this.props.weather.map(num => num.city.name);
        const area = this.state.term;
        const reset = this.setState({ term: '' });
   
        if( this.state.term === '' ){
            return
        } else if( list.find(name => {return String(name).toLowerCase() === area.toLowerCase()}) ){
            alert('중복 되었습니다.');
            return reset;
        } else {
            this.props.fetchWeather(area);
            return reset;
        };
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group" style={{marginTop:'30px'}}>
                <input 
                    placeholder="지역(시, 군) 위치를 영어로 입력해주세요. ex) busan, haman"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
};

function mapStateToProps ({ weather }) {
    return { weather };
};

function mapDispatchToProps (dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps )(SearchBar);