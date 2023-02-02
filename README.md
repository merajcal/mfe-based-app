# Web Component based Micro Frontend Architecture

This is an example of Micro Frontend Architecture and how to integrate micro frontends at runtime. I have used React.js for the shell app (container). I set up two sample micro frontend projects, one in VanillaJS and another in React. For the React MFE, I used the react-to-webcomponent library to convert the React component into a web component. One can use any UI technology to build the shell app and micro frontend app.
This micro frontend also demonstrate how we can integrate technology agnostics micro frontends at runtime. This also demonstrate integration of micro frontend without deployment of shell app

# How to Run Demo App
- Make sure you have yarn package manager installed
- Make sure you have lerna cli installed
- Run `lerna bootstrap` on the root directory to install packages 
- Run `yarn start` to see the application up and running
