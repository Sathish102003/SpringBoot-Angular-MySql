` Task Manager `
----------------

Task Manager is a single page application to keep track of upcoming tasks, finished tasks and their respective priorities

An Overview
-----------------
The application allows the user to manage task and set their priorities in the range of 0-30.
Each start task will have parent task(optional), start date and end date.

The Features are,
1. Add/Edit/View/End Task
2. One task can be a parent of another
3. Search fields are available to filter the records

Technologies Used
------------------
1. Spring Boot WAR project with MySql DB for real time and H2 embedded for testing.
2. Node with angular 6 is used for front end
3. Docker Build Image and Deploy into Docker HUB

To run the project
---------------------

Frontend - Use 'ng serve' and the application will be available in 'http://localhost:4200' (with default port)
Backend - Run the spring boot application.
