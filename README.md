# funnelbeam

I have installed nodemon which restarts the application automatically whenever you save a file. 
So, in order to run application, write "npm run devstart" in terminal. <br>
The application opens at localhost:3000 <br>
Use postman to test the APIs.

//Employee <br>
url:http://localhost:3000/employee <br>
This url gets all the employees <br>
This same url allows you to insert an employee by giving all parameters in body<br>

url:http://localhost:3000/employee/:email
This url fetches and edits employee with the email address provided

//Client
url:http://localhost:3000/client
This url gets all the clients 
This same url allows you to insert a client by giving all parameters in body

url:http://localhost:3000/client/:name
This url fetches and edits client with the name address provided
I have set name as unique so that we can find a client using name

//Project
url:http://localhost:3000/project
This url gets all the projects
This url is used to insert a project if project and client name are given in body
This url can also be used to assign a project to an employee provided that name of project, client and employee are provided in body

url:http://localhost:3000/project/:name
This url gets all the project with name specified in parameter
This same url is used to edit a project


