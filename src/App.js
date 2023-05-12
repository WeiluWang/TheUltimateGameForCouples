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


function App() {
  const [num,setNum] = useState(0);
    const inputRef = useRef(null);
    const [prob, setProb] = useState("draw a card!");


    var array1 = [
        "What was the last book I read?",
        "What is the one thing thatwe can never agree on?",
        "If I had to lose one of my five senses, which would it be?",
        "Who is my favorite professional athelete?",
        "What do I hate most about my job?",
        "Fill in the blank: \"I can't resit a good ______.\" ",
        "What was my favorite TV show as a kid?",
        "What do I most often need help?",
        "What was the most expensive item I regret buying?",
        "How long does it take me to get ready for a nice dinner?",
        "You have six seconds to name three animals that start with a letter of my choice.",
        "How many times have I been pulled over by the police?",
        "If I could eliminate one thing from your daily routine, what would it be?",
        "If I picked our next road trip destination, where would it be?",
        "You have eight seconds to say the first names of five of my relatives.",
        "Name all the cities or towns that I have ever lived in.",
        "Where would I want to travel to annually?",
        "If I had to survive in the wilderness for a week with one other person, who would it be?",
        "Let me put a lipstick on you.",
        "What is my dream job?",
        "What country do I want to visit the most?",
        "If I had a spare room in the house, what would I use it for?",
        "Which celebrity would I want to play me in a movie about my life?",
        "What do I like most about my job?",
        "Which historical figure would I like to chat with?",
        "What is my favorite thing to do on the weekend?",
        "Which movie or TV show do I quote the most?",
        "If I could commit one crime and get away with it, what would it be?",
        "What instrument do I wish I could play?",
        "Serenade me with any song for 60 seconds.",
        "What was my favorite subject in school?",
        "What foreign language would I want to speak fluently?",
        "What was my first paid job?",
        "Wha am I dreading about the future?",
        "What is something I am not afraid of that most people are?",
        "What am I irrationally afraid of?",
        "What was my least favorite subject in school?",
        "What do I wish I was better at?",
        "WHat is my favorite month of the year?",
        "What I always craving?",
        "What was the first movie I saw in theaters?",
        "What is my most commonly used phrased?",
        "Where is my happy place?",
        "Which TV show have I rewatched the most?",
        "What app do I use the most?",
        "Who is the one person I would never want to see naked?",
        "What do I value most in a relationship?",
        "What was the best gift ever received from you?",
        "What do I consider to be a major turn off?",
        "How many bones have I broken in my life?",
        "Let me choose a photo of you to post on your social media account.",
        "What object is the most sentimental to me?",
        "Where are my parents from?",
        "What do I buy too much of?",
        "If I could immediately master any skill inthe world, what would it be?",
        "If I could live in a TV show, which would it be?",
        "What was my most memorable birthday?",
        "What is the one food I refuse to eat?",
        "What am I most pciky about?",
        "What am I most superstitious about?",
    ]

    const drawCard = () =>{
        setNum(randomNumberInRange(0, 59));
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

      const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="b">
            
            <div className="container">
                <form onSubmit = {saveAnswer} className="form">
                    <div className="imgDiv">
                      <img className="img" src={images} alt="Logo" />
                      
                    </div>
                    <div className="gameDiv">The Ultimate Games for couples</div>
                    <div className="taskTitle">Task</div>
                    <div className="probDiv">
                      <textarea className="task" id="task" ref={inputRef} ></textarea>
                    </div>
                    <div className="drawBtnDiv">
                      <Button className ="taskBtn" onClick = {drawCard} variant="primary">draw a card</Button>
                    </div>
                    <div className="nameTitle">Name</div>
                    <div>
                      <input className="name" type="text" id="name"></input>
                    </div>
                    <div className="diaryTitle">Feedback</div>
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
                      <Button className="submitBtn" variant="success">Submit</Button>
                    </div>
                    
                    
                   
                    
                    
                    
                </form>
            </div>
        </div>
        
        
        );
}

export default App;
