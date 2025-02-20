const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

const {name, age, favouriteFood} = personOne;

function introduceYourself({name, age, favouriteFood}) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
// Hello, my name is Popeye. I am 34 years old and my favourite food is Spinach.