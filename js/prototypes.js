//Constructor Function - normal funtion that is capitalized
function Person(name){
  this.name = name;
  this.greeting = "yo Bitch!";

  //method directly on Constructor *bad
  this.sayHello = function() {
    console.log(this.name + " says " + this.greeting);
  };
}

Person.prototype.sayBye = function(){
  console.log(this.name + " says cya!" );
};

var p = new Person("ishan");
p.sayHello();
p.sayBye();
