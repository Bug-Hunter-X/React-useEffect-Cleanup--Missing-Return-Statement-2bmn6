# React useEffect Cleanup: Missing Return Statement

This repository demonstrates a common error in React's `useEffect` hook: omitting the return statement in the cleanup function. This can lead to memory leaks and unexpected behavior.

## The Bug

The `bug.js` file contains a React component that fetches data using `fetch`. However, the `useEffect` hook lacks a return statement for cleanup.  This means that when the component unmounts, the fetch request isn't cancelled and can continue running, potentially causing memory leaks.

## The Solution

The `bugSolution.js` file demonstrates the correct implementation.  The return statement in the `useEffect` hook now ensures that any ongoing fetch requests are aborted when the component is unmounted, preventing resource leaks.

## How to run

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.  Observe the behavior in both `bug.js` and `bugSolution.js` to see the difference. 
