function login() {
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("password").value;
    
    if (userid === "admin" && password === "admin") {
        window.open("./currency_converter.html","_top");
    } else {
        alert("Error: Incorrect User ID or Password");
    }
}