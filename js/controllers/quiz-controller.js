(function(){
  angular.module("VWFacts")
        .controller("quizCtrl", QuizController);

  QuizController.$inject = ["quizMetrics", "DataService"];

    function QuizController(quizMetrics, DataService){
      var vm = this;
      vm.quizMetrics = quizMetrics;
      vm.dataService = DataService;
      vm.activeQuestion = 0;
      vm.error = false;
      vm.finaliseAnswers = finaliseAnswers;
      var numQuestionsAnswered = 0;

      vm.setActiveQuestion = function setActiveQuestion(index){
            if(index === undefined){
                var breakOut = false;
                var quizLength = DataService.quizQuestions.length - 1;
                while(!breakOut){
                    vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
                    if(vm.activeQuestion === 0){
                        vm.error = true;
                    }
                    if(DataService.quizQuestions[vm.activeQuestion].selected === null){
                        breakOut = true;
                    }
                }
            }else{
                vm.activeQuestion = index;
            }
        };

      vm.questionAnswered = function questionAnswered(){
        var quizLength = DataService.quizQuestions.length;
        numQuestionsAnswered = 0;
        for(var x = 0; x < quizLength; x++){
          if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
              numQuestionsAnswered++;
              if(numQuestionsAnswered >= quizLength){
                  for(var i = 0; i < quizLength; i++){
                      if(DataService.quizQuestions[i].selected === null){
                          setActiveQuestion(i);
                          return;
                      }
                  }
                  vm.error = false;
                  vm.finalise = true;
                  return;
              }
          }
      }
      vm.setActiveQuestion();
    }

    vm.selectAnswer = function selectAnswer(index){
          DataService.quizQuestions[vm.activeQuestion].selected = index;
    }

    function finaliseAnswers(){
            vm.finalise = false;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);
    }

    }
})();
