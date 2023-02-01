import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
    const [userId, setUserId] = useState(0);
    const [posts, setPosts] = useState([]);
    async function getAllPosts() {
        const postsRequest = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(postsRequest.data);
        setPosts(postsRequest.data);
    }
    async function getAllYourPosts(userId) {
        const postsRequest = await axios.get(`http://localhost:4000/posts/${userId}`);
        console.log(postsRequest.data);
        setPosts(postsRequest.data);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={() => getAllPosts(5)}>Get All Posts</button>
                <br />
                <input type="text" onChange={(ev) => setUserId(ev.target.value, userId)} />
                <button onClick={() => getAllYourPosts(userId)}>Get All Your Posts</button>
                <table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => {
                            return (
                                <tr key={index}>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </header>
        </div>
    );
}

export default App;
