<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap')
</style>
<style>
    h1 {
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
    }
</style>


# GOKUTHECODER PRODUCTION BUILD BACKEND

This video series on backend with javascript

-[Model link](https://www.google.com)

## temp directory

usuallay this folder use to temproraly upload file then upload this file to 3rd party like aws , cloudnary

## .gitkeep

git not store empty folder so we keep here a .gitkeep file

## gitignore

This is use for , not push sensitive file and other unusual folder like node_modules , node_modules generate by hosting server , so we try to never push on github

 -[Gitignore generator](https://mrkandreev.name/snippets/gitignore-generator/)

## .env 

All sensitive data store here.

## .env.sample

In .env file all sensitive data store so we not need to push on github so we create an sample user see how to use .env file and how t that data store .

## src directory

I store my entry point(index.js), constant file and app.js

## package.json

In this file we add a "type": "module"

## nodemon package 

When we changes in our project then always we need to start project again and again, but nodemon automate this thing, when some changes in our project this will restart our project.

```javascript
npm install -g nodemon   
```
 -g means this dependency will be installed globally to your system path.

This will make main dependency and this is use in production and development.

```javascript
npm install --save-dev nodemon

or

npm install -D nodemon
```

This is dev dependency and it is used for only in development and we are use in this on Production .

## package.json

Go to in scripts and add

```
"dev":"nodemon src/index.js"
```

## create controllers, db,middlewares, models, routes and utils directory

![alt text](image.png)

- controllers : here we write our major functionality
  
- db : database connection logic
  
- middleware : we add an middleware just befrore fullfield request api
  
- models 
  
- routes : here we define our API routes

- utils : a "utility" directory typically contains utility functions or modules that are used across different parts of the application. These utility functions are often small, reusable pieces of code that perform common tasks or provide helper functionalities.
  
  e.g when user upload profile , user upload video on youtube , in this synario these two thing is same which is upload.

## Prettier

![alt text](prettier.png)

This is dependency is used for generally in development so we use as dev dependency:

```
npm install -D prettier
```

- Consistency in Code Style
  -  Prettier enforces a consistent code style across your codebase, which can improve readability and maintainability. By using npm to manage Prettier, you ensure that all developers working on the project use the same code formatting rules.

- Ease of Collaboration: 
  - When multiple developers work on a project, having a consistent code style is crucial for collaboration. By using Prettier via npm, everyone working on the project can easily format their code to match the project's style guidelines.

you can ignore this if you want .

 ## uses

 - first create a file in root directory name is  <mark><b>.prettierc</mark> & <mark>.prettierignore</mark></b>

## .prettierc

```javaScript
{
"singleQuote":false, //everywhere use only doubleQuote, no singleQuote

"bracketSpacing": true, // after bracket space allowed or not, i choose yes

"tabwidth": 2,// i choose 2 tab for me this whole project

"trailingComma":"es5", //Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)

"semi":true, // we need semicolon
}
```

## use of .prettierignore

Generally this file used purpose is, in which file or folder we not want to apply Prettier feature
