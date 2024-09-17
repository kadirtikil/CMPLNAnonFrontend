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

export default function Postboard() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [postToUpdate, setPostToUpdate] = useState<Post | undefined>(undefined);

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

    function openUpdateForm() {
        try {
            const temp = document.getElementById("postformcomponentupdate")

            if (temp == null ) {
                console.log("Element doesnt exist.")
            } else {
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
                        <p>{post.Nickname}</p>
                        <p>{post.Description}</p>
                        <p>{post.Date}</p>
                        <p>{post.Topic}</p>
                        <button onClick={() => openUpdateForm()}>edit</button>
                        <div className="postformcomponent" id='postformcomponentupdate'>
                            <Postform
                                Id={post.Id}
                                Nickname={post.Nickname}
                                Description={post.Description}
                                Topic={post.Topic}
                                IdToClose={`postformcomponentupdate`}
                            />
                        </div>
                       
                    </div>
                ))}
            </div>
        </>
    );
}
