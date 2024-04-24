// fill in javascript code here

const employeeName = document.getElementById(`name`);
const employeeID = document.getElementById("employeeID");
const employeeDepartment = document.getElementById(`department`);
const employeeExp = document.getElementById(`exp`);
const employeeEmail = document.getElementById(`email`);
const employeeNum = document.getElementById(`mbl`);
const form = document.querySelector(`form`);
const tbody = document.getElementById('tbody');

let arr = []

function getRole(exp) {
    if (exp > 5) {
        return "senior"
    }
    else if (exp >= 2 && exp <= 5) {
        return "fresher"

    }
    else {
        return "junior"
    }
}


function showDetails() {
    tbody.innerHTML = "";

    arr?.forEach((value, i) => {
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerText = value.employeeName


        let td2 = document.createElement("td")
        td2.innerText = value.employeeID


        let td3 = document.createElement("td")
        td3.innerText = value.employeeDepartment


        let td4 = document.createElement("td")
        td4.innerText = value.employeeExp


        let td5 = document.createElement("td")
        td5.innerText = value.employeeEmail


        let td6 = document.createElement("td")
        td6.innerText = value.employeeNum


        let td7 = document.createElement("td")
        td7.innerText = getRole(value.employeeExp)

        let td8 = document.createElement("td")

        let btn = document.createElement("button")
        btn.innerText = "delete"

        btn.addEventListener("click", () => {
            removeDetails(tr)
            arr.splice(i,1)
            showDetails()
        })
        td8.append(btn)



        tr.append(td1, td2, td3, td4, td5, td6, td7, td8)

        tbody.append(tr)
    });



}

function removeDetails(tr) {
    tr.remove()
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    if (
        employeeName.value == "" ||
        employeeID.value == "" ||
        employeeDepartment.value == "" ||
        employeeExp.value == "" ||
        employeeEmail.value == "" ||
        employeeNum.value == ""

    ) {
        alert("plzz fill all fields")
    }


    arr.push({
        employeeName: employeeName.value,
        employeeID: employeeID.value,
        employeeDepartment: employeeDepartment.value,
        employeeExp: employeeExp.value,
        employeeEmail: employeeEmail.value,
        employeeNum: employeeNum.value

    })

    // console.log(arr)
    showDetails()


})
