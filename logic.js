var panel = $(" ");
var countStartNumber = 30;

//Question set.

var questions = [{
	question: " The Mclaren F1 was...? ", 
	answers: ["smallest car of its time", "fastest car of its time", "the cheapest super car of its time", "luxurious car of its time"],
	correctAnswer: "fastest car of its time",
	image: "https://www.supercars.net/blog/wp-content/uploads/2016/03/Screenshot-2016-03-24-12.48.38.png"

},{
	question: " The Koenigsegg Agera RS is faster than what?", 
	answers: ["Bugatti Chiron", "Pagani Zonda ", "Mclaren P1", "Every single production car"],
	correctAnswer: "Every single production car",
	image: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/slideshows/images/slides/337/192/1/S3371921/slug/l/01-koenigsegg-agera-rs-geneva-1.jpg"
}





];

//variable to hold our setInterval
var timer;

var game = {

	questions: questions, 
	currentQuestion: 0,
	counter: countStartNumber,
	correct: 0,
	incorrect: 0,

	countdown: function() {
		this.counter--;
		$("#counter-number").html(this.counter);
		if (this.counter === 0) {
			console.log('TIMES UP')
			this.timeUp();
		}

	},

	loadQuestions: function() {
		timer = setInterval(this.countdown.bind(this), 100);
		panel.html("<h2>" + questions[this.currentQuestion].questions + "</h2>");
		for (var i = 0; i < questions[this.currentQuestion].answers.length i++) {
			panel.append("<button class= 'answer-button' id='button' data-name=" +
				questions[this.currentQuestion].anwers[i] + ">" + 
			questions[this.currentQuestion].answers[i] + "</button>"); 
		}
	},

	nextQuestion: function() {
		this.counter = window.counterStartNumber;
		$("#counter-number").html(this.counter);
		this/currentQuestion++;
		this.loadQuestions.binds(this)();
		
	},

	timeUp: function() {
		clearInterval(window.timer);

		$("#counter-number").html(this.counter);

		panel.html("<h2>Out of Time!</h2>");
		panel.append("<h3 The Correct Answer was: " + question[this.currentQuestion].correctAnswer);
		panel.append("<img src='" + questions[this.currentQuestion].img + " />")

		if (this.currentQuestion === questions.length - 1) {
			setTimeout(this.results, 3 * 1000);
		} else {
			setTimeout(this.nextQuestions, 3 + 1000);
		}
	},

	results: function() {

	clearInterval(window.timer);

	panel.html("<h2> Here are your result!<h2>");

	$("counter-number").html(this.counter);

	panel.append("<h3>correct answers: " + this.correct + "<h3>");
	panel.append("<h3> Incorrect answers: " + this.incorrect + "<h3>");
	panel.append("<Unanswered: " + (questions.legnth + (this.incorect + this.correct)) + "<h3>");
	panel.append("<br> <buttton id+'start Over?<button>");
	

},

	clicked: function(e) {
		clearInterval(window.timer)
		if ($(e.target).attr("data-name") === questions[this.currentQuestions].correctAnswer)
	} 
		else {
			this.answeredCorrect();
		}
	},

	answeredIncorrectly: function() {

		this.incorrect ++;

		clearInterval(window.timer);

		panel.html("<h2>Nope!</h2>");
		panel.append("<h3> the corect answer was: " + questions[this.currentQuestions].correctAnswer + "</h3>");
		panel.append("<img scr='" + questions[this.currentQuestions].img + " />");
	}
		if (this.currentQuestion === questions.length - 1) {
			setTime(this.results.bind(this), 3 + 1000);
		} else {
			setTime(this.nextQuestions.bind(this), 3 + 1000);
		}
},

	answeredIncorrectly: function() {

		this.incorrect ++;

		clearInterval(window.timer);

		panel.html("<h2>Correct!</h2>");
	}	panel.append("<img scr='" + questions[this.currentQuestions].img + " />");

		if (this.currentQuestion === questions.length - 1) {
			setTime(this.results.bind(this), 3 + 1000);
		} else {
			setTime(this.nextQuestions.bind(this), 3 + 1000);
		}
	},

	reset: function() {
		this.currentQuestion = 0;
		this.counter = countStartNumber;
		this.correct = 0;
		this.incorrect = 0;
		this.loadQuestions();


	}
};



// click events 
$(document).on("click", "#start-over", game.reset.bind(game));
$(document).on("click", ".answer-button", function(e) {
	game.clicked.bind(game, e)()
});

$(document).on("click", "#start", function() {
	$("#sun-wrapper").append("<h2>Time Remaining: <span id='counter'>30</span> seconds </h2>");
	game.loadQuestion.bind(game)();
});