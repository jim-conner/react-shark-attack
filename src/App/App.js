import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import {
  followTheLight,
  getLivingStudents,
  getDearlyBeloved,
  resurrectStudents,
} from '../helpers/data/studentsData';
import GraveYard from './components/Graveyard';
import SharkTank from './components/SharkTank';
import './App.scss';

function App() {
  const [livingStudents, setLivingStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLivingStudents(getLivingStudents());
    setDeadStudents(getDearlyBeloved());
  }, []);

  const killEmAll = () => {
    const [living, dead] = followTheLight();
    setLivingStudents(living);
    setDeadStudents(dead);
  };

  const ressurect = () => {
    const [living, dead] = resurrectStudents();
    setLivingStudents(living);
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
      <>
        <SharkTank livingStudents={livingStudents}/>
          <Button
          color="danger"
          size="lg"
          onClick={killEmAll}
          disabled={livingStudents.length <= 0}
        >
          {livingStudents.length <= 0
            ? 'Jaws was here.'
            : 'SHARK ATTACK'}
        </Button>
      </>

      <>
      <Button
        color="info"
        size="lg"
        onClick={ressurect}
        disabled={deadStudents.length <= 0}
      >
        {deadStudents.length <= 0
          ? 'THEY LIVE!'
          : 'RESURRECT'}
      </Button>
      <GraveYard deadStudents={deadStudents}/>
      </>
      </div>
  );
}

export default App;
