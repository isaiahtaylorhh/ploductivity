import React from 'react';

import { IonProgressBar } from '@ionic/react';

import './plod.css';
import { PlodType } from '../utils/types';
import { PlodData } from '../utils/plodding';

interface PlodProps {
  plod: PlodData;
}

const Plod = (props: PlodProps) => {
  const { plod } = props;
  return (
    <div className="Plod">
      <div className="plodName">{`${plod.goal} ${plod.units}`}</div>

      <IonProgressBar
        color="danger"
        value={plod.completed / plod.goal}></IonProgressBar>
    </div>
  )
}

export default Plod;