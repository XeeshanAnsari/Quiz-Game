var pos = 0, test ,test_status ,question ,choice ,choices, correct = 0 , opt1 , opt2, opt3 ,opt4;
var result_perc = 0; 
var sec = 60;
var minute = 02;
var questions = [
       ["For intial step we use this command to create package.json file ? ", "node init" , "babel init" ,"npm init" , "bebel  ",  "C"],
       ["Why we use babel our project ?", "For Transpiler jsx file to js file" , "For convert ReactDOM" ,"For convert React.Component to js " , "For transpiler ReactDOM" , "A"],
       ["Running this command (from your newly created project folder) to check the version " , "$ ./node_modules/.bin/babel --version" ,"$ babel --version" ,"$ ./node_modules/.bin/babel --v", "$ babel --v" ,"A"],
       ["After installation, you issue a command to process your js/script.jsx JSX  into js/script.js JavaScript:", "$ ./babel js/script.jsx -o js/script.js" , "$ js/script.jsx -o js/script.js" ,"$ ./node_modules/.bin/babel js/script.jsx -o js/script.js" , "$ ./node_modules/.bin/babel js/script.jsx -w js/script.js", "C"],
      ["This Command is True for Transpiler with watch ??","./node_modules/.bin/babel js/script.jsx -w js/script.js ","./node_modules/.bin/babel js/script.jsx -w js/script.js -o" ,"./node_modules/.bin/babel js/script.jsx -w js/script.js ","./node_modules/.bin/babel js/script.jsx -o js/script.js-w","D"]
    ];
   
    
 function get(x){
     return document.getElementById(x);  
 }
 
 function result() {
          
          get("test_status").innerHTML  = "";
          pos = 0;
          minute = -1;
          get("timer").innerHTML  = "";
          test.innerHTML = "<div id='complete'><span class='resultBox'><h2>CORRECT ANSWER</h2><h2>"+ correct +"</h2></span> <span class='resultBox'><h2>Percentage </h2><h2> "+ result_perc +" %</h2></span></div>"; 
         
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
     opt4 = questions[pos][4];
     
     test.innerHTML = "<h3 id='question'>" + question +"</h3>";
     test.innerHTML +="<input type='radio' class='optionBtn' name='choices' value='A' >" + opt1 + "<br>"; 
     test.innerHTML +="<input type='radio' class='optionBtn' name='choices' value='B' >" + opt2 + "<br>"; 
     test.innerHTML +="<input type='radio' class='optionBtn' name='choices' value='C' >" + opt3 + "<br>";
     test.innerHTML +="<input type='radio' class='optionBtn' name='choices' value='D' >" + opt4 + "<br>";
     test.innerHTML +="<button onclick='checkAnswer();' id='nextBtn'> Next </button>";
     
    
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
     
 },1000);
     
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
           result_perc = 20 + result_perc;
       }
       pos++;
       renderQuestion();
 }
 
 

 

 