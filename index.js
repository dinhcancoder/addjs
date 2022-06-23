function checkform() {
    let form = document.getElementById("form");
    let inputElement = form.querySelectorAll(".inputElement");

    for(let i = 0; i < inputElement.length; i++) {
        if(inputElement[i].value === "") {
            inputElement[i].parentElement.querySelector(".error").innerText = `${inputElement[i].id} không được để trống !`;
        }else {
            inputElement[i].parentElement.querySelector(".error").innerText = "";
        }
    }
}

function add() {
    checkform();
    let form = document.getElementById("form");
    let errorElement = form.querySelectorAll(".error");

    let arrError = [];

    for(let i = 0; i < errorElement.length; i++) {
        arrError.push(errorElement[i].innerText);
    }

    let checkError = arrError.every(value => value === "");

    if(checkError) {
        let tbody = document.getElementById("tbody");
        let msv = document.querySelector(".masinhvien").value;
        let name = document.querySelector(".tensinhvien").value;
        let sdt = document.querySelector(".sodienthoai").value;
        let email = document.querySelector(".email").value;
        let str = "";

        let arrStudent = localStorage.getItem("student") ? JSON.parse(localStorage.getItem("student")) : [];

        arrStudent.push({
            msv: msv,
            name: name,
            sdt: sdt,
            email: email
        });

        localStorage.setItem("student", JSON.stringify(arrStudent));
        
        for(let i = 0; i < arrStudent.length; i++) {
            str += `
                <tr>
                    <td>${arrStudent[i].msv}</td>
                    <td>${arrStudent[i].name}</td>
                    <td>${arrStudent[i].sdt}</td>
                    <td>${arrStudent[i].email}</td>
                </tr>
            `
        }

        tbody.innerHTML = str;
        clear();
    }
}

function clear() {
    let inputElement = document.querySelectorAll(".inputElement");

    for(let i = 0; i < inputElement.length; i++) {
        inputElement[i].value = ""
    }
}