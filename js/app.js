$(document).ready(function (e) {
    //global vars
    var scoreCount = 0;
    var scoreMsg = "";

    //questions
    var questions = [
    {
        question: "How many books are there in the Bible?",
        options: ["69", "23", "75", "66"],
        answer: "66"
    },
        {
            question: "How many books are there in the new testament?",
            options: ["23", "27", "34", "29"],
            answer: "27"
        },
        {
            question: "King David had this man killed in order to marry his widow",
            options: ["Azriel", "Zechariah", "Lothan", "Uriah"],
            answer: "Uriah"
        },
		{
		    question: "What is the name of the giant killed by David?",
		    options: ["Gamiel", "Goliath", "Gomer", "Bob"],
		    answer: "Goliath"
		},
		{
		    question: "She is listed as the only woman judge in the Old Testament.",
		    options: ["Diana", "Oprah", "Sarai", "Deborah"],
		    answer: "Deborah"
		}

    ];
    var smartAssery = {

        sa1: "I wouldn't count on being a theologian there buddy.",
        sa2: "Keep on seeking.",
        sa3: "Before the foundation of the world you were predestined to be awesome! You're the next John Calvin. Word!"

    }


    var quiz = {
        //generate radio buttons
        generateOptions: function (a, question) {
            var options = [];
            for (var o = 0; o < a.length; o++) {
                options.push("<input type='radio' id=" + question + " name=" + question +
                    " value=" + a[o] + ">" + a[o] + "</input><br /><br />");
            }
            return options.join("");
        },

        //generate questions
        generateQuestions: function (q) {
            for (var i = 0; i < q.length; i++) {
                $(".questions").append(
                '<div class="the-question" id="' + i + '"><h3>' + q[i].question + '</h3>' + this.generateOptions(q[i].options, i) +
                '<a type="button" class="btn btn-primary btn-submit">Submit & Get Results</a>&nbsp;' +
                '<a type="button" class="btn btn-primary next">Next</a></div>'
                );
            }
        },

        //see if answer is correct
        answerCheck: function (questionNum, userAnswer) {


            var currQuestionAnswer = questions[questionNum].answer;
            if (userAnswer == currQuestionAnswer) {



            } else {

                $('#answerData').modal('show');
                $('#answerData .modal-info').html("You selected " + userAnswer +
                    "... <br> The correct answer is " + questions[questionNum].answer);

            }

        },

        //calculate score
        calculateScore: function (questionNum, userAnswer) {
            var currQuestionAnswer = questions[questionNum].answer;


            if (userAnswer == currQuestionAnswer) {

                scoreCount = parseInt($(".question-score").text());

                scoreCount++;
                $(".question-score").text(scoreCount);

            }

        },

        //submit and get results
        getResults: function () {
            $(".questions").on('click', '.btn-submit', function () {

                var rbSelection = $(this).parent().children(":checked").val();
                var getQuestion = $(this).parent().attr("id");

                if (rbSelection) {
                    quiz.answerCheck(getQuestion, rbSelection);
                    quiz.calculateScore(getQuestion, rbSelection);
                    $(this).parent().hide();


                    if (scoreCount < 2) {
                        scoreMsg = smartAssery.sa1;

                    }
                    else if (scoreCount < 4 && scoreCount > 1) {
                        scoreMsg = smartAssery.sa2;
                    }
                    else if (scoreCount > 4) {
                        scoreMsg = smartAssery.sa3;
                    }

                    $(".layout-container").append("<strong>You got " + scoreCount + " out of " + questions.length + " correct.</strong><br>" + scoreMsg);
                    $('#answerData h4.modal-title').html("<strong>You're Finished. Here are your results!</strong>");

                } else {
                    $('#answerData').modal('show');
                    $('#answerData .modal-info').text("Please make a choice");

                }
            });
        },

        //button functions
        next: function () {
            //Previous/Next Button Click
            $(".questions").on('click', '.next', function () {

                var rbSelection = $(this).parent().children(":checked").val();
                var getQuestion = $(this).parent().attr("id");
                if (rbSelection) {
                    quiz.answerCheck(getQuestion, rbSelection);
                    quiz.calculateScore(getQuestion, rbSelection);
                    $(this).parent().hide();
                    $(this).parent().next().show();
                } else {
                    $('#answerData').modal('show');
                    $('#answerData .modal-info').html("Please make a choice");
                }

                $('.next:last').hide();
                $('.prev').show();

                quiz.hideLastButtons();


            });
        },
        prev: function () {
            $(".questions").on('click', '.prev', function () {
                $(this).parent().hide();
                $(this).parent().prev().show();

                toggleLastBtn();

            });
        },
        hideLastButtons: function () {

            var lastQuestionVisible = $(".the-question:last").is(":visible");

            if (lastQuestionVisible) {

                $(".btn-submit").show();

            } else {
                $(".btn-submit").hide();
            }

            $('.prev:first').hide();

        },

        //start
        start: function () {

            //Start Button Click
            $(".btn-start").on("click", function () {

                $(this).hide(); //Remove Start Button
                $(this + " h3").hide();
                quiz.generateQuestions(questions); //generate the questions

                $(".questions .the-question:first").fadeIn(); //load up first question

            });

        }
    }


    quiz.start();
    quiz.next();
    quiz.getResults();



});