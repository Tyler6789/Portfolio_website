import { setupIonicReact, IonApp, IonContent, IonPage, IonMenu, IonButtons, IonMenuButton, IonHeader, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react';
import {useState } from 'react';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* custom styles */
import './Theme/variables.css';

setupIonicReact();

function App() {
  const [name, setName] = useState();
  return (
    <IonApp>
        <ion-header color="dark">
            <ion-toolbar>
            <ion-title>Tyler Wigginton</ion-title>
            </ion-toolbar>
        </ion-header>
        <IonContent fullscreen={true} color="dark" className="ion-padding">
            <h1>Animal Facts</h1>

            <h2>Rhinoceros</h2>
            <img alt="rhino standing near grass" src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" />
            <p>The rhinoceros gets its name from one of its most notable features: its horns. The word rhinoceros come from the Greek words rhino meaning “nose” and ceros meaning “horn.” The number of horns that a rhino has varies on the species. The two African species (the black rhino and the white rhino) and the Sumatran rhino have two horns, while the Javan rhino and one-horned rhino have one horn.</p>

            <h2>Sea Turtle</h2>
            <img alt="brown sea turtle in water" src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
            <p>Sea turtles are characterized by a large, streamlined shell and non-retractile head and limbs. Unlike other turtles, sea turtles cannot pull their limbs and head inside their shells. Their limbs are flippers that are adapted for swimming, so they are vulnerable while on land.</p>

            <h2>Giraffe</h2>
            <img alt="giraffe sticking its tongue out" src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80" />
            <p>Giraffes are known for their long, tall appearance. They have a small hump on their back like a camel and have a spotted pattern similar to that of a leopard. Because of the combination of these features, some people called the giraffe a “camel-leopard.” That’s where the giraffe’s species name “camelopardalis” comes from.</p>
            <h2>Dolphin</h2>
            <img alt="black and white dolphin in water" src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" />
        </IonContent>
    </IonApp>
  );
}

export default App;