import PropTypes from 'prop-types';
import React from 'react';
import GraveStone from './GraveStone';
import graveyard from '../../assets/graveyard.jpg';

export default function GraveYard({ deadStudents }) {
  return (
      <div
      className="card-container"
      style={{
        backgroundImage: `url(${graveyard})`
      }}
      >
        {deadStudents.map((deadStudent) => (
          <GraveStone
            key={deadStudent.id}
            deadStudent={deadStudent}/>

        ))}
      </div>
  );
}

GraveYard.propTypes = {
  deadStudents: PropTypes.array.isRequired,
  deadStudent: PropTypes.object
};
