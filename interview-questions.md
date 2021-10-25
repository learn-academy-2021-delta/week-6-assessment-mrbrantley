# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: I will need to do research to find this answer. I believe it has something to do with commands in the ruby console.

  Researched answer: Adding the belongs_to foreign key to the Student model by creating a migration to update the database. 



2. Which RESTful routes must always be passed params? Why?

  Your answer: I will need to do research to find this answer. I believe it has something to do with controller methods. 

  Researched answer: show, edit, update, and destroy RESTful routes will always be passed params because they are used on specific singular data types. Other RESTful routes are applied to the entire database/table or are used to create a blank form. 



3. Name three rails generator commands. What is created by each?

  Your answer: "g" or "generate". I will need to do research to find this answer. I believe it has something to do with creating a new table. 

  Researched answer: $rails generate model, creates the model by giving it a names for the table, each column, and the data types of each column as arguments. $rails generate controller, creates all of the files associated with a specific controller. $rails genrate resource, sets up both the model that a dev needs to start using that resource as an ActiveRecord class and creates a controller so a developer can begin coding up some controller actions. 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students          
index controller method, gets all of the data
method="POST"   /students       
create controller method, adds new items
method="GET"    /students/new
new controller method, empty form user can see to create new items
method="GET"    /students/2  
show controller method, one item of the data
method="GET"    /students/2/edit    
edit controller method, empty form user can see to update one aspect/column of the item
method="PATCH"  /students/2      
update controller method, modifies items
method="DELETE" /students/2  
destroy controller method, removes items    



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see all the to-do task titles listed on the home page of the application.
2. As a user, I can click on the title of a to-do task and be routed to a page where I see the title and content of the to-do task post I selected.
3. As a user, I can navigate from the show page back to the home page.
4. As a user, I see a form where I can create a new to-do task.
5. As a user, I can click a button that will take me from the home page to a page where I can create a to-do task.
6. As a user, I can navigate from the form back to the home page.
7. As a user, I can click a button that will submit my to-do task to the database.
8. As a user, I when I submit my post, I am redirected to the home page.
9. As a user, I can delete my to-do task.
10. As a user, I can update my to-do task as 'complete'.