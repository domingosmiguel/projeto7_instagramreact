import { useState } from "react";
import { IonIcon } from "@ionic/react";

import { pencil } from "ionicons/icons";

import { userData } from "../data/Database";

function User() {
    const minLength = 3;
    const [updatedName, setUpdatedName] = useState(userData.name);
    const [profileImgLink, setProfileImgLink] = useState(userData.userImgSrc);
    function handlePencilClick(e) {
        e.stopPropagation();
        const name = prompt("Insira seu novo nome de Usuário");

        if (name && name.length >= minLength && typeof name === "string") {
            setUpdatedName(name);
        } else {
            alert("Invalid User!");
        }
    }
    function handleImgClick(e) {
        e.stopPropagation();
        const link = prompt("Insira o link para sua nova imagem de perfil");
        checkUrl(link);
        function checkUrl(string) {
            try {
                const url = new URL(string);
                var img = new Image();
                img.src = url;
                img.onload = () => {
                    setProfileImgLink(url);
                };
                img.onerror = () => {
                    alert("URL not a image!");
                };
            } catch (err) {
                alert("Invalid URL!");
            }
        }
    }
    return (
        <div className="profile">
            <img
                className="profile-pic"
                src={profileImgLink}
                alt={userData.username}
                onClick={handleImgClick}
            />
            <div className="profile-txt">
                <div>{userData.username}</div>
                <div>
                    {updatedName}
                    <IonIcon icon={pencil} onClick={handlePencilClick}></IonIcon>
                </div>
            </div>
        </div>
    );
}

export default User;
