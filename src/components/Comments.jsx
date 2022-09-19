import RenderComment from "./Comment";

function RenderComments(props) {
    const { comments, commentCount } = props;
    return (
        <ul>
            <li>Ver todos os {commentCount} comentários</li>

            {comments.map((comment, index) => {
                return <RenderComment key={index} comment={comment} />;
            })}
        </ul>
    );
}

export default RenderComments;
