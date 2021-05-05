import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';
import sharktank from '../../assets/sharktank.jpg';

export default function SharkTank({ livingStudents }) {
  return (
    <>
      <div
      className="card-container"
      style={{
        backgroundImage: `url(${sharktank})`
      }}
      >
        {livingStudents.map((liveStudent) => (
          <LiveStudent
            key={liveStudent.id}
            liveStudent={liveStudent}/>
        ))}
      </div>
  </>
  );
}

SharkTank.propTypes = {
  livingStudents: PropTypes.array.isRequired,
  liveStudent: PropTypes.object
};
