import React from 'react';
import PropTypes from 'prop-types';

export default function SharkTank({ livingStudents }) {
  return (
    <ul>
    {livingStudents.map((livingStudent) => <li key={livingStudent.id }>
        {livingStudent.firstName}
        {livingStudent.lastName}
        </li>)}
    </ul>
  );
}

SharkTank.propTypes = {
  livingStudents: PropTypes.array.isRequired
};
// getLivingStudents.propTypes = {
//   students: PropTypes.object.isRequired,
//   setStudents: PropTypes.func.isRequired
// };
