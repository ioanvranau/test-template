"use client";

import {useEffect, useState} from "react";
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";


export default function App() {
    const [todos, setTodos] = useState([]);

    function listTodos() {

    }

    useEffect(() => {
        listTodos();
    }, []);

    function createTodo() {

    }

    return (
        <main>
            <h1>My todos</h1>
            <button onClick={createTodo}>+ new</button>
            <ul>
                {todos.map((todo) => (
                    <li key={3}>{""}</li>
                ))}
            </ul>
            <div>
                🥳 App successfully hosted. Try creating a new todo.
                <br/>
                <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
                    Review next steps of this tutorial.
                </a>
            </div>
        </main>
    );
}
