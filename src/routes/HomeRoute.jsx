import { PostFeed } from "../components/PostFeed";
import { PostForm } from "../components/PostForm";


export function HomeRoute() {
    return (
        <>
            <PostForm
                isPost={true}
                placeholder={"What's on your mind?"}
            ></PostForm>
            <PostFeed></PostFeed>
        </>
    )
}