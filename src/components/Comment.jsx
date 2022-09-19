import { useState } from "react";
import { IonIcon } from "@ionic/react";

import { heart } from "ionicons/icons";
import { heartOutline } from "ionicons/icons";

function RenderComment(props) {
    const { comment } = props;
    const { username, userComment } = comment;
    const [like, setLike] = useState(comment.like);
    return (
        <li className="comments">
            <div>
                <b>{username} </b> {userComment}
            </div>
            <IonIcon
                className="red-heart"
                icon={heart}
                style={{ display: like ? "" : "none" }}
                onClick={() => {
                    setLike(false);
                }}
            ></IonIcon>
            <IonIcon
                icon={heartOutline}
                style={{ display: like ? "none" : "" }}
                onClick={() => {
                    setLike(true);
                }}
            ></IonIcon>
        </li>
    );
}

export default RenderComment;
