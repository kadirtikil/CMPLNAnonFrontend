import './Headerpart.css';

import Postform from '../Postform/Postform';

type Post = {
    Id: number,
    Nickname: string,
    Description: string,
    Topic: string,
}

export default function Headerpart() {
    function openPostformContainer() {
        try {
            const temp = document.getElementById("postformcomponent");
            if (temp ==null) {
                console.log("Element doesnt exist.")
            } else {
                temp.style.display = 'block';
            }
        } catch (err) {
            console.log(err);
        } 
    }



    return (
        <>
            <div className="header">
                <div className="headline">CMPLN!</div>
                <div className="headlineextra">Feelin' Bad? Make it even worse! By reading the complaints of others!</div>

                <div className="addPost" >
                    <button onClick={openPostformContainer}>Add Complaint</button>
                </div>
            </div>

            <div className="postformcomponent" id='postformcomponent'>
                <Postform Id={0} Nickname='' Description='' Topic='' IdToClose='postformcomponent'/>
            </div>
        </>

    )

}