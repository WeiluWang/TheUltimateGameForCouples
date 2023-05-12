import React from "react";
import styles from './Problems.css';
import { collection, addDoc } from "firebase/firestore";
import {db} from "./firebase";
import { useState,useRef } from "react";


function Problems(){
    const [num,setNum] = useState(0);
    const inputRef = useRef(null);
    const [prob, setProb] = useState("draw a card!");
    var array1 = [
        "abc","bcd","cde","def","efg"
    ]

    const drawCard = () =>{
        setNum(randomNumberInRange(0, 4));
        setProb(array1[num]);
        inputRef.current.value = prob;
        //console.log(prob);
    }

    
    function randomNumberInRange(min, max) {
        // 👇️ 获取 min（含）和 max（含）之间的数字
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const saveAnswer = (event) => {
        event.preventDefault();
        const elementsArray = [...event.target.elements];


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
            
            <div>
                <form onSubmit = {saveAnswer}>
                    <div>Task</div>
                    <input id="task" ref={inputRef} ></input>
                    <button className ={styles.taskBtn}  onClick = {drawCard} variant="success">draw a card</ button>
                   
                    <input type="text" id="name"></input>
                    <textarea type="text" id="answer"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        
        
        );
}

export default Problems;