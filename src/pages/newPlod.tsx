import React from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList
} from '@ionic/react';

const NewPlod: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Plod</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        Create a new one
      </IonContent>
    </IonPage>
  )
}

export default NewPlod;
