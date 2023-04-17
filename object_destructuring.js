const person={
    name:'Max',
    age:30,
    greet:function(){ console.log('Hi my name is: '+ this.name); 
}
};
person.greet();

const {name,age}=person;

console.log(name,age);

