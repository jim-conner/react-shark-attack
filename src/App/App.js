import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import {
  followTheLight,
  getLivingStudents,
  getDearlyBeloved,

} from '../helpers/data/studentsData';
// import livingStudents from '../helpers/data/studentsData';
import GraveYard from './components/GraveYard';
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
    setDeadStudents(getDearlyBeloved());
    // console.warn(livingStudents);
  }, []);
  //   // livingStudents(students) setStudents();
  //   // livingStudents(students).then((studentArray) => setStudents() -console.log((studentArray));
  //   // console.warn(studentArray);
  // };

  // onClick(() =>

  // )

  const killEmAll = () => {
    const [living, dead] = followTheLight();
    setLivingStudents(living);
    setDeadStudents(dead);
    console.warn('clicked Dead button', living, dead);
  };

  return (
    <div className='App'>
      <h3>Living Students</h3>
      <Button
        color="danger"
        onClick={killEmAll}
        disabled={livingStudents.length <= 0}
      >
        SHARK ATTACK!
      </Button>
      <SharkTank livingStudents={livingStudents}/>
      {/* {livingStudents.length ? <Button color="danger" onClick={killEmAll}>SHARK ATTACK!</Button> : null} */}
      {console.warn(livingStudents.length)}

      {/* or I could use this disabled attribute */}
      <h3>Dead Students</h3>
        <GraveYard deadStudents={deadStudents}/>
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
