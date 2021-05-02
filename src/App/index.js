import React, { useEffect, useState } from 'react';
import {
  killStudent,
  getLivingStudents,
  getDeadStudents,

} from '../helpers/data/studentsData';
// import livingStudents from '../helpers/data/studentsData';
import Graveyard from './components/GraveYard';
import SharkTank from './components/SharkTank';
import './App.scss';

function App() {
  // const [domWriting, setDomWriting] = useState('Nothing Here!');
  const [livingStudents, setLivingStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  // const handleClick = (e) => {
  //   console.warn(`You clicked ${e.target.id}`);
  //   setDomWriting(`You clicked ${e.target.id}! Check the Console!`);
  //   setDomWriting(`You clicked ${e.target.id}! Check the setSTudents!`);
  useEffect(() => {
    setLivingStudents(getLivingStudents());
    setDeadStudents(getDeadStudents());
    // console.warn(livingStudents);
  }, []);
  //   // livingStudents(students) setStudents();
  //   // livingStudents(students).then((studentArray) => setStudents() -console.log((studentArray));
  //   // console.warn(studentArray);
  // };

  // onClick(() =>

  // )

  const killEmAll = () => {
    const [living, dead] = killStudent();
    setLivingStudents(living);
    setDeadStudents(dead);
    console.warn('clicked Dead button');
  };

  return (
    <div className='App'>

  {console.warn(livingStudents.length)}

      {/* kill  button will go here ADD REACTSTRAP BUTTON */}
      {livingStudents.length ? <button onClick={killEmAll}>Kill `&apos;`em All</button> : null}
      {/* this is hiding button ^^ */}

      <button
        onClick={killEmAll}
        disabled={livingStudents.length <= 0}
      >
        Kill em ALL
      </button>
        <SharkTank livingStudents={livingStudents}/>
      <h3>Dead Students</h3>
        <Graveyard deadStudents={deadStudents}/>

      {/* div with alive students */}
      {/* div with dead students */}
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
