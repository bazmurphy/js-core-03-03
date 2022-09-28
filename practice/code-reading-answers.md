# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

line 4(5) the console.log is passed the locally scoped x variable (confined to the f1 function) as its argument and will therefore print 2
line 6(7) the console.log is passed the globally scoped x variable as its argument and will therefore print 1


## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

console.log(f1()) will print 10 to the console
inside the f1 function, the x argument passed to the console.log is the globally scoped x variable
console.log(y) will return undefined
the y variable inside the f1 function is locally scoped and confined to the f1 function;
there is no globally scoped y variable
therefore when an attempt is made to console.log the y variable (outside of the f1 function) no such variable exists;


## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

f1(x) will return 10
console.log(x) will print 9 to the console (globally scoped x is unmutated by the f1 function)
f1 uses its own parameter "val" which simply copies the value of "x"
PASS BY VALUE - PRIMITIVE TYPE
f2(y) will return 10
console.log(y) will print 10 to the console
the object y, it's x property value of 9 is increased by 1 and that mutation persists
objects can still be mutated even when declared as const
PASS BY REFERENCE - COMPLEX TYPE