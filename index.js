const express = require("express")
const fs = require("fs")

const app = express()
const PORT = 9090

app.get("/employees", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Unable to read employee data"
      })
    }

    const employees = JSON.parse(data)

    res.status(200).json({
      success: true,
      message: "Employees fetched successfully",
      count: employees.length,
      data: employees
    })
  })
})

app.get("/employees/:id", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Unable to read employee data"
      })
    }

    const employees = JSON.parse(data)
    const id = Number(req.params.id)

    const employee = employees.find(employee => employee.id === id)

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      })
    }

    res.status(200).json({
      success: true,
      data: employee
    })
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`)
})