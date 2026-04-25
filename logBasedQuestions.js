// * **Synchronous code runs first**
// * Then **microtasks (Promise.then, queueMicrotask, MutationObserver)**
// * Then **macrotasks (setTimeout, setInterval, setImmediate, I/O)**



// # 🧪 SECTION 1: Basics (Q1–Q10)

// ### Q1

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C")
// a,c,b


// ### Q2

// console.log("A");

// Promise.resolve().then(() => console.log("B"));

// console.log("C");
// a,c,b


// ### Q3

// setTimeout(() => console.log("A"), 0);

// Promise.resolve().then(() => console.log("B"));

// console.log("C");
// c,b,a


// ### Q4

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

//a,d,c,b

// ### Q5

// console.log("Start");

// Promise.resolve().then(() => console.log("Promise"));

// setTimeout(() => console.log("Timeout"), 0);

// console.log("End");

// start,end,promise,timeout

// ### Q6

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// });

// console.log("D");
//a,d,b,c - queue



// ### Q7

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 0);

// console.log("D");
//adbc


// ### Q8

// Promise.resolve().then(() => console.log("A"));
// Promise.resolve().then(() => console.log("B"));

// console.log("C");

//cab

// ### Q9

// setTimeout(() => console.log("A"), 0);
// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));
//cab



// ### Q10

// console.log("A");

// (async () => {
//   console.log("B");
//   await Promise.resolve();
//   console.log("C");
// })();

// console.log("D");

//A, B,D,C 
// functions are called synchnously, and async functions do not go to queues,micro and macro tasks go.
//  so function will run as it is and executes sync then push micro into microQueue, and macro to macroQueue

// # 🧪 SECTION 2: Intermediate (Q11–Q30)

// ### Q11

// async function test() {
//   console.log("A");
//   await null;
//   console.log("B");
// }
// test();
// console.log("C");

// ACB, kuki b queue me chala gya



// ### Q12

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");

// adcb

// ### Q13

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 0);

// Promise.resolve().then(() => console.log("D"));

//adbc

// ### Q14

// Promise.resolve().then(() => {
//   console.log("A");
//   setTimeout(() => console.log("B"), 0);
// });

// console.log("C");
//cab



// ### Q15

// console.log("A");

// async function foo() {
//   console.log("B");
//   await Promise.resolve();
//   console.log("C");
// }

// foo();

// console.log("D");



// ### Q16

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
// }).then(() => {
//   console.log("C");
// });

// console.log("D");



// ### Q17

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => {
//   console.log("C");
//   setTimeout(() => console.log("D"), 0);
// });

// console.log("E");



// ### Q18

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
//   return Promise.resolve();
// }).then(() => {
//   console.log("C");
// });

// console.log("D");



// ### Q19

// console.log("A");

// async function test() {
//   console.log("B");
//   await Promise.resolve();
//   console.log("C");
// }

// test();

// Promise.resolve().then(() => console.log("D"));
// abcd
// a,b phir promise.resolve jayega , c ko print karege function ko close karenge
// next promise queue me jayega ,phir D print hoga ,baad me sbse phle function vala resolve hoga phir niche vala resolve hoga 


// ### Q20

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 0);

// Promise.resolve().then(() => console.log("D"));

// console.log("E");



// ### Q21

// console.log("A");

// queueMicrotask(() => console.log("B"));

// Promise.resolve().then(() => console.log("C"));

// console.log("D");



// ### Q22

// console.log("A");

// queueMicrotask(() => {
//   console.log("B");
//   queueMicrotask(() => console.log("C"));
// });

// console.log("D");



// ### Q23

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// queueMicrotask(() => console.log("C"));

// console.log("D");



// ### Q24

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
//   setTimeout(() => console.log("C"), 0);
// });

// console.log("D");



// ### Q25

// console.log("A");

// (async () => {
//   console.log("B");
//   await null;
//   console.log("C");
// })();

// Promise.resolve().then(() => console.log("D"));



// ### Q26

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   setTimeout(() => console.log("C"), 0);
// }, 0);

// console.log("D");



// ### Q27

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// });

// console.log("D");



// ### Q28

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// setTimeout(() => console.log("D"), 0);

// console.log("E");



// ### Q29

// console.log("A");

// async function foo() {
//   console.log("B");
//   await null;
//   console.log("C");
// }

// foo();

// console.log("D");

// Promise.resolve().then(() => console.log("E"));

//a,b,d,c,e

// ### Q30

// console.log("A");

// Promise.resolve()
//   .then(() => console.log("B"))
//   .then(() => console.log("C"));

// setTimeout(() => console.log("D"), 0);

// console.log("E");



// # 🧪 SECTION 3: Advanced (Q31–Q50)

// ### Q31

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
// });

// console.log("E");
// 1. A, 2. E, 3.promise part microque, 4. settimeout macroque, 5. resolve and print D, 6. B, C
// aedbc


// ### Q32

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
//   return Promise.resolve();
// }).then(() => {
//   console.log("C");
// });

// console.log("D");



// ### Q33

// console.log("A");

// async function test() {
//   console.log("B");
//   await Promise.resolve();
//   console.log("C");
// }

// test();

// setTimeout(() => console.log("D"), 0);



// ### Q34

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// (async () => {
//   console.log("C");
//   await null;
//   console.log("D");
// })();

// console.log("E");



// ### Q35

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
//   setTimeout(() => console.log("C"), 0);
// });

// setTimeout(() => console.log("D"), 0);



// ### Q36

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
//   Promise.resolve().then(() => console.log("D"));
// });

// console.log("E");



// ### Q37

// console.log("A");

// queueMicrotask(() => {
//   console.log("B");
//   setTimeout(() => console.log("C"), 0);
// });

// console.log("D");



// ### Q38

// console.log("A");

// (async () => {
//   console.log("B");
//   await Promise.resolve();
//   console.log("C");
// })();

// setTimeout(() => console.log("D"), 0);

// Promise.resolve().then(() => console.log("E"));



// ### Q39

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => {
//   console.log("C");
//   queueMicrotask(() => console.log("D"));
// });

// console.log("E");



// ### Q40

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
//   setTimeout(() => {
//     console.log("C");
//     Promise.resolve().then(() => console.log("D"));
//   }, 0);
// });

// console.log("E");



// ### Q41

// console.log("A");

// async function foo() {
//   console.log("B");
//   await null;
//   console.log("C");
//   await null;
//   console.log("D");
// }

// foo();

// console.log("E");

//abecd

// ### Q42

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// }).then(() => {
//   console.log("D");
// });

// console.log("E");



// ### Q43

// console.log("A");

// queueMicrotask(() => {
//   console.log("B");
// });

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");



// ### Q44

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   setTimeout(() => console.log("C"), 0);
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
// });



// ### Q45

// console.log("A");

// (async () => {
//   console.log("B");
//   await null;
//   console.log("C");
// })();

// Promise.resolve().then(() => console.log("D"));

// setTimeout(() => console.log("E"), 0);



// ### Q46

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// });

// setTimeout(() => console.log("D"), 0);

// console.log("E");



// ### Q47

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 0);

// Promise.resolve().then(() => console.log("D"));

// console.log("E");



// ### Q48

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
// });

// setTimeout(() => {
//   console.log("C");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
// });



// ### Q49

// console.log("A");

// async function foo() {
//   console.log("B");
//   await null;
//   console.log("C");
// }

// foo();

// Promise.resolve().then(() => console.log("D"));

// console.log("E");



// ### Q50

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
//   setTimeout(() => console.log("D"), 0);
// });

// console.log("E");

