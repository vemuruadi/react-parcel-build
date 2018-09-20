## React App with ParcelJs for building and Styled-Components for styling

### Repo Setup
- Create a folder called 'react-parcel-build'
- Install dependencies 
```
- npm init -y for default package.json file
- npm i -S react react-dom styled-components //as dependencies
- npm i -D parcel-bundler //as dev dependency
````

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
### run the app
```
- npm run start
```

### Working with Styled Components
- more later    
