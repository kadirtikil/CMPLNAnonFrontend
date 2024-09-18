import { useEffect, useState } from 'react';
import './Postboard.css';
import Postform from '../Postform/Postform';

type Post = {
    Id: number,
    Nickname: string,
    Email: string,
    Description: string,
    Date: string,
    Topic: string,
};

const emptyPost: Post = {
    Id: 0,
    Nickname: '',
    Email: '',
    Description: '',
    Date: '',
    Topic: ''
};

export default function Postboard() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [postToUpdate, setPostToUpdate] = useState<Post>(emptyPost);

    useEffect(() => {
        fetch("http://localhost:8080/posts/test/16")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                setError(err);
            });
    }, []);

    function openUpdateForm(post: Post) {
        try {
            const temp = document.getElementById("postformcomponentupdate")

            if (temp == null ) {
                console.log("Element doesnt exist.")
            } else {
                setPostToUpdate(post);
                temp.style.display = 'block';
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className='postBoardContainer'>
                
                {posts.map((post) => (

                    <div className='post' key={post.Id}>
                        <p id='hideId'>{post.Id}</p>
                        <p id='postNickname'>{post.Nickname}</p>
                        <p id='postDescription'>{post.Description}</p>
                        <p id='postDate'>{post.Date}</p>
                        <p id='postTopic'>{post.Topic}</p>
                        <p id='editPostButton' onClick={() => openUpdateForm(post)}>edit</p>
                        <div className="postformcomponent" id='postformcomponentupdate'>
                            <Postform
                                Id={postToUpdate.Id}
                                Nickname={postToUpdate.Nickname}
                                Description={postToUpdate.Description}
                                Topic={postToUpdate.Topic}
                                IdToClose={`postformcomponentupdate`}
                            />
                        </div>
                       
                    </div>
                ))}
            </div>
        </>
    );
}
