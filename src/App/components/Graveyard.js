import PropTypes from 'prop-types';
import React from 'react';
// import GraveStone from './GraveStone';

export default function GraveYard({ deadStudents }) {
  return (
    <ul>
    {deadStudents.map((deadStudent) => <li key={deadStudent.id}>
        {deadStudent.firstName}
        {deadStudent.lastName}
        </li>)}
        {/* <GraveStone key={student.id} student={student}/> */}
    </ul>
  );
}

GraveYard.propTypes = {
  deadStudents: PropTypes.array.isRequired,
  // deadStudent: PropTypes.obj.isRequired
};
