import PostItem from "../postItem/PostItem";
import {useSelector} from "react-redux";


export default function PostList(){
    const {todos}=useSelector((state)=>state);
    console.log(todos)

    return(
        <div>
            <h1 style={{textAlign:"center", marginBottom:"30px"}}>Задачи</h1>
            <div>{todos.map(post=>(
                <PostItem post={post}/>
            ))}</div>

        </div>
    )
}