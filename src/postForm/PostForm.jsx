import "./PostForm.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {ADD_TODO} from "../reducer/Reducer";

export default function PostForm(){
    const [value, setValue]=useState("");
    const dispatch=useDispatch();
    function handleChange(e){
        setValue(e.target.value)
    }

    function addTodo(){
        let data={
            id:Date.now(),
            title: value,
            toggle:false,
        }
        if (!value.length){
            alert("Инпут пустой!!!");
        }else{
            dispatch({type: ADD_TODO, payload:data});
        }
        setValue("");
    }

    return <div className="postForm">
        <input
            type="text"
               value={value}
               placeholder="Напишите задачу"
               className="input-form"
                 onChange={handleChange}

        />
        <button className="button-form" onClick={addTodo}>
            Добавить
        </button>
    </div>
}