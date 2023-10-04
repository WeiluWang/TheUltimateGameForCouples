import React from "react";
import './App.css';
import { collection, addDoc } from "firebase/firestore";
import {db} from "./firebase";
import { useState,useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import images from './images.png';
import heart from './heart.png';
import box from './box.png';

function App() {
  const [num,setNum] = useState(0);
    const inputRef = useRef(null);
    const [prob, setProb] = useState("draw a card!");


    var array1 = [
    "Share an impressive dating experience with your partner",
    "List five conditions of an ideal relationship.",
    "Tell me what personality traits make one your ideal intimate partner and why.",
    "Share memories about the achievements or challenges in your recent work.",
    "Find an app related to your major and introduce it to your partner the features.",
    "Choose a picture of your family or pets in your album and share interesting stories about it.",
    "Draw a family portrait and show it to each other.",
    "Tell me one thing that your family members have done for you that you appreciate.(At least two family members)",
    "Share a song you have enjoyed recently with your partner. Introduce the background of the singer or band.",
    "Sing a song together.",
    "Tell me your favorite song and why it is your favorite.",
    "Share a story about a person each other doesn’t know. It could be a friend or a person you dislike.",
    "Choose a friend you would like to introduce him/her to your partner. Tell them the reasons and share the story about the friend and you.",
    "Tell me how you interacted with your best friend and why your friendship lasted so long.",
    "Talk about a movie, anime, video, or episode you like in your word to your partner.",
    "Choose a video or movie you like and watch it with your partner",
    "Tell me which main character in a movie you want to be and why?",
    "Share a picture of your breakfast, lunch, and dinner with your partner.",
    "Teach your partner to cook a dish never done before.",
    "Tell me about the restaurant you went to which satisfied you recently. Why did you go? With who?",
    "Share photos of the recent trip with your partner. The trip should be the one your partner didn’t take part in.",
    " List 3 places you want to visit with your partner. Places could be countries, states, or parks. Talk about the reason and events you would like to schedule.",
    "Take a picture on the way home and tell your partner about the story you take this picture.",
    "Tell me about the most impressive lesson you have learned from your career in the past ten years."
    ]

    const drawCard = () =>{
        setNum(randomNumberInRange(0, 23));
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
        alert("Succesfully upoad yur diary! Thanks!")
    } 

      const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="b">
            <div className="container1">
                    <div className="imgDiv">
                    </div>
                    <div className="gameDiv">Chatterbox Opener</div>
                    <div className="probDiv">
                      <div className="cardIcon">
                            <img src= {heart}></img>
                      </div>
                      <textarea className="task" id="task" ref={inputRef} ></textarea>
                      
                    </div>
                    <div className="box">
                            <img src= {box}></img>
                      </div>
                    <div className="drawBtnDiv">
                      <button className ="taskBtn" onClick = {drawCard}>draw a card</button>
                    </div>
                <form onSubmit = {saveAnswer} >
                    

                    
                    <div className="diarySectionTitle">Diary Feedback</div>
                    <div className="nameTitle">Name</div>
                    <div>
                      <input className="name" type="text" id="name"></input>
                    </div>
                    <div className="diaryTitle">Diary</div>
                    <div>
                      <textarea className="answer" type="text" id="answer"></textarea>
                    </div>
                    <div className="dateTitle">Date</div>
                    <div>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      id="date"
                    />
                    </div>
                    <div className="submitBtnDiv">
                      <button className="button-74" variant="success" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
        
        
        );
}

export default App;
