import React, { useEffect, useState } from 'react';
import livingStudents from '../helpers/data/studentsData';
import './App.scss';

function App() {
  // const [domWriting, setDomWriting] = useState('Nothing Here!');
  const [students, setStudents] = useState([]);

  // const handleClick = (e) => {
  //   console.warn(`You clicked ${e.target.id}`);
  //   setDomWriting(`You clicked ${e.target.id}! Check the Console!`);
  //   setDomWriting(`You clicked ${e.target.id}! Check the setSTudents!`);
  useEffect(() => {
    livingStudents(students);
    // console.warn(students);
    setStudents();
  }, []);
  //   // livingStudents(students) setStudents();
  //   // livingStudents(students).then((studentArray) => setStudents() -console.log((studentArray));
  //   // console.warn(studentArray);
  // };

  return (
    <div className='App'>
      <h3>{students}</h3>
    </div>
  );

  // return (
  //   <div className='App'>
  // //     <h2>INSIDE APP COMPONENT</h2>
  // //     <div>
  // //       <button
  //         id='this-button'
  //         className='btn btn-info'
  //         onClick={handleClick}
  //       >
  //         I am THIS button
  //       </button>
  //     </div>
  //     <div>
  //       <button
  //         id='that-button'
  //         className='btn btn-primary mt-3'
  //         onClick={handleClick}
  //       >
  //         I am THAT button
  //       </button>
  //     </div>
  //     <h3>{domWriting}</h3>
  //     <h3>{students}</h3>
  //     {/* <div className="Graveyard">{livingStudents()}</div> */}
  //   </div>
  // );
}

export default App;
