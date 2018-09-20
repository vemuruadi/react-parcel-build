# React App with ParcelJs for building and Styled-Components for styling

## Setup Structure
- create a folder called 'react-parcel-build'
- npm init -y for default package.json file
- npm i -S react react-dom styled-components //as dependencies
- npm i -D parcel-bundler //as dev dependency

- in package.json, add the below inside "scripts": {} to run react app
    "start": "parcel public/index.html --open",
    "build": "parcel build public/index.html"

### folder structure
```
public
    - index.html //root html file for react
src
    - index.js //react start
    - App.js //main react component
    - AppStyles.js //Simple styles for App component using styled-components
```

## Working with Styled Components
- more later    
