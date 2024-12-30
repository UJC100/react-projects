const reactQuestions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render components based on changing data.",
  },
  {
    id: 2,
    question: "What are props in React?",
    answer:
      "Props (short for properties) are read-only inputs passed to a React component to provide data. They allow components to be dynamic and reusable by passing data from a parent component to a child component.",
  },
  {
    id: 3,
    question: "What is the use of state in React?",
    answer:
      "State is an object managed within a React component that allows the component to hold and update its own data over time. Changes in state trigger re-renders of the component.",
  },
  {
    id: 4,
    question: "What is the difference between functional and class components?",
    answer:
      "Functional components are simple JavaScript functions that return JSX and use hooks for state and lifecycle management. Class components, on the other hand, are ES6 classes that extend `React.Component` and use methods like `render()` and lifecycle methods to manage state and behavior.",
  },
  {
    id: 5,
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM is a lightweight representation of the real DOM. React uses it to determine the most efficient way to update the UI by comparing changes between the virtual DOM and the real DOM, minimizing direct manipulations.",
  },
];

export default reactQuestions;
