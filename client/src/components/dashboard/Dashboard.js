import React from 'react'
import propTypes from 'prop-types'
import Apartment from '../../actions/builder/Apartment.ts';
import ApartBuilder from '../../actions/builder/ApartBuilder.ts';

const Dashboard = props => {
        function createFirst(e) {
          e.preventDefault();
          console.log('По ссылке кликнули.');
          const apartBuilder = new ApartBuilder();
          apartBuilder.setApartmentId("test");
          apartBuilder.setTempSensorId("test123");
          console.log(apartBuilder.build());
        }
        function createSecond(e) {
            e.preventDefault();
            console.log('По ссылке тоже кликнули.');
          }
        return (
        <>
          <a href="#" onClick={createFirst}>
            Нажми на меня
          </a>
          <a href="#" onClick={createSecond}>
            Нажми на меня
        </a>
        </>
        );
}

Dashboard.propTypes = {

}

export default Dashboard;

