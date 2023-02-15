import { IonApp, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react';
import {useState } from 'react';


function App() {
  const [name, setName] = useState();
  return (
    <IonApp>
      <IonHeader>
      </IonHeader>
      <IonContent className="ion-padding">
      </IonContent>
    </IonApp>
  );
}

export default App;