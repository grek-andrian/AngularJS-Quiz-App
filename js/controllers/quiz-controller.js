(function(){
  angular.module("VWFacts")
        .controller("quizCtrl", QuizController);

  QuizController.$inject = ["quizMetrics", "dataService"];

    function QuizController(quizMetrics, dataService){
      var vm = this;
      vm.quizMetrics = quizMetrics;
      vm.dataService = dataService;
      vm.activeQuestion = 0;
      var numQuestionsAnswered = 0;
      vm.setActiveQuestion = function(){
        var breakOut = false;
        var quizLength = dataService.quizQuestions.length - 1;
        while (!breakOut) {
          vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
          if(dataService.quizQuestions[vm.activeQuestion].selected === null){
            breakOut = true;
          }
        }
      };
      vm.questionAnswered = function(){
        var quizLength = dataService.quizQuestions.length;
        if(dataService.quizQuestions[vm.activeQuestion].selected !== null){
          numQuestionsAnswered++;
          if(numQuestionsAnswered >= quizLength){

          }
        }
        vm.setActiveQuestion();
      }
    }
})();
