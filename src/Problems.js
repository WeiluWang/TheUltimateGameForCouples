import React from "react";
import { collection, addDoc } from "firebase/firestore";
import {db} from "./firebase";

function Problems(){
    const saveAnswer = (event) => {
        event.preventDefault();
        const elementsArray = [...event.target.elements];

        console.log(elementsArray);

        const formData = elementsArray.reduce((accumulator, currentValue) => {
            if(currentValue.id) {
                accumulator[currentValue.id] = currentValue.value;
            }

            return accumulator;
        }, {});
        console.log({formData});
        addDoc(collection(db, "SurveyResponse"), formData);
    } 

    return (
        <div>
            <div>problems??</div>
            <form onSubmit = {saveAnswer}>
                
                <textarea type="text" id="answer"></textarea>
                <button>Submit</button>
            </form>
            
        </div>
        
        
        );
}

export default Problems;