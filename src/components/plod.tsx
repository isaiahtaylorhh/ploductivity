import React from 'react';

import { IonProgressBar } from '@ionic/react';

import './plod.css';
import { PlodData } from '../utils/types';

interface PlodProps {
  plod: PlodData;
}

const Plod: React.FC<PlodProps> = (props: PlodProps) => {
  const { plod: { goal, completed, units } } = props;
  return (
    <div className="Plod">
      <div className="plodName">{`${goal} ${units}`}</div>

      <IonProgressBar
        color="danger"
        value={completed / goal}></IonProgressBar>
    </div>
  )
}

export default Plod;