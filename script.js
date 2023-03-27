// console.log('This is the first line that i have inluded with index.html file');
// //localscope
// function localScope() {
//     var local = 'I am local to my own function';
//     console.log(local);
//  }
//  localScope();
// //  console.log(local);

//  //global scope
//  var globalVar = 'I am a Global Variable';

// function globalScope() {
//    console.log('Inside a Function: ' + globalVar);
// }

// globalScope();

// console.log('Outside: ' + globalVar);


// function anoGlobalFunc() {
//     console.log('Global Function');
//     function localFunc() {
//        console.log('Local Function');
//     }
//     localFunc();
//  }


// function objectFunc() {
//     var localObj = {
//        name: 'Zonayed Ahmed',
//        age: 21
//     }
//     console.log(localObj);
//  }

//  objectFunc();
//  console.log(localObj);


//Automatic global variable
// var person = function(){
//     name = "md jasim uddim";
// }
// person();
// console.log(name);

// lexical function 
// function parentFunction() {
//     var a = 6;
//     function childFunction() {
//        var b = 4;
//        console.log('Sum: ' + (a + b));
//     } 
//     childFunction();
//  }

//  parentFunction();


//closure function
// function closuresDemo() {
//     var x = 10;
//     return function() {
//        var y = 20;
//        console.log('Sum: ' + (x + y));
//     }
//  }
//  closuresDemo()();
//  //another way
//  var aVar = closuresDemo();
// var total = aVar();
// console.log(total);


// function aParentFunc(a) {
//     return function(b) {
//        console.log('Sum: ' + (a + b));
//     }
//  }
//  aParentFunc(6)(4);
//  var avar = aParentFunc(10);
//  var childVar = avar(10);
//  childVar();