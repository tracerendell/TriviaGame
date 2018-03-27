// Objects representing questions with answer choices

var question1 = { 
		question:"1. Is this the answer?",
		Choice1:"no",
		Choice2:"nope", 
		Choice3:"uhmm... maybe",
		Choice4:"got it!", 
		ChoiceCorrect:"got it!",
	};

var question2 = { 
	question:"2. Is this the answer?", 
		Choice1:"no",
		Choice2:"nope", 
		Choice3:"uhmm... maybe",
		Choice4:"got it!", 
		ChoiceCorrect:"got it!",
	};

var question3 = { 
	question:"3. Is this the answer?", 
		Choice1:"no",
		Choice2:"nope", 
		Choice3:"uhmm... maybe",
		Choice4:"got it!", 
		ChoiceCorrect:"got it!",
	};

var question4 = { 
	question:"4. Is this the answer?", 
		Choice1:"no",
		Choice2:"nope", 
		Choice3:"uhmm... maybe",
		Choice4:"got it!", 
		ChoiceCorrect:"got it!",
	};

var question5 = { 
	question:"5. Is this the answer?", 
		Choice1:"no",
		Choice2:"nope", 
		Choice3:"uhmm... maybe",
		Choice4:"got it!", 
		ChoiceCorrect:"got it!",
	};

var questions = [question1, question2, question3, question4, question5];

var correctAnswers = [];



window.onload = function() {

 $("#startBtn").on("click", countdown.start);
 $("#startBtn").on("click", select.qSelect1);

};


var select = {

qSelect1: function() {

var rq = Math.floor(Math.random() * questions.length);
var rs = questions.splice(rq, 1);

var q1div = $("<div id='q1'>").text(rs['0'].question);
$("#q1here").append(q1div);

var an1form = $("<form action='# id='form1>");
var an1aInput1 = $("<input type='radio' name='q1ansChoice' checked><span><br>").text(rs['0'].Choice1);
var an1aInput2 = $("<input type='radio' name='q1ansChoice'><span><br>").text(rs['0'].Choice3);
var an1aInput3 = $("<input type='radio' name='q1ansChoice'><span><br>").text(rs['0'].Choice4);
var an1aInput4 = $("<input type='radio' name='q1ansChoice'><span><br>").text(rs['0'].Choice2);

an1form.append(an1aInput1);
an1aInput1.attr("id", rs['0'].Choice1);
an1form.append(an1aInput3);
an1aInput2.attr("id", rs['0'].Choice3);
an1form.append(an1aInput4);
an1aInput3.attr("id", rs['0'].Choice4);
an1form.append(an1aInput2);
an1aInput4.attr("id", rs['0'].Choice2);
$("#q1here").append(an1form);




// console.log(rs);
// console.log(questions);
select.qSelect2();



},

qSelect2: function() {

var rq = Math.floor(Math.random() * questions.length);
var rs2 = questions.splice(rq, 1);

var q2div = $("<div id='q2'>").text(rs2['0'].question);
$("#q2here").append(q2div);

var an2form = $("<form action='#' method='post'>");
var an2aInput1 = $("<input type='radio' name='q2ansChoice'><span><br>").text(rs2['0'].Choice4);
var an2aInput2 = $("<input type='radio' name='q2ansChoice'><span><br>").text(rs2['0'].Choice3);
var an2aInput3 = $("<input type='radio' name='q2ansChoice'><span><br>").text(rs2['0'].Choice2);
var an2aInput4 = $("<input type='radio' name='q2ansChoice'><span><br>").text(rs2['0'].Choice1);

an2form.append(an2aInput1);
an2aInput1.attr("value", rs2['0'].Choice4);
an2form.append(an2aInput2);
an2aInput2.attr("value", rs2['0'].Choice3);
an2form.append(an2aInput3);
an2aInput3.attr("value", rs2['0'].Choice2);
an2form.append(an2aInput4);
an2aInput4.attr("value", rs2['0'].Choice1);
$("#q2here").append(an2form);



// console.log(rs2);
// console.log(questions);
select.qSelect3();

},

qSelect3: function() {

var rq = Math.floor(Math.random() * questions.length);
var rs3 = questions.splice(rq, 1);

var q3div = $("<div id='q3'>").text(rs3['0'].question);
$("#q3here").append(q3div);

var an3form = $("<form action=''>");
var an3aInput1 = $("<input type='radio' name='q3ansChoice'><span><br>").text(rs3['0'].Choice1);
var an3aInput2 = $("<input type='radio' name='q3ansChoice'><span><br>").text(rs3['0'].Choice2);
var an3aInput3 = $("<input type='radio' name='q3ansChoice'><span><br>").text(rs3['0'].Choice3);
var an3aInput4 = $("<input type='radio' name='q3ansChoice'><span><br>").text(rs3['0'].Choice4);

an3form.append(an3aInput1);
an3aInput1.attr("value", rs3['0'].Choice1);
an3form.append(an3aInput2);
an3aInput2.attr("value", rs3['0'].Choice2);
an3form.append(an3aInput3);
an3aInput3.attr("value", rs3['0'].Choice3);
an3form.append(an3aInput4);
an3aInput4.attr("value", rs3['0'].Choice4);
$("#q3here").append(an3form);



// console.log(rs3);
// console.log(questions);
select.qSelect4();

},

qSelect4: function() {

var rq = Math.floor(Math.random() * questions.length);
var rs4 = questions.splice(rq, 1);

var q4div = $("<div id='q4'>").text(rs4['0'].question);
$("#q4here").append(q4div);

var an4form = $("<form action=''>");
var an4aInput1 = $("<input type='radio' name='q4ansChoice'><span><br>").text(rs4['0'].Choice3);
var an4aInput2 = $("<input type='radio' name='q4ansChoice'><span><br>").text(rs4['0'].Choice1);
var an4aInput3 = $("<input type='radio' name='q4ansChoice'><span><br>").text(rs4['0'].Choice4);
var an4aInput4 = $("<input type='radio' name='q4ansChoice'><span><br>").text(rs4['0'].Choice2);

an4form.append(an4aInput1);
an4aInput1.attr("value", rs4['0'].Choice3);
an4form.append(an4aInput2);
an4aInput2.attr("value", rs4['0'].Choice1);
an4form.append(an4aInput3);
an4aInput3.attr("value", rs4['0'].Choice4);
an4form.append(an4aInput4);
an4aInput4.attr("value", rs4['0'].Choice2);
$("#q4here").append(an4form);



// console.log(rs4);
// console.log(questions);
select.qSelect5();

},

qSelect5: function() {

var rq = Math.floor(Math.random() * questions.length);
var rs5 = questions.splice(rq, 1);

var q5div = $("<div id='q5'>").text(rs5['0'].question);
$("#q5here").append(q5div);

var an5form = $("<form action=''>");
var an5aInput1 = $("<input type='radio' name='q5ansChoice'><span><br>").text(rs5['0'].Choice1);
var an5aInput2 = $("<input type='radio' name='q5ansChoice'><span><br>").text(rs5['0'].Choice4);
var an5aInput3 = $("<input type='radio' name='q5ansChoice'><span><br>").text(rs5['0'].Choice2);
var an5aInput4 = $("<input type='radio' name='q5ansChoice'><span><br>").text(rs5['0'].Choice3);

an5form.append(an5aInput1);
an5aInput1.attr("value", rs5['0'].Choice1);
an5form.append(an5aInput2);
an5aInput2.attr("value", rs5['0'].Choice4);
an5form.append(an5aInput3);
an5aInput3.attr("value", rs5['0'].Choice2);
an5form.append(an5aInput4);
an5aInput4.attr("value", rs5['0'].Choice3);
$("#q5here").append(an5form);



// console.log(rs5);
// console.log(questions);

}

};

// var graded = {

// grade: function() {

// 		alert("all done");

// 	},

// getRadioVal: function() {
//     var val;
//     // get list of radio buttons with specified name
//     var radios = input.elements[name];
    
//     // loop through list of radio buttons
//     for (var i = 0; i < q1ansChoice.length; i++) {
//         if ( radios[i].checked ) { // radio checked?
//             val = radios[i].value; // if so, hold its value in val
//             break; // and break out of for loop
//         }
//     }
//     console.log(radios);
//     console.log(val);
// }

// };

var intervalId;

// prevents countdown clock from speeding up
var clockRunning = false;


// countdown object object
var countdown = {


grade: function() {

		alert("all done");

	},

	getRadioVal: function() {

    var val = getRadioVal(document.getElementById('form1'),'q1ansChoice');
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i = 0; i < q1ansChoice.length; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    console.log(radios);
    console.log(val);
},

  

  time: 10,

  reset: function() {

    countdown.time = 10;
    
    // Change the "display" div to "01:30."

    $("#display").text("00:10");
    
  },
  start: function() {

    // Use setInterval to start the countdown and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(countdown.count, 1000);
      clockRunning = true;
    }
  },

  stop: function() {

    // Use clearInterval to stop the countdown and set the clock to not running.
    clearInterval(intervalId);
    clockRunning = false;
  },
 
  count: function() {

    // decrement time by 1.
    countdown.time--;

    // Get the current time, pass that into the stopwatch.timeConverter function, and save the result in a variable.
    var converted = countdown.timeConverter(countdown.time);
    if (converted === "00:00"){
      countdown.stop();
      countdown.grade();
      countdown.getRadioVal();
      
    }
    // console.log(converted);

    // Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },

  

  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};