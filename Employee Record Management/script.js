let employees = [];
fetch("employees.json")
  .then(res => res.json())
  .then(data => {
    employees = data.employees;
    displayEmployees();
  });
function displayEmployees() {
  const table = document.getElementById("employeetable");
  table.innerHTML = "";
  employees.forEach(emp => {
    table.innerHTML += `
      <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>
          <button onclick="viewDetails(${emp.id})">View</button>
          <button onclick="deleteEmployee(${emp.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}
function viewDetails(id) {
  id = parseInt(id);
  const emp = employees.find(e => e.id === id);
  if (!emp) {
    alert("Employee not found!");
    return;
  }
  document.getElementById("dId").textContent = emp.id;
  document.getElementById("dName").textContent = emp.name;
  document.getElementById("dDept").textContent = emp.department;
  document.getElementById("dDesig").textContent = emp.designation;
  document.getElementById("dSalary").textContent = emp.salary;
  document.getElementById("dEmail").textContent = emp.email;
  document.getElementById("dPhone").textContent = emp.phone;
 
  document.getElementById("details").classList.remove("hidden");
}
document.getElementById("addForm").addEventListener("submit", function (e) {
  e.preventDefault();
  confirm("Are you sure you want to add this employee?")
  const newEmployee = {
    id: parseInt(document.getElementById("id").value),
    name: document.getElementById("name").value,
    department: document.getElementById("department").value,
    designation: document.getElementById("designation").value,
    salary: document.getElementById("salary").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value
  };
 if (employees.some(emp => emp.id === newEmployee.id)) {
    alert("ID already exists,Please enter a unique ID");
    return;
  }
  employees.push(newEmployee);
  displayEmployees();
  e.target.reset();
});
 
function deleteEmployee(id) {
  if (confirm("Are you sure you want to delete this employee?")) {
    employees = employees.filter(emp => emp.id !== id);
    displayEmployees();
    document.getElementById("details").classList.add("hidden");
  }
}
function deleteById() {
  const id = parseInt(document.getElementById("deleteId").value);
 
  if (!id) {
    alert("Please enter a valid employee ID");
    return;
  }
 
  const index = employees.findIndex(emp => emp.id === id);
 
  if (index === -1) {
    alert("Employee ID not found");
    return;
  }
 
  if (confirm("Are you sure you want to delete this employee detail?")) {
    employees.splice(index, 1);
    displayEmployees();
    document.getElementById("deleteId").value = "";
    document.getElementById("detailsBox").classList.add("hidden");
  }
}
