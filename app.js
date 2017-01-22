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
         test.innerHTML = "<h2>You got "+ correct +" of " + questions.length + " questions correct"; 
          get("test_status").innerHTML  = "Test Complete";
          pos = 0;
          correct = 0;
          return false;
    }
     get("test_status").innerHTML  = "Question " + (pos+1) + " of "  + (questions.length);
     question = questions[pos][0];
     opt1 = questions[pos][1];
     opt2 = questions[pos][2];
     opt3 = questions[pos][3];
     
     test.innerHTML = "<h3>"+ question +"</h3>";
     test.innerHTML +="<input type='radio' name='choices' value='A' >" + opt1 + "<br>"; 
     test.innerHTML +="<input type='radio' name='choices' value='B' >" + opt2 + "<br>"; 
     test.innerHTML +="<input type='radio' name='choices' value='C' >" + opt3 + "<br>";
     test.innerHTML +="<button onclick='checkAnswer();' > Next </button>";
     
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
 window.addEventListener('load', renderQuestion, false);
 