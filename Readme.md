# GOKUTHECODER PRODUCTION BUILD BACKEND

This video series on backend with javascript

-[Model link](https://www.google.com)

## temp directory

usuallay this folder use to temproraly upload file then upload this file to 3rd party like aws , cloudnary

## .gitkeep

git not store empty folder so we keep here generalluy .gitkeep file keep on that folder which have no any file inside

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

## Connect DataBase

In database connection we need some thing URI String so we put this in .env

- we remove last<mark>&nbsp;/&nbsp;</mark> ,from my mongodb connection String .
- we need a name of my database so we set database name in <mark>Constant.js</mark> and export database name variable. if you want then you put database name in .env , no any issue becuse this is not any sensitive data .
  
## Two major approach of DataBase connection
- Put all db code in index.js (entry point), which is direct execute
- create a db directory inside this write fucntion and import it in index.js and execute . 

second approach is good because of this our code neat and clean

## 1st approach to connect with database

<mark>IN DATABASE CONNECTION, KEEP ONE THING IN MIND
</mark>

- <mark>when you try communicate with database then you faced problem , so always used try and catch or promises
- </mark>
 
* <mark>Database is always in another continent, so it take time so use async await
</mark>

### Install dotenv and mongoose package

```
npm i dotenv mongoose
```
### index.js root file

```javascript
import mongoose from "mongoose";
import { DB_NAME } from "./constant";
import express from "express"

const app = express()

; (async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERR", error);
        throw error
       })

       app.listen(process.env.PORT, (err)=>{
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    } catch(error){
        console.log("ERROR", error)
    }
})()
```
* <b>Note</b>: Basically import mongoose and DB_NAME, 
* After that we create an iife function `;()()` (Immediately Invoked Function Expression) . Generally all pro coder use `;` use just before the iife function , to abstain global variable and function which has not end statement with semicolon.
`The use of iife for use for immediately invoked , as well as abstain from global pollution. we use iife .`

- we use connect method to connect database in `try` and `catch`
   
*  we write `app.on` which basically use for if after connection error in express then it show error
*  we execute iife function with `()`
  

## 2nd approach to connect with database(professional way)

<mark>This is major approach for connect to database as a professional developer</mark>

`src/db/index.js`
```javaScript
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !!DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error", error)
        process.exit(1)
    }
}

export default connectDB
```
<b>In above code we create an function and export it, but two thing we done
 - I store database connection in a variable `connectionInstance` and this variable return object and this object many things are available. But my wish is is on which host my database connected, because most of pro developer in development and in production use different database so, they use it .
</b>

`src/index.js`
```javaScript
import connectDB from "./db/index.js";

connectDB()
```
* <mark>Now If i Run This Project Then it Will Give Error . Because in `db/index.js` enviroment variable not be accessable, the reason is we not import our `dotenv`</mark>






