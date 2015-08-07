/* eslint-enable */

(function (window) {
  $(document).ready(function () {
    questionAnswerCreator();
    quizInterfaceCreator();
  });


  function QA(question, answer) {
    this.question = question;
    this.answer = answer;
    this.answerOptions = [];
  }

  /*
   * Details of the quiz
   */
  var quiz = {
    questionAnswerList: [], // list of all questions and answers
    score: 0, // score of the user

    /*
     * Add question and answer to list
     * @param question Question to add
     * @param answer Answer of the question
     * @param answerOptions Other invalid optional answers to question (optional)
     */
    add: function (question, answer, answerOptions) {
      var questionAnswer = new QA(question, answer);

      /* Check if answer included in answerOptions and delete them */
      if (answerOptions && answerOptions instanceof Array) {
        while (answerOptions.indexOf(answer) > -1) {
          var answerIndex = answerOptions.indexOf(answer);
          answerOptions.splice(answerIndex, 1);
        }
      }

      /* Generate three random answers using default answers list
       * if answerOptions is not given or
       * if answerOptions is not an array or
       * if answerOptions is an empty array */ // @FIXME [X] empty array check
      if (!answerOptions || !(answerOptions instanceof Array) || !answerOptions.length) {
        // @TODO [X] use three random answers from default answerOptions list
        answerOptions = [];
        (function addRandAnswers() {
          while (answerOptions.length < 3) {
            /* generate a random number
             * range [0 - defaultAnswerOptions.length (exclusive)] */
            var rand = Math.floor(Math.random() * quiz.defaultAnswerOptions.length),
              answer_ = quiz.defaultAnswerOptions[rand];

            /* Add to answerOptions if generated answer is not the
             * actual answer and it's not present in the answerOptions */
            if (answer_ !== answer &&
              answerOptions.indexOf(answer_) < 0) {
              answerOptions.push(answer_);
            }
          }
        })();
      }

      questionAnswer.answerOptions = answerOptions;

      // add new question answer to questionAnswerList
      quiz.questionAnswerList.push(questionAnswer);

      console.log(questionAnswer); // @CHANGES REMOVE CONSOLE

      return this;
    },

    /* Default answers to populate in answerOptions */
    defaultAnswerOptions: ['Vishakhapatnam', 'Guntur', 'Hyderabad', 'Khammam',
                           'Bomdilla', 'Itanagar', 'Tawang', 'Namsai',
                           'Guwahati', 'Silchar', 'Dispur', 'Dibrugarh',
                           'Muzaffarpur', 'Darbhanga', 'Aurangabad', 'Patna',
                           'Raipur', 'Durg', 'Bastar', 'Dantewara',
                           'Panaji', 'Cupa', 'Saturli', 'Chaudi',
                           'Rae Bareilly', 'Gandhinagar', 'Surat', 'Ahmedabad',
                           'gurgaon', 'Kurukshetra', 'Bhiwani', 'Chandigarh',
                           'Kullu', 'Shimla', 'Mandi', 'Bilaspur',
                           'Srinagar', 'Anantnag', 'Udhampur', 'Rajouri',
                           'Jamshedpur', 'Ranchi', 'Dhanbad', 'Hazaribag',
                           'Chikkamagaluru', 'Mysore', 'Chitradurga', 'Bengaluru',
                           'Palakkad', 'Thrissur', 'Thiruvananthapuram', 'Kozhikode',
                           'Jabalpur', 'Bhopal', 'Rajgarh', 'Udaipura',
                           'Honolulu', 'Pune', 'Nagpur', 'Mumbai',
                           'Churachandpur', 'Imphal', 'Bishnupur', 'Thoubal',
                           'Shillong', 'Nongpoh', 'Jowai', 'Baghmara',
                           'Champhai', 'Aizawl', 'Phaileng', 'Mamit',
                           'Dimapur', 'Wokha', 'Kohima', 'Phek',
                           'Bhubaneswar', 'Cuttack', 'Brahmapur', 'Sambalpur',
                           'Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar',
                           'Ajmer', 'Jaisalmer', 'Bikaner', 'Jaipur',
                           'Namchi', 'Gangtok', 'Mangan', 'Gezing',
                           'Chennai', 'Kanchipuram', 'Tiruchirapalli', 'Madurai',
                           'Adilabad', 'Nalgonda', 'Warangal', 'Hyderabad',
                           'Kailsahar', 'Dharmanagar', 'Agartala', 'Udaipur',
                           'Lucknow', 'Noida', 'Ghaziabad', 'Mathura',
                           'Hardwar', 'Dehradun', 'Nainital', 'Almora',
                           'Alipore', 'Medinipur', 'Krishnanagar', 'Kolkata']
  };

  /*
   * Repopulate the answerOptions
   * Reset score
   */
  function renewQuiz() { // @TODO repopulate answerOptions
  }

  /*
   * Generate question and answer sets.
   */
  function questionAnswerCreator() {
    quiz.add('What is the capital of Andhra Pradesh?', 'Hyderabad');
    quiz.add('What is the capital of Arunachal Pradesh?', 'Itanagar');
    quiz.add('What is the capital of Assam?', 'Dispur');
    quiz.add('What is the capital of Bihar?', 'Patna');
    quiz.add('What is the capital of Chhattisgarh?', 'Raipur');
    quiz.add('What is the capital of Goa?', 'Panaji');
    quiz.add('What is the capital of Gujarat?', 'Gandhinagar');
    quiz.add('What is the capital of Haryana?', 'Chandigarh');
    quiz.add('What is the capital of Himachal Pradesh?', 'Shimla');
    quiz.add('What is the capital of Jammu and Kashmir?', 'Srinagar');
    quiz.add('What is the capital of Jhakhand?', 'Ranchi');
    quiz.add('What is the capital of Karnataka?', 'Bengaluru');
    quiz.add('What is the capital of Kerala?', 'Thiruvananthapuram');
    quiz.add('What is the capital of Madhya Pradesh?', 'Bhopal');
    quiz.add('What is the capital of Maharashtra?', 'Mumbai');
    quiz.add('What is the capital of Manipur?', 'Imphal');
    quiz.add('What is the capital of Meghalaya?', 'Shillong');
    quiz.add('What is the capital of Mizoram?', 'Aizawl');
    quiz.add('What is the capital of Nagaland?', 'Kohima');
    quiz.add('What is the capital of Odisha?', 'Bhubaneswar');
    quiz.add('What is the capital of Punjab?', 'Chandigarh');
    quiz.add('What is the capital of Rajasthan?', 'Jaipur');
    quiz.add('What is the capital of Sikkim?', 'Gangtok');
    quiz.add('What is the capital of Tamil Nadu?', 'Chennai');
    quiz.add('What is the capital of Telangana?', 'Hyderabad');
    quiz.add('What is the capital of Tripura?', 'Agartala');
    quiz.add('What is the capital of Uttar Pradesh?', 'Lucknow');
    quiz.add('What is the capital of Uttarakhand?', 'Dehradun');
    quiz.add('What is the capital of West Bengal?', 'Kolkata');
  }

  /*
   * Generate quiz interface.
   */
  function quizInterfaceCreator() { // @FIXME Reformat Interface
    var questions = $('.questions'); // questions container
    /* question template */
    var qTemplate = questions.find('.question[data-question-template]');

    quiz.questionAnswerList.forEach(function (qa, qaIndex) {
      var question = qTemplate.clone(true);
      question.removeAttr('data-question-template'); // remove template attr
      question.attr('data-question-id', qaIndex); // add question indexes

      question.find('.questionText').html(qa.question); // add question

      var answers = question.find('.answers'); // answers container
      /* answer template */
      var aTemplate = question.find('.answer[data-answer-template]');

      var answerList = [qa.answer]; // add real answer
      [].push.apply(answerList, qa.answerOptions); // add all optional answers

      /* shuffle answerList */
      (function shuffleAnswers() {
        // @TODO shuffle answers in answerList
      })();

      answerList.forEach(function (ans) {
        var answer = aTemplate.clone(true);
        answer.removeAttr('data-answer-template'); // remove template attr

        /* insert answer value in input */
        var input = answer.find('input');
        input.attr('name', 'qa' + qaIndex).attr('value', ans);

        /* insert answer text */
        answer.find('.answerText').html(ans);

        /* add answer to the list of answers */
        answers.append(answer);
        console.log('Added answer - ' + ans);
      });

      questions.append(question);
      console.log('Question Added - ' + qa.question);
    });

  }

  function submitAnswers() {
    var total = 29;
    var score = 0;

    // Getting user input
    var quizForm = document.forms.quizForm;

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;
    var q10 = document.forms["quizForm"]["q10"].value;
    var q11 = document.forms["quizForm"]["q11"].value;
    var q12 = document.forms["quizForm"]["q12"].value;
    var q13 = document.forms["quizForm"]["q13"].value;
    var q14 = document.forms["quizForm"]["q14"].value;
    var q15 = document.forms["quizForm"]["q15"].value;
    var q16 = document.forms["quizForm"]["q16"].value;
    var q17 = document.forms["quizForm"]["q17"].value;
    var q18 = document.forms["quizForm"]["q18"].value;
    var q19 = document.forms["quizForm"]["q19"].value;
    var q20 = document.forms["quizForm"]["q20"].value;
    var q21 = document.forms["quizForm"]["q21"].value;
    var q22 = document.forms["quizForm"]["q22"].value;
    var q23 = document.forms["quizForm"]["q23"].value;
    var q24 = document.forms["quizForm"]["q24"].value;
    var q25 = document.forms["quizForm"]["q25"].value;
    var q26 = document.forms["quizForm"]["q26"].value;
    var q27 = document.forms["quizForm"]["q27"].value;
    var q28 = document.forms["quizForm"]["q28"].value;
    var q29 = document.forms["quizForm"]["q29"].value;


    // Validation for getting answers for every question
    for (var i = 1; i <= total; i++) {
      if (eval('q' + i) == null || eval('q' + i) == '') {
        alert("You have missed question " + i);
        return false;
      }
    }



    //Set answers
    var answers = ["c", "b", "c", "d", "a", "a", "b", "d", "b", "a", "b", "d", "c", "b", "d", "b", "a", "b", "c", "a", "a", "d", "b", "a", "d", "c", "a", "b", "d"];

    //check answers
    for (i = 1; i <= total; i++) {

      if (eval('q' + i) == answers[i - 1]) {
        score++;
      }
    }

    //Display results

    var results = document.getElementById('results');
    results.innerHTML = '<h3> You scored <span>' + score + '</span> out of <span> ' + total + '</span></h3>';

    alert("You have scored " + score + " out of " + total);

    return false;


  }


})(this);
