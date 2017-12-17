


// Budget Controller
var budgetController = (function(){

  //data model for expenses and income
  var Expenses = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
  };

  var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
  };


  var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      //create new id if none then set as 0
      if(ID > 0) {
        ID = data.allItems[type][data.allItems[type].length-1].id + 1;
      } else {
        ID = 0;
      }

      //push item into data structure
      if(type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc'){
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);

      //return the new element
      return newItem;
    },
    testing: function() {
      console.log(data);
    }
  };
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
    var input, newItem;
    // 1. Get field input data
    input = UICtrl.getInput();
    // 2. Add the itme to the budget Controller
    addItem = budgetCtrl.addItem(input.type, input.description, input.value);
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
