Here’s your README.md in code format:

# Full Server with Express and ES6

This project demonstrates a fully organized HTTP server using **Express.js** and **ES6** features like `import` and `export`, facilitated by **Babel**. The server handles routing for retrieving students' data from a CSV database and includes two controllers: `AppController` and `StudentsController`.

## Project Structure

The server is organized into the following structure:

full_server/ ├── controllers/ │   ├── AppController.js │   └── StudentsController.js ├── routes/ │   └── index.js ├── utils.js ├── server.js └── database.csv

- **controllers/**: Contains the logic for handling HTTP requests.
- **routes/**: Maps routes to controller actions.
- **utils.js**: Includes utility functions like `readDatabase`, which reads student data from a CSV file.
- **server.js**: Entry point of the application, starting the Express server.
- **database.csv**: A sample CSV file containing student data.

## Requirements

To run this project, ensure you have the following installed:

- **Node.js** (v14.x or later)
- **npm** (v6.x or later)
- **Babel** (to use ES6+ features)
- **Nodemon** (for development)

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/alx-backend-javascript.git
   cd alx-backend-javascript/0x05-Node_JS_basic/full_server

2. Install dependencies:

Run the following command to install the necessary Node.js dependencies:

npm install


3. Ensure babel is set up:

You should have a .babelrc file in the root of your project with the following content:

{
  "presets": ["@babel/preset-env"]
}


4. Prepare the CSV database:

Place a CSV file named database.csv in the full_server directory. The file should have the following structure:

firstname,lastname,age,field
Johann,Smith,25,CS
Arielle,Johnson,22,CS
Jonathan,Doe,23,CS
Emmanuel,Evans,21,CS
Guillaume,Brown,24,CS
Katie,White,26,CS
Guillaume,Martin,23,SWE
Joseph,Davis,21,SWE
Paul,Garcia,22,SWE
Tommy,Thompson,25,SWE



Features

AppController: Contains the method to handle the root route (/), returning a welcome message.

Route: /

Response: "Hello Holberton School!"


StudentsController: Handles retrieving student data from the CSV file.

Route: /students

Response:

This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy

Route: /students/:major (Only allows CS or SWE as valid majors)

Response (for /students/SWE):

List: Guillaume, Joseph, Paul, Tommy

Error Response (if major is not CS or SWE):

Major parameter must be CS or SWE



Usage

To run the server:

1. In terminal 1, start the server:

npm run dev


2. Use curl in terminal 2 to test the routes:

Homepage:

curl localhost:1245
# Output: "Hello Holberton School!"

List all students:

curl localhost:1245/students
# Output:
# This is the list of our students
# Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
# Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy

List students by major:

curl localhost:1245/students/SWE
# Output: List: Guillaume, Joseph, Paul, Tommy



3. Major validation:

If an invalid major is provided:

curl localhost:1245/students/French
# Output: Major parameter must be CS or SWE



Development

To develop using babel-node, run the following:

nodemon --exec babel-node --presets @babel/preset-env ./full_server/server.js ./database.csv

This will automatically restart the server when code changes are detected.


---
