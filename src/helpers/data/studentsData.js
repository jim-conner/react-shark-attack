// import React from 'react';
// import PropTypes from 'prop-types';

const students = [
  {
    id: 0,
    firstName: 'Robert',
    lastName: 'Cole',
    isDead: false,
  },
  {
    id: 1,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false,
  },
  {
    id: 2,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false,
  },
  {
    id: 3,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false,
  },
  {
    id: 4,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: false,
  },
  {
    id: 5,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false,
  },
  {
    id: 6,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false,
  },
  {
    id: 7,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false,
  },
  {
    id: 8,
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false,
  },
  {
    id: 9,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false,
  },
  {
    id: 10,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false,
  },
  {
    id: 11,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false,
  },
  {
    id: 12,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false,
  },
  {
    id: 13,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false,
  },
  {
    id: 14,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false,
  },
  {
    id: 15,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false,
  },
  {
    id: 16,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false,
  },
  {
    id: 17,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false,
  },
  {
    id: 18,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false,
  },
  {
    id: 19,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false,
  },
  {
    id: 20,
    firstName: 'Sean',
    lastName: 'Rossetie',
    isDead: false,
  },
  {
    id: 21,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false,
  },
  {
    id: 22,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false,
  },
  {
    id: 23,
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false,
  }

];

const getLivingStudents = () => students.filter((student) => !student.isDead);
const getDearlyBeloved = () => students.filter((student) => student.isDead);

const followTheLight = () => {
  const currentLiveStudents = getLivingStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * currentLiveStudents.length)];

  const index = students.indexOf(randomStudent);
  students[index].isDead = true;

  return [getLivingStudents(), getDearlyBeloved()];
};

export {
  getDearlyBeloved,
  getLivingStudents,
  followTheLight,
  students
};

// export default function livingStudents() {
//   const studentsArray = students.map((student => <div key={student.id}>
//       {student.value}
//     </div>);
//   const studentsArray = students.map((student) => ({ ...student }));
//   studentsArray.isDead=false ? studentsArray : '';
//   filter thru students
//   console.warn(studentsArray);

//   return (
//     <div><h3>{studentsArray}</h3></div>
//   );
// }
// {/* students.isDead === false ? isDeadArray : 'N' */}

// {/* export function dearlyBeloved() {
//   return (
//     <div>
//     </div>
//   );
// }

// export function followTheLight() {
//   return (
//     <div>
//     </div>
//   );
// } */}

// {/* console.console.warn(dearlyBeloved);
// console.console.warn(followTheLight); */}

// getLivingStudents.propTypes = {
//   students: PropTypes.object.isRequired,
//   setStudents: PropTypes.func.isRequired
// };
