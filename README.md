# Employee-Data-API

A beginner-friendly Node.js Express mini-project created to understand **reading employee data from a JSON file, creating GET APIs, route parameters, file system operations, error handling, and dynamically reading updated data without restarting the server.**

## Tasks

1. **Read All Employee Data**
2. **Read Employee Data using ID**
3. **Error Handling for Employee Data**
4. **Test Updated Data Without Restarting Server**

## Project Structure

```text
├── Screenshots
├── data.json
├── index.js
├── package.json
└── README.md
```

## Concepts Used

- Node.js
- Express.js
- JavaScript
- JSON
- Express Routing
- Route Parameters
- `req.params`
- Node.js File System
- `fs.readFile()`
- GET Request
- HTTP Status Codes
- Error Handling
- JSON Data Handling

## Tasks Performed

### Task 1 - Get All Employees

Created a GET API to fetch all employee information from `data.json`.

Route:

```text
GET /employees
```

The employee data is read from `data.json` using the Node.js `fs` module.

The API also returns the total number of employees.

Example response:

```json
{
  "success": true,
  "message": "Employees fetched successfully",
  "count": 5,
  "data": []
}
```

### Task 2 - Get Employee by ID

Created a GET API to fetch a specific employee using the employee ID.

Route:

```text
GET /employees/:id
```

The employee ID is extracted using `req.params`.

Example:

```text
/employees/2
```

The API returns the employee matching the provided ID.

Example response:

```json
{
  "success": true,
  "data": {
    "id": 2,
    "employeeName": "Neha Verma",
    "designation": "Backend Developer",
    "department": "IT",
    "salary": 50000
  }
}
```

### Task 3 - Error Handling

Added error handling for employees that cannot be found and errors while reading the JSON file.

#### Employee Not Found

If a valid but non-existing employee ID is provided:

```text
/employees/99
```

Response:

```json
{
  "success": false,
  "message": "Employee not found"
}
```

Status code:

```text
404 Not Found
```

#### File Reading Error

If `data.json` cannot be read:

```json
{
  "success": false,
  "message": "Unable to read employee data"
}
```

Status code:

```text
500 Internal Server Error
```

### Task 4 - Update Data Without Restarting Server

The API reads `data.json` every time a request is received.

The salary of employee ID `1` was changed from:

```text
45000
```

to:

```text
55000
```

The server was not restarted.

After sending the request again:

```text
GET /employees/1
```

the updated salary was returned successfully.

This demonstrates that the API reads the latest data from the JSON file on every request.

## Employee Data

The employee information is stored in:

```text
data.json
```

The file contains the following fields:

```text
id
employeeName
designation
department
salary
```

Example:

```json
[
  {
    "id": 1,
    "employeeName": "Ravi Sharma",
    "designation": "Software Developer",
    "department": "IT",
    "salary": 45000
  },
  {
    "id": 2,
    "employeeName": "Neha Verma",
    "designation": "Backend Developer",
    "department": "IT",
    "salary": 50000
  }
]
```

## How to Run

Navigate to the project folder:

```text
cd Employee-Data-API
```

Install the required dependency:

```text
npm install
```

Start the server:

```text
node index.js
```

The server will run on:

```text
http://localhost:9090
```

## Routes

| Task | Method | Route | Purpose |
|------|--------|-------|---------|
| Task 1 | GET | `/employees` | Get all employees |
| Task 2 | GET | `/employees/:id` | Get employee by ID |

## Expected Output

### Task 1 - Get All Employees

Request:

```text
GET http://localhost:9090/employees
```

Response:

```json
{
  "success": true,
  "message": "Employees fetched successfully",
  "count": 5,
  "data": []
}
```

### Task 2 - Get Employee by ID

Request:

```text
GET http://localhost:9090/employees/2
```

Response:

```json
{
  "success": true,
  "data": {
    "id": 2,
    "employeeName": "Neha Verma",
    "designation": "Backend Developer",
    "department": "IT",
    "salary": 50000
  }
}
```

### Employee Not Found

Request:

```text
GET http://localhost:9090/employees/99
```

Response:

```json
{
  "success": false,
  "message": "Employee not found"
}
```

### Updated Salary Without Restart

Request:

```text
GET http://localhost:9090/employees/1
```

The salary was changed in `data.json` from `45000` to `55000` without restarting the server.

The API returned the updated salary successfully.

## Author

**Sanika Kangane 👩🏻‍💻**
