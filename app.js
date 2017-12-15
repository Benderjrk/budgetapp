


// Budget Module
var budgetController = (function(){

  var x = 23;

  var add = function(a) {
    return x + a;
  }

  return {
    publicTest: function(b) {
      return add(b);
    }
  }

})();




// User Interface Module
var UIController = (function(){

})();




// Main Controller
var controller = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(5);

  return {
    anotherTest: function() {
      console.log(z);
    }
  }

})(budgetController, UIController);
