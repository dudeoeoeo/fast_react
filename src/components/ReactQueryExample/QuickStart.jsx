import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Globalloader from './Globalloader';
import { getTodos, postTodo } from './my-api';

const QuickStart = () => {
    const queryClient = useQueryClient();

    const query = useQuery("todos", getTodos);

    const mutation = useMutation(postTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });

    if (query.isLoading) {
        return "Loading...";
    } 
    if (query.error) {
        return "Error...";
    }

    return (
        <div>
            <Globalloader />
            <ul>
                {query.data.map((todo) => 
                    <li key={todo.id}>{todo.title}</li>
                )}
            </ul>
            <button onClick={() => {
                mutation.mutate({
                    id: Date.now(),
                    title: "Learn React-query",
                })
            }}>
                Add Todo
            </button>
        </div>
    );
};

export default QuickStart;