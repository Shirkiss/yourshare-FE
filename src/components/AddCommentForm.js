import React, { useState } from 'react';
import { Auth} from 'aws-amplify';


const AddCommentForm = ( {articleName, setArticleInfo} ) => {

    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const tokens = await Auth.currentSession();
        const userName = tokens.getIdToken().payload['cognito:username'];
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({username: userName, text: commentText}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setCommentText('');
    };

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)}/>
            </label>

            <button onClick={() => addComment()}>Add Comment</button>
        </div>
    );

};

export default AddCommentForm;