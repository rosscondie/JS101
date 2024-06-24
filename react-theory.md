# React Theory

## JSX 

JSX is a syntax extension used by React components that looks like HTML but it is stricter and can display dynamic information. 

JSX and React are two seperate things. JSX is a syntax extension while React is a JavaScript library. 

To return multiple elements from a component, we need to wrap them with a single parent tag such as a ```<div>``` or an empty tag ```<> </>``` instead.
The empty tag is called a Fragment which allows us to group things without leaving any trace in the browser HTML tree.

JSX requires tags to be explicitly closed: self closing tags like ```<img>``` must become ```<img />``` and wrapping tags like ```<li>oranges``` must be written as ```<li>oranges</li>```

JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In our components we will often want to read those attributes into variables but JavaScript has limitations on variable names. For example their names can't contain dashes or be reserved words like ```class```.

This is why in React, many HTML and SVG attributes are written in camelCase. Instead of ```stroke-width``` we use ```strokeWidth```. 
Instead of ```class``` we use ```className``` in React.

We can also use curly braces to enter into the JavaScript world to embed values into our markup.

```javascript
export default function TodoList() {
    const person = {
        firstName: 'Luke',
        lastName: 'Skywalker'
    };
    return (
        <h1>{person.firstName} {person.lastName} Todo List</h1>
    );
}
```

## Virtual DOM

The virtual DOM is a lightweight coy of the real DOM (Document Object Model) that allows React to manage changes more efficiently by minimizing the direct manipulation required on the real DOM. This porcess enhances the performance of web apps.

The virtual DOM plays a key role in how React updates the UI, ensuring that changes are applied quickly without uncessary re-renders.

- Step 1 - <b>Initial Rendering: </b>when the app starts, the entire UI is represented as a Virtual DOM. React elements are created and rendered into the virtual structure.

- Step 2 - <b>State and Props Changes: </b>as the state and props change in the app, React re-renders the affected components in the virtual DOM. These changes do not 
immediately impact the real DOM.

- Step 3 - <b>Comparison Using Diff Algorithm: </b>React then uses a <b>diffing algorithm</b> to compare the current version of the Virtual DOM with the previous version. This process identifies the differences (or "diffs") between the two versions.

- Step 4 - <b>Reconciliation Process: </b>based on the differences identified, React determines the most efficient way to update the real DOM. Only the parts of the real DOM that need to be updated are changed, rather than re-rendering the entire UI. This selective updating is quick and performant.

- Step 5 - <b>Update to the Real DOM: </b>finally, React applies the necessary changes to the real DOM. This might involve adding, removing, or updating elements based on the differences detected in step 3.

The real DOM is a built-in standard interface in browsers that represents and interacts with HTML elements, from `Doctype` declaration and the root `html` element to every other element in it.

This real DOM represents the whole HTML document as a tree structure and allows JavaScript to manipulate and change HTML documents. Sometimes when those changes occur, the whole document might re-render.


## React Router

React Router lets us handle client and server-side routing in React applications. It allows us in single-page web or mobile apps that allow navigating without refreshing the page. React Router enables "client side routing". Traditionally with websites the browser would request a document from a web server, download and evaluates the CSS and JavaScript assets and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead your app can immediately render some new UI and make data requests with `fetch` to update the page with new information.


## React hooks: useEffect, useState, useRef

Hooks allow function components to have access to state and other React features.

Hooks allow us to "hook" into React features such as state and lifecycle methods. 

There are 3 rules for hooks:
- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional. 

### `useState`

The `useState` Hook allows us to track state in a function component.

State generally refers to application data or properties that need to be tracked.

We initialize our state by calling `useState` in our function component. 

`useState` accepts an initial state and returns two values:
- The current state.
- A function that updates the state.

```javascript
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```
To use the `useState` Hook we first need to import it into our component.

This is destructured from `react` as it is a named export.

We destructure the returned values from `useState`.

The first value, `color` is our current state.

The second value, `setColor` is the function that is used to update our state.

Lastly we set the initial state to an empty string: `useState("")`

When state is updated, the entire state gets overwritten. 


### `useEffect`

The `useEffect` Hook allows you to perform side effects in your components.

Some examples of side effects are:
- fetching data
- directly updating the DOM
- timers

`useEffect` accepts two arguments. The second argument is optional.

`useEffect(<function>, <dependency>)`

`useEffect` runs on every render when a dependency is not included.

1. No dependecy passed:

```javascript
useEffect(() => {
  //Runs on every render
});
```

This is not what we want. We should always include the second parameter which accepts an array. We can optionally pass dependencies in this array.

2. An empty array:

```javascript
useEffect(() => {
  //Runs only on the first render
}, []);
```

3. Props or state values:

```javascript
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

### `useRef`

The `useRef` Hook allows you to persist values between renders. 

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

## React Context useContext

React Context is a way to manage state globally. 

It can be used together with the `useState` Hook to share state between deeply nested components more easily than with `useState` alone. 

State should be held by the highest parent component in the stack that requires access to the state. 

If we had multiple nested components and the top and bottom stack need access to the state. Without Context we need to pass the state as "props" through each component. 

(This is called "prop drilling").

```javascript
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
```

Even though components 2-4 did not need the state, they had to pass the state along so that it could reach component 5.

The solution to this would to be to create context.

To create context you must import `createContext` and intialize it:

```javascript
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext() // initialization
```

Next we can use the Context Provider to wrap the tree of components that need the state Context.

Wrap child components in the Context Provider and supply the state value.

```javascript
function Component1() {
    const [user, setUser] = useState("Luke Skywalker");

    return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
    );
}
```

## How to create custom hooks

If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.

Like a `useFetch` method to fetch data from and API for example.

## What is a store?

A store is an object which provides the state of the application. The object is accessible with help of the provider in the files of the project. The only way to change the state inside it is to dispatch an action on it. 

A store holds the whole state tree of your application. When an action is dispatched on the state inside this triggers the root reducer function to calculate the new state. 

## Look at an example of a store (zustand)


## Conditional rendering in React

There are several ways to conditionally render components in React.

`if` statement:

```javascript
function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>GOAL!</h1>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />
    }
    return <MissedGoal />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);
```

Another way to conditionally render a React component is by using the `&&` operator.

```javascript
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);
```

If `cars.length > 0` is equates to true, the expression after && will render.

We can also use a ternary operator to conditionally render elements.

```javascript
function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);
```

Return the `MadeGoal` component if `isGoal` is `true`, otherwise return the `MissedGoal` component. 

## List rendering in React

In React, you will render lists with some type of loop.

The JavaScript `map()` array method is generally the preferred method.


## Dynamic import in React

Dynamic imports in React allow you to dynamically load JavaScript modules at runtime, which can improve the performance of your application and load times. 

This is useful for code splitting and lazy loading, ensuring that only the necessary code is loaded when needed. 

The `import()` function returns a Promise that resolves to the module you want to use dynamic import.

A normal import in JavaScript (using the import statement) does not return a Promise. It's a synchronous operation and returns the exported values from the imported module.

## Memoisation in React: useMemo, useCallback

### `useCallback` 

The React `useCallback` Hook returns a memoized callback function.

<p style="color: orange">Think of memoization as caching a value so that it does not need to be recalculated</p>

This allows us to isolate resource intensive functions so that they will not automatically run on every render. 

The `useCallback` Hook only runs when one of its dependencies update.

The `useCallback` and `useMemo` Hooks are similar. The main difference is that `useMemo` returns a memoized value and `useCallback` returns a memoized function.

