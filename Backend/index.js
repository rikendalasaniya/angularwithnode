const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/employeeDB').then(() => {
    console.log("connected")
});


// Define Employee Schema
const employeeSchema = new mongoose.Schema({
    EmpName: String,
    EmpImage: String,
    EmpCity: String,
    Empexperience: String,
    EmpJoiningDate: String,
    EmpDesc: String,
    id: String
});

const Employee = mongoose.model('Employee', employeeSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Employee Management System');
});

// Get all employees
app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Get employee by ID
app.get('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        // const employee =await Employee.findOne({id:req.params.id})
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).send('Employee not found');
        }
    } catch (err) {
        res.status(500).send(err.message);

    }
});

// Create a new employee
app.post('/employees', async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Update an existing employee
app.put('/employees/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedEmployee) {
            res.json(updatedEmployee);
        } else {
            res.status(404).send('Employee not found');
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Delete an employee
app.delete('/employees/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (deletedEmployee) {
            res.send('Employee deleted successfully');
        } else {
            res.status(404).send('Employee not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
