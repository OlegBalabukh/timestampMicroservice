# **Timestamp Microservice**

This is my first FCC Back-End Project and a simple full stack JavaScript app that accepts a  parameter from user (unix timestamp or a natural language date) and returns both the Unix timestamp and the natural language form of that date.

## I. Prerequisites (Environment Setup)
1. **Install**: atom editor or other, node.js (npm). **Check**: ```node -v, npm -v```

2. Create **node_projects** folder   

3. Create boilerplate code with express-generator: ```npm -g install express-generator```

4. Go into folder *node_projects* from command line

5. Create **new project** with command ```express timestampMicroservice```

6. Go into folder (project) *timestampMicroservice* from command line

7. Open project with atom editor: ```atom .```

8. Create **.gitignore** file with "node_modules/" inside to avoid committing dependencies

9. Install dependencies: ```npm install``` (creates **node_modules** folder with dependencies)

10. Make first commit to a project with commands:
```
git init
git add .
git commit -m "initial commit"
```
11. Run local server from project folder with one of two commads:
```
npm start
node ./bin/www
```
If the result you see is  ```node ./bin/www``` - the local server is running

12. Open app (boilerplate code so far) in browser: ```localhost:3000```
+ Project's boilerplate code:
    + **bin** folder - where the server is created.
    + **public** folder - includes static data for project (images, style sheets, js files etc.).
    + **routs** folder - to handle all routs (what happens when we go to home page, other pages).
    + **views** folder - all html that the user see.
    + **app.js** file - main application file.
    + **package.json** file - info about current project + vital dependencies to be installed.
    + **package-lock.json** file - info about installed dependencies.
+ Other stuff (created by dev):
    + **.git** folder - when you create a git repo, using git init, git creates this folder. It contains all the informations needed for git to work.
    + **node_modules** folder - includes all installed dependencies.
    + **README.md** file - project description + some other important info.
    + **gitignore** file - includes files and folders that have to be omitted during commit.
    + **Procfile** - in this case - additional file to ensure project deployment on *heroku*.

13. Delete unnecessary packages from boilerplate (initial) version of *package.json*.
Type from project folder in terminal:
```
npm uninstall --save body-parser cookie-parser serve-favicon
```
Do not forget to remove uninstalled packages from **app.js** to avoid an error starting server next time. Additional packages can be installed in the same way:
```
npm install --save body-parser cookie-parser serve-favicon
```

14. Remove unnecessary code from other files that uses uninstalled packages or just won't be in use. This operation won't cause any errors.  

15. Make second commit after editing:
```
git add .
git commit -m "remove unnecessary modules"
```

You should always restart the server after editing .js files. For other files like *.html* (*.jade*), *.css* etc simple *"Ctrl+S"* will be enough. Now the working environment is ready and boilerplate code has been edited for the project's needs, you can finally:) start coding.

## II. Running the tests
Pass a string as a parameter which is one of two form of date : unix timestamp (example:
1334188867) or a natural language date (example: March 17, 2018). In every case the app should return both the Unix timestamp and the natural language form of that date.

1. As a parameter, 'March 17, 2018' returns '1521244800' and 'March 17, 2018'.
2. As a parameter, '1521244800' also returns '1521244800' and 'March 17, 2018'
3. Any other input returns value of 'null' for unix timestamp and natural language date.

**Note:** natural language date *always* returns *one* unix timestamp - at *00:00:00 am*, but *86400* unix timestamps return *one* natural language date. In other words, each date has 86400 unix timestamps because unix time measured in seconds and each date has 24 hours or 86400 seconds.
**For example:**
'October 16, 2016' returns '1476576000' (00:00:00 am), but 86400 unix timestamps from '1476576000' (00:00:00 am) to '1476662399' (23:59:59 pm) return the  same date - 'October 16, 2016'.

## III. Deployment
Deploying the app on heroku:
1. Create an account at **heroku.com**
2. Download and install **Heroku Toolbelt** for your operational system.
3. In *package.json* file add new field 'engines':
```
"engines": {
"node": "version",
"npm": "version"
           }
```
with current versions of *node* and *npm* installed in your system. Check with ``` node -v, npm -v ```
4. *Heroku* doesn't know what command is needed to run the app, so create a *Procfile* and run the command there (```web: node ./bin/www```).
5. Add commit:
```
git add .
git commit -m "configure for deployment"
```
6. Deployment (commands in terminal):
```
heroku login
heroku create fcc-backend-1-timestamp
```
where *fcc-backend-1-timestamp* is a name of the project on heroku.
You'll get the url with project like this: *https://fcc-backend-1-timestamp.herokuapp.com*
7. Download to *Github*: instead of ```git push origin master``` (as usual), use ```git push heroku master``` or use *git-plus* package if you work in *atom editor*; shortcut keys: ```Ctrl + Shift + AA```

## IV. Authors
   ME

## V. Acknowledgments
Stephen Mayeux's video lessons helped me with my first backend project A LOT: (setup environment, deployment on web). Here is his Youtube channel:
*https://www.youtube.com/channel/UCXqwYHJKzmLO-EsBQDKfKZA*
