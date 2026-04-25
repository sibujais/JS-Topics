// I’ll add **25 React/React Native–based execution order questions** (Q51–Q75). These focus on:

// * `useEffect`
// * `useLayoutEffect`
// * `setState`
// * `Promise / async`
// * `setTimeout`
// * rendering lifecycle

// ORDER
// 1. Synchronous code
// 2. Microtasks
// 3. React processes batched updates (usually after event/microtasks)
// 4. Macrotasks

// ## 🔹 Q51==========================================================================

// function App() {
//   console.log("Render");

//   useEffect(() => {
//     console.log("Effect");
//   }, []);

//   return null;
// }




// ## 🔹 Q52==========================================================================

// function App() {
//   console.log("Render");

//   useLayoutEffect(() => {
//     console.log("LayoutEffect");
//   }, []);

//   useEffect(() => {
//     console.log("Effect");
//   }, []);

//   return null;
// }

//  ]
// 1. render, 2. LayoutEffect yah synchronous hota hai ,3. Effect

// ## 🔹 Q53==========================================================================

// function App() {
//   console.log("Render");

//   useEffect(() => {
//     Promise.resolve().then(() => console.log("Promise"));
//     console.log("Effect");
//   }, []);

//   return null;
// }
// Render,Effect,Promise



// ## 🔹 Q54==========================================================================

// function App() {
//   console.log("Render");

//   useEffect(() => {
//     setTimeout(() => console.log("Timeout"), 0);
//     console.log("Effect");
//   }, []);

//   return null;
// }

// Render,Effect,Timeout


// ## 🔹 Q55==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     setCount(1);
//     console.log("Effect");
//   }, []);

//   return null;
// }
// Render 0,Effect, Render 1

// 1. The Initial Render
// console.log("Render", 0) executes.
// The component returns null and React paints the UI.

// 2. The Effect Phase (After Paint)
// The useEffect runs because the component just mounted.
// setCount(1) is called. This schedules a re-render for the future (it doesn't happen instantly).
// console.log("Effect") executes immediately after the schedule call.

// 3. The Re-render

// React sees a state change was requested (count from 0 to 1).
// eact calls the App function again.
// useState now returns the updated value: 1.
// console.log("Render", 1) executes.
// The useEffect does not run again because the dependency array [] is empty.

// ## 🔹 Q56============================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//   }, []);

//   return null;
// }

// 1. sabse phle render 0
// 2. useffct runs and schedule in ques
// Queue: [
//   prev => prev + 1,
//   prev => prev + 1
// ] 
// 3. the whole ques will be reslved  and then re-rendering will hapen
// 4. so first, will set 0+1=1
// 5. second will set 1+1=2
// 6. so render 2
// 7. Final answer==== Render 0,Render 2


// Agra yaha functional coponent nahihota jo ki prev leta hai to value 1 hi rah jati jaise
// setCount(count + 1)
// setCount(count + 1)
// the 2 times 0+1, 0+1, count will not change for the second
// render 0, render 1


// ## 🔹 Q57==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     Promise.resolve().then(() => setCount(1));
//   }, []);

//   return null;
// }

// Render 0
// Render 1


// ## 🔹 Q58==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     setTimeout(() => setCount(1), 0);
//   }, []);

//   return null;
// }




// ## 🔹 Q59==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     setCount(1);
//     Promise.resolve().then(() => setCount(2));
//   }, []);

//   return null;
// }

// React batching behavior (VERY IMPORTANT)
// React 18 does automatic batching, even across microtasks.

// Queue: [
//   setCount(1),
//   setCount(2)
// ]

// Now queue becomes:

// [ setCount(1), setCount(2) ]
// 5️⃣ React processes updates

// setCount(1) → state becomes 1
// setCount(2) → overwrites → state becomes 2

// ✅ Final Output
// Render 0
// Render 2


// ## 🔹 Q60==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useLayoutEffect(() => {
//     setCount(1);
//     console.log("LayoutEffect");
//   }, []);

//   return null;
// }


// Render0,LayoutEffect,render 1

// ## 🔹 Q61==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useLayoutEffect(() => {
//     Promise.resolve().then(() => console.log("Promise"));
//   }, []);

//   return null;
// }


// render 0, promise

// ## 🔹 Q62==========================================================================

// function App() {
//   console.log("Render");

//   useEffect(() => {
//     console.log("Effect");

//     return () => {
//       console.log("Cleanup");
//     };
//   }, []);

//   return null;
// }

// render,effect print hoga
// jab kisi dusare compoent pe jayenge to ye component unmount hoga tb cleanup chaleg aur print hoga


// ## 🔹 Q63==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     if (count === 0) {
//       setCount(1);
//     }
//   }, [count]);

//   return null;
// }


// render 0, render 1

// ## 🔹 Q64==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     setCount(1);
//     setTimeout(() => setCount(2), 0);
//   }, []);

//   return null;
// }
//  Render 0, Render 2



// ## 🔹 Q65==========================================================================

// function App() {
//   console.log("Render");

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("Timeout");
//       Promise.resolve().then(() => console.log("Promise"));
//     }, 0);
//   }, []);

//   return null;
// }
// Render Timeout  Promise



// ## 🔹 Q66==========================================================================

// function App() {
//   console.log("Render");

//   useEffect(() => {
//     Promise.resolve().then(() => {
//       console.log("Promise1");
//       Promise.resolve().then(() => console.log("Promise2"));
//     });
//   }, []);

//   return null;
// }

// Render Promise1 Promise2


// ## 🔹 Q67==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     setCount(count + 1);
//     setCount(count + 1);
//   }, []);

//   return null;
// }

// Render 0, Render1


// ## 🔹 Q68==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     setCount(c => c + 1);
//     setTimeout(() => setCount(c => c + 1), 0);
//   }, []);

//   return null;
// }

// Render 0, Render2



// ## 🔹 Q69==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     async function run() {
//       setCount(1);
//       await Promise.resolve();
//       setCount(2);
//     }
//     run();
//   }, []);

//   return null;
// }


// Important

// // render 0
// updatesQue=[setcount 1]
// microtaskques=[setCount(2)]

// microtask exectutes first,than updates so it excetures and pushes setcount2 to updates ques

// So finally render 0, render 2


// if async function run() {
//       setCount(1);
//       await Promise.resolve();
        // console.log("hii");
//       setCount(2);
//     }

// then fitsy render0, hii,render 2


// ## 🔹 Q70==========================================================================

// function App() {
//   console.log("Render");

//   useEffect(() => {
//     console.log("Effect");
//     setTimeout(() => console.log("Timeout"), 0);
//     Promise.resolve().then(() => console.log("Promise"));
//   }, []);

//   return null;
// }

// Render,Effect,Timeout,Promise


// ## 🔹 Q71==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     setCount(1);
//   }, []);

//   useEffect(() => {
//     console.log("Effect2", count);
//   }, [count]);

//   return null;
// }

// Render 0
// Effect2 0
// Render 1
// Effect2 1


// ## 🔹 Q72==========================================================================

// function App() {
//   console.log("Render");

//   useLayoutEffect(() => {
//     console.log("Layout");
//   }, []);

//   useEffect(() => {
//     console.log("Effect");
//   }, []);

//   return null;
// }


// Render,Layout,Effect

// ## 🔹 Q73==========================================================================

// function App() {
//   console.log("Render");

//   useEffect(() => {
//     console.log("Effect1");
//   }, []);

//   useEffect(() => {
//     console.log("Effect2");
//   }, []);

//   return null;
// }

// Render,Effect1,Effect2


// ## 🔹 Q74==========================================================================

// function App() {
//   console.log("Render");

//   useEffect(() => {
//     Promise.resolve().then(() => console.log("Promise"));
//   }, []);

//   useLayoutEffect(() => {
//     console.log("Layout");
//   }, []);

//   return null;
// }

// Render,Layout,Promise

// ## 🔹 Q75==========================================================================

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Render", count);

//   useEffect(() => {
//     setCount(1);
//     setCount(2);
//     setCount(3);
//   }, []);

//   return null;
// }

// render 0, render 3


