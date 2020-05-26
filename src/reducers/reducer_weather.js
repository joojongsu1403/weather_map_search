import { FETCH_WEATHER } from '../actions/index'; 

export default function (state=[], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            if (action.payload.data){
                return [ action.payload.data, ...state ];   
            } else if(action.payload.response.status === 404){
                alert(`잘못 입력하셨거나 없는 지역 입니다. error: status 404`);
                return state;
            };            
    };
    return state;
};