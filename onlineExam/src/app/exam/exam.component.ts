import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  correct=0;
  aryCorrec:number[]=[];
  strCong:string= "";
  questions=[
    {question:"What’s the diameter of a basketball hoop in inches?",ans1:"20 inches",ans2:"18 inches",ans3:"25 inches",ans4:"22 inches",correcAns:"18 inches"},
    {question:"The Olympics are held every how many years?",ans1:"4 years",ans2:"6 years",ans3:"5 years",ans4:"7 years",correcAns:"4 years"},
    {question:"What sport is best known as the ‘king of sports’?",ans1:"Basketball",ans2:"Tennis",ans3:"Soccer",ans4:"Cricket",correcAns:"Soccer"},
    {question:"What do you call it when a bowler makes three strikes in a row?",ans1:"Hen",ans2:"Peacock",ans3:"Sparrow",ans4:"Turkey",correcAns:"Turkey"},
    {question:"How many dimples does an average golf ball have?",ans1:"333",ans2:"336",ans3:"345",ans4:"302",correcAns:"336"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

 submitAnswer(examRef:NgForm){
    let exam = examRef.value;
       
       // let correct=0;
          for (let i=0;i<this.questions.length;i++)
          {
            let test = examRef.controls[this.questions[i].question].value;
            //console.log(test);
            let a = this.questions[i].correcAns;
            //console.log(a);
            if(test==a)
            {
                 this.correct++;
                 
                this.aryCorrec.push(i+1);
            }
          }
          console.log(this.correct);
          if(this.correct>=3)
            this.strCong="Congratulations!You passed online exam.";
          else
            this.strCong="You did not pass. Passing score is 3. Please try again";

          
    //console.log(exam);
         
  }  

}
