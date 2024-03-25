
import './App.css';
import PostForm from "./postForm/PostForm";
import PostItem from "./postItem/PostItem";
import PostList from "./postList/PostList";

function App() {
  return <div className="App">
    <h1 style={{textAlign:"center"}}>To do</h1>
    <PostForm/>
    <PostList/>
  </div>
}

export default App;
