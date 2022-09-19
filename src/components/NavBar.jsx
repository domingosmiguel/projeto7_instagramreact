import { IonIcon } from "@ionic/react";
import { logoInstagram } from "ionicons/icons";
import { paperPlaneOutline } from "ionicons/icons";
import { compassOutline } from "ionicons/icons";
import { heartOutline } from "ionicons/icons";
import { personOutline } from "ionicons/icons";

function NavBar() {
    return (
        <header>
            <div className="title">
                <div className="topLeft">
                    <IonIcon icon={logoInstagram}></IonIcon>
                    <img src="./images/logo.svg" alt="Logo" />
                </div>
                <div className="topCenter">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                <div className="topRight">
                    <IonIcon icon={paperPlaneOutline}></IonIcon>
                    <IonIcon icon={compassOutline}></IonIcon>
                    <IonIcon icon={heartOutline}></IonIcon>
                    <IonIcon icon={personOutline}></IonIcon>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
