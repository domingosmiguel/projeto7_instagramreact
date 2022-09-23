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
    function handleHeartClick() {
        if (!like) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }
        setLike(!like);
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
                    {like ? (
                        <IonIcon
                            className={"puff-in-center red-heart"}
                            icon={heart}
                            onClick={handleHeartClick}
                        ></IonIcon>
                    ) : (
                        <IonIcon icon={heartOutline} onClick={handleHeartClick}></IonIcon>
                    )}
                    <IonIcon icon={chatbubbleOutline}></IonIcon>
                    <IonIcon icon={paperPlaneOutline}></IonIcon>
                </div>
                <div className="post-icons-right">
                    {save ? (
                        <IonIcon icon={bookmark} onClick={() => setSave(!save)}></IonIcon>
                    ) : (
                        <IonIcon icon={bookmarkOutline} onClick={() => setSave(!save)}></IonIcon>
                    )}
                </div>
            </div>
            <RenderLikes likes={likes} likeCount={likeCount.toLocaleString("pt-BR")} />
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
