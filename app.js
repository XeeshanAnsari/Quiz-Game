var pos = 0, test ,test_status ,question ,choice ,choices, correct = 0 , opt1 , opt2, opt3 ,opt4;
var result_perc = 0; 
var sec = 60;
var minute = 0;
var questions = [
       ["For intial step we use this command to create package.json file ? ", "node install" , "babel install" ,"npm install" ,, "bebel  ",  "C"],
       ["Why we use babel our project ?", "For convert jsx file to js file" , "For convert ReactDOM" ,"For convert React.Component to js " , "" , "A"],
       ["what is 30 - 5?", "326" , "25" ,"2421" ,"", "B"],
       ["what is 19 + 5?", "15" , "25" ,"24" , "", "C"]
    ];
    
 function get(x){
     return document.getElementById(x);  
 }
 
 function result() {
          test.innerHTML = "<div id='complete'><span class='resultBox'><h2>CORRECT ANSWER</h2><h2>"+ correct +"</h2></span> <span class='resultBox'><h2>Percentage </h2><h2> "+ result_perc +" %</h2></span></div>"; 
          get("test_status").innerHTML  = "";
          pos = 0;
          correct = 0;
          minute = -1;
          get("timer").innerHTML  = "";
          
 }
 
 
 function renderQuestion() {
    
     test = get("test");
     if(pos >= questions.length){
          result();
          return false;
    }
     get("test_status").innerHTML  = "Question " + (pos+1) + " of "  + (questions.length);
     question = questions[pos][0];
     opt1 = questions[pos][1];
     opt2 = questions[pos][2];
     opt3 = questions[pos][3];
     
     test.innerHTML = "<h3 id='question'>" + question +"</h3>";
     test.innerHTML +="<input type='radio' class='optionBtn' name='choices' value='A' >" + opt1 + "<br>"; 
     test.innerHTML +="<input type='radio' class='optionBtn' name='choices' value='B' >" + opt2 + "<br>"; 
     test.innerHTML +="<input type='radio' class='optionBtn' name='choices' value='C' >" + opt3 + "<br>";
     test.innerHTML +="<input type='radio' class='optionBtn' name='choices' value='D' >" + opt4 + "<br>";
     test.innerHTML +="<button onclick='checkAnswer();' id='nextBtn'> Next </button>";
     
 }
 function checkAnswer() {
      choices = document.getElementsByName("choices");
      console.log(choices);
      for (var i = 0; i < choices.length; i++) {
          if(choices[i].checked){
              choice = choices[i].value;
          }
       }
       
       if(choice == questions[pos][5]){
           correct++;
           result_perc = 5 + result_perc;
       }
       pos++;
       renderQuestion();
 }
 window.addEventListener('load', renderQuestion, false);
 

 setInterval(function timer() {
     var timer = document.getElementById('timer');
     sec--;
     if(minute < 0){
          result();
          return false;
     }else{
         if(sec === 0){
         minute--;
         sec = 60;
      }
     }
      timer.innerHTML = minute +":" + sec;
     
 },500);

 