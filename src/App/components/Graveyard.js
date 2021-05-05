import PropTypes from 'prop-types';
import React from 'react';
import GraveStone from './GraveStone';

export default function GraveYard({ deadStudents }) {
  return (
      <div className="card-container">
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
