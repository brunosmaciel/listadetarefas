/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [timeAPontos, settimeAPontos] = useState(0);
  const [timeBPontos, settimeBPontos] = useState(0);
  const [timeCPontos, settimeCPontos] = useState(0);
  const [timeDPontos, settimeDPontos] = useState(0);
  const [timea, setTimea] = useState('');
  const [timeb, setTimeb] = useState('');
  const [timec, setTimec] = useState('');
  const [timed, setTimed] = useState('');

  const handleChangeA = (e) => {
    setTimea(e.target.value);
  };
  const handleChangeB = (e) => {
    setTimeb(e.target.value);
  };
  const handleChangeC = (e) => {
    setTimec(e.target.value);
  };
  const handleChangeD = (e) => {
    setTimed(e.target.value);
  };

  return (
    <div className="main-content">
      <div className="times">
        <input type="text" placeholder="time a" onChange={handleChangeA} />
        <input type="text" placeholder="time b" onChange={handleChangeB} />
        <input type="text" placeholder="time c" onChange={handleChangeC} />
        <input type="text" placeholder="time d" onChange={handleChangeD} />
      </div>
      <div className="pontos">
        <p>{timea}</p>
        <p>{timeAPontos}</p>
        <button onClick={() => settimeAPontos(timeAPontos + 1)}>+</button>
        <button onClick={() => settimeAPontos(timeAPontos - 1)}>-</button>
      </div>
      <div className="pontos">
        <p>{timeb}</p>
        <p>{timeBPontos}</p>
        <button onClick={() => settimeBPontos(timeBPontos + 1)}>+</button>
        <button onClick={() => settimeBPontos(timeBPontos - 1)}>-</button>
      </div>
      <div className="pontos">
        <p>{timec}</p>
        <p>{timeCPontos}</p>
        <button onClick={() => settimeCPontos(timeCPontos + 1)}>+</button>
        <button onClick={() => settimeCPontos(timeCPontos - 1)}>-</button>
      </div>
      <div className="pontos">
        <p>{timed}</p>
        <p>{timeDPontos}</p>
        <button onClick={() => settimeDPontos(timeDPontos + 1)}>+</button>
        <button onClick={() => settimeDPontos(timeDPontos - 1)}>-</button>
      </div>
    </div>
  );
}
