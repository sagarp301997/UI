function Insert(){
	let id=prompt("Enter ID");
	let name=prompt("Enter Name");
	let designation=prompt("Enter Designation");
	let salary=prompt("Enter salary");
	
	var table=document.getElementById("employee_table");
	var row=table.insertRow(-1);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);

	cell1.innerHTML=id;
	cell2.innerHTML=name;
	cell3.innerHTML=designation;
	cell4.innerHTML=salary;

	alert("INSERTED SUCCESFULLY");
}

