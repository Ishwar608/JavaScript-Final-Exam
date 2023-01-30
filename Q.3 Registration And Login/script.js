let frm = document.forms['frm'];
let myArray = [];


Login = (event) => {

    let myLoginData = {}

    clearErrors();
    for (let i = 0; i < frm.length; i++) {
        if (!frm.elements[i].checkValidity()) {
            seterror(i, frm.elements[i].validationMessage);

        }
    }
    event.preventDefault();

    for (const iterator of frm) {
        myLoginData[iterator.name] = iterator.value;
    }
    // console.log(myLoginData);

    fetch("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate", {
        method: 'POST',
        body: JSON.stringify(myLoginData),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(y => {
        if (y.status == 200 || y.status == 204) {
            console.log( "login successfully");
        }
        console.log(y);
        y.json()
    }).then(y => {
            console.log(y);
            localStorage.setItem("token", y.jwtToken)
        })
}

signUp = (event) => {

    let myLoginData = {}
    clearErrors();
    for (let i = 0; i < frm.length; i++) {
        if (!frm.elements[i].checkValidity()) {
            seterror(i, frm.elements[i].validationMessage);

        }
    }
    event.preventDefault();

    for (const iterator of frm) {
        myLoginData[iterator.name] = iterator.value;
    }
    // console.log(myLoginData);


    fetch("https://real-pear-fly-kilt.cyclic.app/accounts/register", {
        method: 'POST',
        body: JSON.stringify(myLoginData),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(y => {
        y.json()
    }).then(y => {
        console.log(y);
        document.querySelector("#msg").innerHTML = "login successfully"
    })

}







// ----------------------------- Display Data -----------------------

let myData = [];
let mykey = [];

display = (myJson) => {
    myData = myJson;

    document.getElementById('theadP').innerHTML = "";
    document.getElementById('tbodyP').innerHTML = "";
    for (const key in myData) {
        if (key != "jwtToken") {
            // console.log(iterator);
            document.getElementById('theadP').innerHTML += `<th>${key}</th>`
        }
    }

    for (const key in myData) {

        if (key != "jwtToken") {
            // console.log(key);
            document.getElementById('tbodyP').innerHTML += `<td>${myData[key]}</td>`
        }
    }

}


val = (event) => {
    clearErrors();
    for (let i = 0; i < frm.length; i++) {
        if (!frm.elements[i].checkValidity()) {
            seterror(i, frm.elements[i].validationMessage);

        }
    }
    event.preventDefault();
}

clearErrors = () => {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

seterror = (i, error) => {

    document.getElementsByClassName('formerror')[i].innerHTML = error;

}