# Info File

1. Initialize project and structure
 - npm init --yes
 - making folder src and inside making file index.js
2. Setup dev environment
 - npm i -D nodemon
3. Install and setup express
 - npm i express
 * B, Add static middleware
 * C, Add body parser
 * D, Add routes.js(app.use(express.urlencoded({extended: false})))
4. Add static resources 
 - create public folder put inside css, images
5. Add views folder with ready htmls
 - create views folder put inside htmls files
6. Add express-handlebars view engine
 - npm i express-handlebars
 * Install express
 * A, Add to express
 * B, Config extension
 * C, Config views folder (only if src is used) app.set('views', 'src/views');
 * D, Create folder layout with file main for main parts of html 
 * Add partials folder (creating in folder views partials folder)
 - E, Render home page (in router and making home.html to home.hbs)
 * F, Fix static paths (to fix it can rename public folder to static or remove  
    static in main.hbs from: src="/static/images/ and from: /static/css/styles.css)
  * Rework link to <!-- Link to Home Page --> simply like this <!--('<a href="/">' -->   
    and also this <!-- <a class="home" href="/">") -->
7. A, Add controllers folder with home controller(create Controllers folder in src with file home Controller) 
 - B, Moving render home from routers file to homeController file
8. Add database 
 * Install mongoose (npm i mongoose)
 * A, Connect data base (IN INDEX)
9. Authentication
 * A, Add user controller (in folder controller file userController)
 * B, Add controllers to file routes
 * C, Render login page (in file userController)
 - Make file "users" in folder views and move login.html
 - Edit login page by removing all accept 'main' and rename to hbs
 * fix header navigation to login and register simply by making link for Login    
   looks like this (href="/users/login" and Register "href="/users/register" and Logout "href="/users/logout"")
 * D, Render register page in file user controller
 - Also we need to move register.html to folder user, edit register by delete all accept main and rename to hbs
10. A, Add user model (create folder models in src with file User.js)
 * B, Add unique index for username
 * C, Validate repeat (password IN User.js)
11. Add user manager (create folder managers in src with file userManager.js)
 * A, Add login and register methods (empty)
 * B, Require in user controller (in userController.js)
12. A, Modify login and register forms (in login.hbs and register.hbs) 
13. A, Add login and register post actions (in userController.js)
14. A, Implement user manager login and register in (userController.js)
  * Add register method
  * Add login method
  * B, Validate if user already exists(in User.js and userManager.js)
15. Hash password
  * Install bcrypt(npm i bcrypt)
  * A, Hash password
16. Login
  * A, Find user by username (in userManager.js)
  * B, Validate password with hash (in userManager.js)
17. Generate jwt token
  * install jsonwebtoken(npm i jsonwebtoken)
  * A, promisify jsonwebtoken (optional) (making in src folder lib with file jwt.js)
  * B, Generate token in manager.login(in userManager.js after in userController.js)
18. Return token in cookie
  * Install cookie parser(npm i cookie-parser)
  * A, Config cookie parser(in index.js)
  * B, Set cookie with token(in userController.js)
19. A, Logout (in userController.js)
20. A, Authentication middleware(in src make new folder middlewares and in file authMiddleware.js)
  * Create middleware
  * B, Use middleware (in index.js)
  * C, implement auth middleware(in authMiddleware.js)
  - D, create folder config in src with file config.js and move SECRET and export it (OPTIONAL)
  * E, Attach decoded token to request
  * F, handle invalid token (authMiddleware and config.js, userController.js)
21. A, Authorization middleware (in authMiddleware)
22. A, Dynamic navigation(in main.hbs for login users, for guests and for logout)
  * B, Add conditional in main layout(in authMiddleware)
  * Add res locals
23. Error handling
  * A, Add 404 page( rename 404.html to hbs and delete all accept main, then make it in homeController.js then in routes.js)
  - Redirect missing route to 404
  * B, Add global error handling (OPTIONAL) (create new file in middlewares folder, errorHandlerMiddleware.js)
  * C, add error message extractor (creating folder utils in src with file errorHelpers.js)
24. Show ERROR notifications (in main.hbs and looking for error Container)
  * A, Add error container to main layout
  * B, Show error container conditionaly (in main.hbs)
  * C, Pass error to render (in errorHandlerMiddleware.js)
  * D, Add local error handler (in usersController.js) 
25. A, Automatically login after register(in userManager.js, move const payload to new function with name: generateToken, after in userController.js)  
26. A, Keep username and email if forgot to write password or password missmatch while register 
_______________________________________
27. A, Photo model(in modelse new file Photo.js)
28. Create Photos(create folder photo in views tranfer create.html to the folder change it to hbs and remove all accept main)
  * A, Create controller(in folder controllers create file photoController.js in main hbs 
  * In main hbs need to fix catalog href and add photo href)
  * B, Add the new controller in routes.js and create in manager photoManager.js
29. A, Create Catalog (move catalog.html to photos in views then rename to index.hbs for easier use and delete all accept main, remove /static from file then in photoController )
  - Remove hardcord data from index.hbs accept one card then in folder partials create file pet.hbs and move the last card there and then change it from (start pet photo), then in index.hbs between (Start Pet Photos Post Section  AND If there are no photo yet!) MUST USE EACH
  - B, THEN we must put photos collection in photoController.js
30. Owner of the photo (in file photoManager.js must use .populate('owner) and then in petPhoto.hbs for name must use {{owner.username}} and {{location}})
  * B, Details photo (in petPhotos.hbs)
31. A, Details Page(move details.html in folder photos rename it to .hbs and remove all accept main ) THEN IN photoController.js and after in photoManager.js
  - B, Remove all /static from details.hbs and reword hardcore data
  - c, SHOW edit and delete buttons for owner (in photoController.js, then in details.hbs)
  - D, Add comments if you are not owner (in details.hbs) WITH {{#unless}}
32. A, Delete Pet Photo (in details)
33. A, Setup Edit Page (first send edit.html to folder photos then change it to hbs and delete all accept main)
when page is Edit need to have also value all it must look like (input type="text" name="name" placeholder="Name" value="{{photo.name}}") then in photoController.js, and edit button in details.hbs
34. A, Add comments (in Photo.js after in details.hbs "start add comments form" create method, after go in photoController to make router and then in photoManager)
  - B, Visualization of comments (in details.hbs find "comments-top" and from ('userDetails') and leave only one then take it and put it in folder partials in new file comment.hbs)
35. A, Profile Page (first rename profile.html to hbs after remove all accept main and remove /static, remove pet photo accept one) after setup path from main.hbs, we make the router in homeController.js AFTER put userData in profile.hbs after back in homeController.js




error handling must be put on every changing operations like EDIT PAGE for example also, CREATE, UPDATE
When Use template for other app need to change mongoose.connect name for database 
  CTRL + P (:23 SEND TO 23 ROW)
  CTRL + P SEARCHING BETWEEN FILES
  CTRL + P SEAERCHING (INDEX:5 IT WILL SEND ME TO FILE INDEX TO 5 ROW)
  CTRL + P AND @ (SEARCH BY SYMBOLS)