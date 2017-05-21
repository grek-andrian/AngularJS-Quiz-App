(function(){
  angular.module("VWFacts")
        .controller("listCtrl", ListController);

  ListController.$inject = ["quizMetrics", "dataService"];

  function ListController(quizMetrics, dataService){
    var vm = this;
    vm.quizMetrics = quizMetrics;
    vm.data = dataService.carsData;
    vm.activeCar = {};
    vm.openDetail = function(index){
        vm.activeCar = index;
    };
    vm.search = "";
    vm.activateQuiz = function(){
        quizMetrics.changeState(true);
    }
  }

})();
