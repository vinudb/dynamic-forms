# To view the output in the development mode, follow the steps as given below:
1) In the console, navigate to the project folder.
2) Run command "npm install". This will install all the dependencies and creates a node-modules folder.
   This process takes around 5-8 mins to complete.
3) Run command "npm start". Runs the app in the development mode.
   Opens the application in the browser

# Highlights
- formElements.js contains array of objects with input element details. 
- input elements are created dynamically based on number of objects in the array. 
- the object can have any default value which gets populated in the input text
- based on type text or textarea,  the corresponding element is loaded. 
- if the input name is phone, text takes only numeric values
- all the children elements are rendered to the right of the parent 
- it can have any number of children or parent elements which gets rendered dynamically in jsx
- all the input elements are controlled inputs the values of which are maintained in a state
- on submit, the state values are loggen in the console.   