import './Headerpart.css';

import Postform from '../Postform/Postform';


import ButtonImage from '../../assets/cmplnherebutton.png'

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

    function closePostformContainer() {
        try {
            const temp = document.getElementById("postformcomponent");
            if (temp ==null) {
                console.log("Element doesnt exist.")
            } else {
                temp.style.display = 'none';
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
                    <p id='addComplaintButton' onClick={openPostformContainer}>COMPLAIN YOURSELF!</p>
                </div>
            </div>

            <div className="postformcomponent" id='postformcomponent'>
                <Postform Id={0} Nickname='' Description='' Topic='' IdToClose='postformcomponent'/>
            </div>
        </>

    )

}