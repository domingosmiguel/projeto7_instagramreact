import { IonIcon } from "@ionic/react";
import { chevronBackCircle } from "ionicons/icons";
import { chevronForwardCircle } from "ionicons/icons";
import { home } from "ionicons/icons";
import { searchOutline } from "ionicons/icons";
import { addCircleOutline } from "ionicons/icons";
import { heartOutline } from "ionicons/icons";
import { personOutline } from "ionicons/icons";

import Feed from "./Feed";
import SideBar from "./SideBar";
import Stories from "./Stories";

function Body() {
    return (
        <main>
            <div className="stories-container">
                <Stories />
            </div>
            <div className="button toTheLeft">
                <IonIcon className="arrow" icon={chevronBackCircle}></IonIcon>
            </div>
            <div className="button toTheRight">
                <IonIcon className="arrow" icon={chevronForwardCircle}></IonIcon>
            </div>
            <SideBar />
            <Feed />
            <div className="footer">
                <IonIcon icon={home}></IonIcon>
                <IonIcon icon={searchOutline}></IonIcon>
                <IonIcon icon={addCircleOutline}></IonIcon>
                <IonIcon icon={heartOutline}></IonIcon>
                <IonIcon icon={personOutline}></IonIcon>
            </div>
        </main>
    );
}

export default Body;
