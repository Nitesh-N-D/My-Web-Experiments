let students = [];
function add() {
  let name=document.getElementById("name").value;
  let rollno=document.getElementById("rollno").value;
  let dept=document.getElementById("dept").value;
  let genderip= document.querySelector('input[name="gender"]:checked');
  let marks = document.getElementById("marks").value;
  if (!name || !rollno || !dept || !genderip || !marks) {
    alert("Please fill in all fields and select gender");
    return;
  }
  let obj = {
    name: name,
    rollno: rollno,
    department: dept,
    gender: genderip.value,
    marks: marks
  };
  students.push(obj);
  alert("Student added successfully");
  document.querySelector("form").reset();
}
function display() {
  if (students.length === 0) {
    document.getElementById("output").innerHTML = "<p>No students added yet.</p>";
    return;
  }
let output="<h3>Student Details</h3><table border='1'><tr><th>Name</th><th>Roll No</th><th>Department</th><th>Gender</th><th>Marks</th><th>Action</th></tr>";
for (let s of students) {
    output += `<tr>
      <td>${s.name}</td>
      <td>${s.rollno}</td>
      <td>${s.department}</td>
      <td>${s.gender}</td>
      <td>${s.marks}</td>
      <td><button onclick="remove('${s.rollno}')">Remove</button></td>
    </tr>`;
  }
  output += "</table>";
  document.getElementById("output").innerHTML = output;
}
function remove(rollno) {  if (!rollno) {
    rollno = document.getElementById("rollno").value;
    if (!rollno) {
      alert("Please enter Roll No to remove");
      return;
    }
  }
  students = students.filter(s => s.rollno !== rollno);
  alert("Student removed (if Roll No existed).");
  display();
}
function update()
{
let rollno=document.getElementById("rollno").value;
let student=students.find(s=>s.rollno===rollno);
if(!student)
{
alert("No student found with this Roll No");
return;
}
student.name=document.getElementById("name").value;
student.department=document.getElementById("dept").value;
student.marks=document.getElementById("marks").value;
let genderip=document.querySelector('input[name="gender"]:checked');
student.gender=genderip?genderip.value:student.gender;
alert("Student updated successfully");
document.querySelector("form").reset();
display();
}

