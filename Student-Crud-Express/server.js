const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let students = [];
let idCounter = 1;

app.post("/students", (req, res) => {
  const student = {
    id: idCounter++,
    name: req.body.name,
    department: req.body.department,
    year: req.body.year
  };

  students.push(student);
  res.status(201).json(student);
});

app.get("/students", (req, res) => {
  res.json(students);
});
app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  if (req.body.name) student.name = req.body.name;
  if (req.body.department) student.department = req.body.department;
  if (req.body.year) student.year = req.body.year;

  res.json({
    message: "Student record updated successfully",
    student
  });
});
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);

  res.json({ message: "Student record deleted successfully" });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});