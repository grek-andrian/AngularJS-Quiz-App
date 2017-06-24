(function(){
  angular.module("VWFacts")
        .controller("listCtrl", ListController);

  ListController.$inject = ["quizMetrics", "DataService"];

  function ListController(quizMetrics, DataService){
    var vm = this;
    vm.quizMetrics = quizMetrics;
    vm.data = DataService.carsData;
    vm.activeCar = {};
    vm.openDetail = function(index){
        vm.activeCar = index;
    };
    vm.search = "";
    vm.changeActiveTurtle = function changeActiveTurtle(index){
           vm.activeTurtle = index;
    }
    vm.activateQuiz = function(){
        quizMetrics.changeState("quiz", true);
    }

  }

})();
