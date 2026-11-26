# MT1 LAB EXAMINATION
# Employee Task Management Web Application

**Subject:** Full Stack Development – Node.js Lab Examination  
**Technology:** Node.js, HTTP Module, FS Module, Express.js  
**Database:** Not Required (Use JavaScript Array)

## 1. Problem Statement

Develop an Employee Task Management Web Application using Node.js and Express.js.

The application must demonstrate the working of the Node.js HTTP module, routing, handling different HTTP methods, serving static files using the FS module and implementing REST APIs using the Express.js framework.

You are required to implement the application in separate modules as described below.

## 2. Project Setup

Create a project directory named:

`MT1-LABEXAM`

Initialize the Node.js project using ES Modules and install Express.js using npm.

**GitHub Instructions:**
- Create a GitHub repository named `MT1-LABEXAM`.
- Push the initial project setup with an initial commit.
- Update the repository after completing each module.
- Use meaningful commit messages.

## 3. Create Project Structure

```text
EmployeeTaskManagement/
│
├── package.json
├── httpServer.js
├── expressApp.js
├── public/
│   └── index.html
└── screenshots/
```
### Screenshots folder must contains output of each task
## 4. Implementation Requirements

### Part A: HTTP Module and Server Creation

Implement the following functionalities in `httpServer.js`.

**A1. Create an HTTP Server**
- Import the built-in `http` module.
- Create an HTTP server using `http.createServer()`.
- Configure the server to listen on port `3000`.
- Display an appropriate message when the server starts.

**A2. Implement Routing**

| Route | Expected Response |
|---|---|
| `/` | Welcome message in HTML format |
| `/tasks` | List of employee tasks in JSON format |
| `/about` | Employee task management application information |
| `/home` | Serve HTML page using the FS module |

**A3. Handle HTTP Methods**

**GET /tasks**
- Retrieve and display all employee tasks.
- Return the response in JSON format.

**POST /add-task**
- Accept task details in JSON format.
- Required fields: `id`, `taskName`, `assignedTo` and `status`.
- Add the new task record to an array.
- Return an appropriate success message.

**A4. Static File Serving Using FS Module**
- Import the built-in `fs` module.
- Read `index.html` from the public directory.
- Serve the HTML file when the user accesses `/home`.
- Set the appropriate Content-Type header.
- Handle file-reading errors appropriately.

**A5. Error Handling**
- Return HTTP status code 404 for invalid routes.
- Set appropriate Content-Type headers.
- Validate required task details.
- Handle invalid requests appropriately.

### Part B: Employee Task Management REST API Using Express.js

Implement the Express.js application in `expressApp.js`.

**B1. Configure Express.js**
- Import Express.js.
- Create an Express application.
- Configure JSON parsing middleware using `express.json()`.
- Initialize an array containing at least three sample employee task records.
- Configure the application to listen on port `4000`.

**B2. Implement CRUD Operations**

| HTTP Method | Endpoint | Functionality |
|---|---|---|
| GET | `/tasks` | Retrieve all employee tasks |
| GET | `/tasks/:id` | Retrieve a task by ID |
| POST | `/tasks` | Add a new task |
| PUT | `/tasks/:id` | Update task details |
| DELETE | `/tasks/:id` | Delete a task |

**B3. Employee Task Object Structure**

Each task record should contain:

```json
{
  "id": 1,
  "taskName": "Develop Login Page",
  "assignedTo": "Rahul Sharma",
  "status": "Pending",
  "priority": "High"
}
```

Initialize at least three sample employee tasks.

**B4. Additional Requirements**
- Use route parameters to identify individual tasks.
- Accept task information through JSON request bodies.
- Return appropriate JSON responses.
- Return HTTP status code 201 when a task is successfully created.
- Return HTTP status code 404 when a task is not found.
- Handle invalid requests appropriately.
- Maintain updated task records in the JavaScript array.

## 5. Running the Application

**Step 1: Start the HTTP Server**

```bash
node httpServer.js
```

Expected output:

```text
HTTP Server running at http://localhost:3000
```

Test the following URLs:

```text
http://localhost:3000/
http://localhost:3000/tasks
http://localhost:3000/about
http://localhost:3000/home
```

**Step 2: Start the Express Application**

Open another terminal:

```bash
node expressApp.js
```

Expected output:

```text
Express Server running at http://localhost:4000
```

## 6. API Testing Using EchoAPI

Test the following endpoints:

| Method | URL | Expected Result |
|---|---|---|
| GET | `http://localhost:4000/tasks` | Display all tasks |
| GET | `http://localhost:4000/tasks/1` | Display task with ID 1 |
| POST | `http://localhost:4000/tasks` | Add a new task |
| PUT | `http://localhost:4000/tasks/1` | Update task details |
| DELETE | `http://localhost:4000/tasks/1` | Delete a task |

**Sample POST Request**

URL:

`http://localhost:4000/tasks`

Select Body → raw → JSON.

```json
{
  "id": 4,
  "taskName": "Develop REST API",
  "assignedTo": "Amit Kumar",
  "status": "Pending",
  "priority": "Medium"
}
```

Expected response:

```json
{
  "message": "Task added successfully",
  "task": {
    "id": 4,
    "taskName": "Develop REST API",
    "assignedTo": "Amit Kumar",
    "status": "Pending",
    "priority": "Medium"
  }
}
```

**Sample PUT Request**

URL:

`http://localhost:4000/tasks/1`

Select Body → raw → JSON.

```json
{
  "taskName": "Develop Login Page",
  "assignedTo": "Rahul Sharma",
  "status": "Completed",
  "priority": "High"
}
```

The application should update the existing task details and return an appropriate success response.

**Sample DELETE Request**

URL:

`http://localhost:4000/tasks/1`

The application should delete the task with ID 1 and return an appropriate success message.

## 7. General Guidelines

1. Use Node.js and JavaScript (ES6 syntax).
2. Use built-in HTTP and FS modules wherever specified.
3. Do not use Express.js for Part A.
4. Use Express.js for Part B only.
5. Do not use any database. Maintain task records in an array of objects.
6. Both applications must run independently on their specified ports.
7. Use meaningful variable names and proper indentation.
8. Ensure that all routes work correctly.
9. Handle invalid routes, missing tasks and file errors.
10. Do not copy another student's implementation.
11. Ensure that all APIs work correctly in EchoApi, take screenshot and put into specified folder .

## 8. Submission Requirements

Students must submit:

1. Complete project on GitHub with repository name `MT1-LABEXAM`.
2. `package.json` file.
3. Screenshots of the HTTP server running successfully.
4. Screenshots demonstrating static file serving using FS module.
5. EchoAPI screenshots demonstrating GET, POST, PUT and DELETE operations.
6. Properly organized project folder.
7. Screenshots of GitHub repository showing commit history.