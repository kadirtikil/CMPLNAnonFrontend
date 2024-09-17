
import "./Postform.css"

type Post = {
    Id: number,
    Nickname: string,
    Description: string,
    Topic: string,
}

export default function Postform ({Id, Nickname, Description, Topic}: Post) {

    function closePostformContainer() {
        event?.preventDefault();
        try{
            const temp = document.getElementById("postformcomponent");

            if (temp == null) {
                console.log("Element doesnt exist.")
            } else {
                temp.style.display = 'none';
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="postformcontainer">
            <p className="headlinepostform">Complain about anything!</p>
            <form action="" method="post" className="formcontainer">
                <label htmlFor="nickname">Name</label>
                <input id="nickname" type="text" placeholder={Nickname} defaultValue={Nickname}></input>

                <label htmlFor="email">Email</label>
                <input id="email" type="email"></input>
                
                <label htmlFor="description">Whats the issue? :(</label>
                <textarea name="description" id="description" defaultValue={Description}></textarea>
                
                <label htmlFor="topic">Topic</label>
                <input type="text" id="topic" defaultValue={Topic}/>
                
                <button>Submit</button>
                <button onClick={closePostformContainer}>close</button>
            </form>
                        
        </div>
    )

}

