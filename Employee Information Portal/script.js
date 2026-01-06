let employeesdata=[];
fetch("employees.json")
  .then(res => res.json())
  .then(data => {
    employeesdata =data.employees;
    load();
  });
function load() {
  const table=document.getElementById("employeetable");
  table.innerHTML="";
  employeesdata.forEach(emp => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>
        <button onclick="viewdetails(${emp.id})">View Details</button>
      </td>
    `;
    table.appendChild(row);
  });
}
function viewdetails(id) {
  const emp=employeesdata.find(e =>e.id===id);
  document.getElementById("dId").textContent=emp.id;
  document.getElementById("dName").textContent=emp.name;
  document.getElementById("dDept").textContent=emp.department;
  document.getElementById("dDesig").textContent=emp.designation;
  document.getElementById("dSalary").textContent=emp.salary;
  document.getElementById("dEmail").textContent=emp.email;
  document.getElementById("dPhone").textContent=emp.phone;
  document.getElementById("details").classList.remove("hidden");
}
 
