


//Hoisting in javascript functions -> function declaration ......
debug1("this is debug1");
// debug('this is a debug2')  err
const debug= function (string){ //function expressions.....
     console.log(string);
}

function debug1(string){
  console.log(string);
}

// debug2('hello'); err
const debug2=(romrom)=>{
  console.log(romrom);  //variable fun not support hoisting in javascript
}

const arrowfun1=(rom)=>{
  return 2*2;        //explicit return
} 

const arrowfun2=()=>4;  //implicit return

// console.log(arrowfun2());
const arrowfun3=(value1,value2)=>({name:value1,age:value2});
// arrowfun3();
// console.log(arrowfun3('rom',12));

// iffi
// immediatily invoked functions
(function (age) {
  console.log(`Running the Anon function ${age}`);
  return `Your are cool ${age}`;
})(13);

let uncle='mohit';
const wes = {
  name: "Wes Bos",
   // Method!
  sayHi: function sayHi() {
   // console.log(this);
    this.name='romrom'
    //console.log('Hey Wes!');
    return 'Hey Wes!';
  },
  // Short hand Method
  yellHi(){
   // console.log('HEY WESSSSS');
    this.whisperHi();
   return 'hello';
  },
  // Arrow function
  whisperHi: () => {
    console.log(this);
    //this.uncle='ashish';
    return 8;
 }
};
// console.log(wes.sayHi());
//  console.log(wes.yellHi());
// console.log(wes.whisperHi());
// console.log(uncle);
// console.log(uncle);