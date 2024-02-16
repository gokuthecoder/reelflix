# chai aur backend series

This video series on backend with javascript

-[Model link](google.com)

## Temp

usuallay this folder use to temproraly upload file then upload this file to 3rd party like aws , cloudnary

# .gitkeep

git not store empty folder so we keep here a .gitkeep file

# gitignore

This is use for , not push sensitive file and other unusual folder like node_modules , node_modules generate by hosting server , so we try to never push on github

 -[Gitignore generator](https://mrkandreev.name/snippets/gitignore-generator/)

# .env 

All sensitive data store here.

# .env.sample

In .env file all sensitive data store so we not need to push on github so we create an sample user see how to use .env file and how t that data store .

# src directory

I store my entry point(index.js), constant file and app.js

# package.json

In this file we add a "type": "module"

# nodemon package 

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

# package.json

Go to in scripts and add

```
"dev":"nodemon src/index.js"
```

