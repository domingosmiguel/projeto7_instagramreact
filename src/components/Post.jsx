import { useState } from "react";
import { IonIcon } from "@ionic/react";

import { bookmark } from "ionicons/icons";
import { bookmarkOutline } from "ionicons/icons";
import { chatbubbleOutline } from "ionicons/icons";
import { ellipsisHorizontal } from "ionicons/icons";
import { happyOutline } from "ionicons/icons";
import { heart } from "ionicons/icons";
import { heartOutline } from "ionicons/icons";
import { paperPlaneOutline } from "ionicons/icons";

import RenderComments from "./Comments";
import RenderLikes from "./Likes";
import RenderMedia from "./Media";

function RenderPost(props) {
    const { postData } = props;
    const {
        profileImgSrc,
        profileImgAlt,
        user,
        postType,
        postSrc,
        postAlt,
        likes,
        commentCount,
        comments,
        timer,
    } = postData;
    const [save, setSave] = useState(postData.save);
    const [like, setLike] = useState(postData.like);
    const [likeCount, setLikeCount] = useState(postData.likeCount);
    function handleHeartClick(bool) {
        setLike(bool);
        const teste = likeCount.slice(-1);
        const resto = likeCount.slice(0, -1);
        if (bool) {
            setLikeCount(`${resto}${parseInt(teste) + 1}`);
        } else {
            setLikeCount(`${resto}${parseInt(teste) - 1}`);
        }
    }
    return (
        <li className="post">
            <div className="post-title">
                <div className="post-title-left">
                    <img src={profileImgSrc} alt={profileImgAlt} />
                    <div>{user}</div>
                </div>
                <IonIcon icon={ellipsisHorizontal}></IonIcon>
            </div>
            <RenderMedia type={postType} source={postSrc} alternative={postAlt} />
            <div className="post-icons">
                <div className="post-icons-left">
                    <IonIcon
                        className={like ? "puff-in-center red-heart" : ""}
                        icon={heart}
                        style={{ display: like ? "" : "none" }}
                        onClick={() => {
                            handleHeartClick(false);
                        }}
                    ></IonIcon>
                    <IonIcon
                        icon={heartOutline}
                        style={{ display: like ? "none" : "" }}
                        onClick={() => {
                            handleHeartClick(true);
                        }}
                    ></IonIcon>
                    <IonIcon icon={chatbubbleOutline}></IonIcon>
                    <IonIcon icon={paperPlaneOutline}></IonIcon>
                </div>
                <div className="post-icons-right">
                    <IonIcon
                        icon={bookmark}
                        style={{ display: save ? "" : "none" }}
                        onClick={() => {
                            setSave(false);
                        }}
                    ></IonIcon>
                    <IonIcon
                        icon={bookmarkOutline}
                        style={{ display: save ? "none" : "" }}
                        onClick={() => {
                            setSave(true);
                        }}
                    ></IonIcon>
                </div>
            </div>
            <RenderLikes likes={likes} likeCount={likeCount} />
            <RenderComments comments={comments} commentCount={commentCount} />
            <div className="time">{timer}</div>
            <div className="new-comment">
                <div className="new-comment-left">
                    <IonIcon icon={happyOutline}></IonIcon>
                    <input type="text" placeholder="Escreva um comentário..." />
                </div>
                <div>Publicar</div>
            </div>
        </li>
    );
}
export default RenderPost;
