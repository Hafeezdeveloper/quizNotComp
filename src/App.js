import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {Box,Typography} from '@mui/material'
import Option from "./components/option"
function App() {

  // const [abc,abcget] = useState('')
    const [indexNum,setIndexNum] = useState(0)
      const [dataQuiz,setData] = useState({
        quizName:"React Quizz",
        totalMarks:50,
        question:[
          {
              question : "Who designed Pakistan's national flag ___________",
              option : ["Ameer-ud-din Khidwai","Allama Iqbal","Sir Syed Ahmed Khan","None of these"],
              answer: "Ameer-ud-din Khidwai"
          },{
              question : "Name the Highest peak of Pakistan _____________",
              option : ["Karakoram","Mount Everst","K-2 Mountain","None of these"],
              answer: "K-2 Mountain"
          },{
              question : "Which is the national language of Pakistan _____________",
              option : ["A & B both","Sindhi","Punjabi","Urdu"],
              answer: "Urdu"
          },{
              question : "Which is the national bird of Pakistan _____________",
              option : ["parrot","Chakor","pigeon","Chicken"],
              answer: "Chakor"
          },{
              question : "Which is the national flower of Pakistan _____________",
              option : ["Jasmine","Rose","sunflower","None of these"],
              answer: "Jasmine"
          }
         ]        
      })

      const {quizName,totalMarks,question} = dataQuiz
      
  return (
      <div>
      <Box>
        <Box sx={{backgroundColor:'black',color:'white'}} className="questionDetail">
           <Typography sx={{textAlign:'center'}} variant='h2'>{quizName}</Typography> 
           <Typography variant='h4' component='address'>Quiz Marks :{totalMarks}</Typography> 

           <Box sx={{fontWeight:'800',display:'flex',justifyContent:'end',margin:' 0px 20px'}}>

           <Typography  variant='p'> Mcqs # {indexNum + 1} <Typography variant='p'> / {question.length}</Typography> </Typography> 
           </Box>

        </Box>

        <Box className='QuestionBox' sx={{display:'flex',justifyContent:"center",mt:'20px'}}>
        <Typography variant='h4'>Question : {question[indexNum].question}</Typography>
        </Box>

        <Box  >
          <Option setTsk={(e) =>{console.log(e)}} data={question[indexNum].option} />
        </Box>
      </Box>
      </div>
  );
}

export default App;
