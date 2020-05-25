const url = "http://localhost:3000/users"

// Add new user
const createUser =(newUser)=>{
    const userdata = JSON.stringify(newUser);
    fetch (url,{
        method: "POST", 
        body: userdata,
        headers:{
            "Accept" : "application/json",
            "Content-Type" : "application/json",
         } 
})
    .then((res)=> res.json())
    .then((data)=>{
    adduser(data);
})
.catch((error)=>{
    console.log(error);
})
}

//signup actions creating user data
const nameInput = document.getElementById("inputName");
const emailInput =document.getElementById("inputEmail");
const passwordInput =document.getElementById("inputPassword");
const roleInput = document.getElementById("inputRole");
const registerbtn = document.getElementById("register")
//function to return above values
const inputValue = (Element)=>{return Element.value};
//Save User
registerbtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const newUserdata = inputValue({nameInput,emailInput,passwordInput,roleInput})
    if (newUserdata === "") {
        alert("Please fill in all fields");
    }
    else{
    const newUser = { text: inputValue}
    createUser(newUser);
    }
})