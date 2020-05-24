import axios from 'axios';
export const postApartment = ({ apartment }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
   // if (apartment instanceof Apartment) {
       console.log("!!!!");
        const apartId = apartment.apartId;
        const temp = apartment.tempSensorId;
        const bright = apartment.humSensorId;
        const humidity = apartment.brightSensorId;
        const body = JSON.stringify({ apartId, temp, humidity, apartment, bright });
    
        console.log(body);
    try {
        const res = await axios.post('/api/apartment', body, config);
        dispatch({
            payload: res.data
        });

    } catch(err) {
        const errors = err.response.data.errors;
    }
}