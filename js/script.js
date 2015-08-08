/* eslint-enable */

(function (window) {
  'use strict';

  $(document).ready(function () {
    questionAnswerCreator();
    quizInterfaceCreator();
    $('.quiz-form').on('submit', checkAnswers).on('reset', renewQuiz);
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
       * if answerOptions is an empty array */
      if (!answerOptions || !(answerOptions instanceof Array) || !answerOptions.length) {
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
  function renewQuiz(ev) {
    // reset score to zero (0)
    quiz.score = 0;

    var questions = $('.questions').find('.question');

    // removes all questions exept the template
    questions.not('[data-question-template]').remove();

    // re-create quiz interface
    quizInterfaceCreator();

    // hide results section
    var results = $('.results');
    results.hide();
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
  function quizInterfaceCreator() {
    // shuffle questions
    shuffle(quiz.questionAnswerList);

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


      // shuffle answers
      shuffle(answerList);

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
      });

      /* append question to the bottom of questions */
      questions.append(question);
    });

  }

  /* shuffle list
   * @param suffleArr array list to shuffle
   */
  function shuffle(shuffleArr) {
    for (var start = 0, len = shuffleArr.length; start < len; start++) {
      var rand = Math.floor(Math.random() * len);
      // splice returns an array. Grab the first element only
      var question = shuffleArr.splice(rand, 1)[0];
      shuffleArr.unshift(question);
    }
  }

  /* Check answers to the question */
  function checkAnswers(ev) {
    ev.preventDefault();
    // reset score to zero (0)
    quiz.score = 0;

    /* find all checked inputs */
    var checked = $('.questions').find('input:checked');

    /* if none checked, do nothing */
    if (!checked.length) {
      return;
    }

    checked.each(function (i, ch) {
      /* get question id of checked answer */
      var questionId = Number($(ch).attr('name').replace(/qa(\d+)/, '$1')),
        answer = $(ch).attr('value'), // get the checked answer
        questionBox = $('.question[data-question-id=' + questionId + ']');

      /* check if the answer with the question id mathces the checked answer */
      if (quiz.questionAnswerList[questionId].answer === answer) {
        questionBox.removeClass('wrong');
        questionBox.addClass('correct');

        // increment the score
        quiz.score++;
      } else {
        questionBox.removeClass('correct');
        questionBox.addClass('wrong');
      }
    });

    /* update results section */
    var results = $('.results');
    results.find('.score').html(quiz.score);
    results.find('.total').html(quiz.questionAnswerList.length);
    results.show();
  }

})(this);
