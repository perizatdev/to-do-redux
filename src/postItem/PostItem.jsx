import "./PostItem.css"
import {useDispatch} from "react-redux";
import {REMOVE_TODO, TOGGLE_TODO} from "../reducer/Reducer";

export default function PostItem({post}){
    const dispatch=useDispatch();
    function remove(){
       dispatch({type:REMOVE_TODO,payload: post.id})
    }
    function toggle(){
            dispatch({type:TOGGLE_TODO, payload:id})
    }

    return(
        <div className={`postItem ${post.toggle && "active"}`}>
            <p className="postItem-title">{post.title}</p>
            <button className="postItem-btn" onClick={remove}>
                Удалить
            </button>
        </div>
    )
}