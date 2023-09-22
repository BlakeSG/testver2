let myButton = document.getElementById("submitButton");
let myHeading = document.querySelector("h1");
let nameInput = document.getElementById("nameInput");

function setUserName() {
    const myName = nameInput.value.trim(); 
    if (!myName) {
        alert("Please enter a valid name."); 
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to my Portfolio, ${myName}`;
    }
}


myButton.onclick = () => {
    setUserName();
    setTimeout (redirectToPage, 2000);
};

function redirectToPage() {
    
    window.location.href = "/BlakeG's%20Portfolio/Home%20page/Home.html";
}

