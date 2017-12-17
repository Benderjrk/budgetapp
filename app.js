


// Budget Controller
var budgetController = (function(){
// some code

})();




// UI Controller
var UIController = (function(){
    var DOMstrings = {
      addType: '.add__type',
      addDescription: '.add__description',
      addValue: '.add__value',
      inputButton: '.add__btn'
    }

    return {
      getInput: function() {
        return {
          type: document.querySelector(DOMstrings.addType).value, //Will be either inc or exp
          description: document.querySelector(DOMstrings.addDescription).value,
          value: document.querySelector(DOMstrings.addValue).value
        };
      },

      getDOMstrings: function() {
        return DOMstrings;
      }
    };

//some code
})();




// Main Controller
var controller = (function(budgetCtrl, UICtrl){

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputButton).addEventListener("click", ctrlAddItem);

     document.addEventListener('keypress', function(event){

      if(event.keyCode === 13 || event.which === 13){
        // code goes here when enter is pressed.
          ctrlAddItem();

       }
     });
  };



  //control add item function
  var ctrlAddItem = function() {
    // 1. Get field input data
    var input = UICtrl.getInput();
    console.log(input);
    // 2. Add the itme to the budget Controller

    // 3. Add the item to the UI Controller

    // 4. Calculate the budget

    // 5. Display the budget on the UI
    console.log('Add item function');
  };
//some code
    return {
      init: function() {
        console.log('application has started.');
        setupEventListeners();

      }
    };


})(budgetController, UIController);

controller.init();
