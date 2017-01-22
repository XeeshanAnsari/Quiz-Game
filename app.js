var pos = 0, test ,test_status ,question ,choice ,choices, correct = 0 , opt1 , opt2, opt3 ;

var questions = [
       ["what is 20 + 5?", "15" , "25" ,"24" , "B"],
       ["what is 20 - 5?", "15" , "45" ,"2" , "A"],
       ["what is 30 - 5?", "326" , "25" ,"2421" , "B"],
       ["what is 19 + 5?", "15" , "25" ,"24" , "C"]
    ];
    
 function get(x){
     return document.getElementById(x);  
 }
 
 
 function renderQuestion() {
    
     test = get("test");
     if(pos >= questions.length){
         
          test.innerHTML = "<h2 id='complete'>You got "+ correct +" of " + questions.length + " questions correct</h2>"; 
          get("test_status").innerHTML  = "";
          pos = 0;
          correct = 0;
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
       if(choice == questions[pos][4]){
           correct++;
       }
       pos++;
       renderQuestion();
 }
 var sec = 60;
 var minute = 0;
 setInterval(function timer() {
     var timer = document.getElementById('timer');
     sec--;
     if(minute < 0){
         test.innerHTML = "<h2 id='complete'>You got "+ correct +" of " + questions.length + " questions correct</h2>"; 
          get("test_status").innerHTML  = "";
          sec = 00;
          timer.innerHTML = "Time Over";
          pos = 0;
          correct = 0;
          return false;
     }else{
         if(sec === 0){
         minute--;
         sec = 60;
      }
     }
     
     
     timer.innerHTML = minute +":" + sec;
     
 },300);
 window.addEventListener('load', renderQuestion, false);
 