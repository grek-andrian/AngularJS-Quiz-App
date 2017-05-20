(function(){
  angular.module("VWFacts")
        .factory("quizMetrics", QuizMetrics);

    function QuizMetrics(){
      var quizObj = {
        quizActive: false,
        changeState: function(state){
          quizObj.quizActive = state;
        }
      };

      return quizObj;
    }
})();
