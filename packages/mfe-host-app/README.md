# Getting Started with Create React App

This is an example of Micro Frontend Architecture and how to integrate micro frontends at runtime. I have used React.js for the shell app (container). I set up two sample micro frontend projects, one in VanillaJS and another in React. For the React MFE, I used the react-to-webcomponent library to convert the React component into a web component. One can use any UI technology to build the shell app and micro frontend app.

I also used the React Grid Layout for laying out the MFE in the UI. You can learn more about the React Grid Layout here: https://www.npmjs.com/package/react-grid-layout

To configure your micro frontend, please add your MFE configuration inside src/widget-config.json

Example:

````js
{
    "mfe": "<< name of the micro frontend/web component >>"
    "host": "url of the hosted micro frontend bundle",
    "properties": "if your micro frontend expects any attributes/properties",
    "x": 4, // this for react grid layout x coordinate of your widget
    "y": 0, // this for react grid layout y coordinate of your widget
    "w": 3, // this for react grid layout width of the widget
    "h": 3 // this for react grid layout height of the widget
}```

## Locally hosted MFE integration

if you want to integrate these tow sample MFEs , you can start the local server of each MFE (i.e. npm run start or yarn start). and then start the server of shel/container app (mfe-host-app).
please update the host name (i.e. url) of the locally hosted mfe inside src/widget-config.json

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


````
