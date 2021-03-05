const urlUsers="http://localhost:3000/users"


// Login button action on click
const emailInput =document.getElementById("loginemail");
const selectedInput=document.getElementById("selector")
const passwordInput=document.getElementById("loginpassword");
const loginBtn=document.getElementById("login_submit");
     
    loginBtn.addEventListener("click",(event)=>{
    event.preventDefault();
        
        const getInputValue=(element)=>{
        return element.value;
        }

    const elementValue=element.value
    if (elementValue===""){
        alert("Please fill in both email and password fields");
    }else{
    
        const emailValue=getInputValue(emailInput);
        const selectedValue=getInputValue(selectedInput);
        const passwordValue=getInputValue(passwordInput);
        const loginData=({emailValue,selectedValue,passwordValue});

        loginUser(loginData);

    }

    emailInput.value="";
    selectedInput.value="";
    passwordInput.value="";
    
    });
    

    // create a new user
    const SignUpUser=(user)=>{
        const userData=JSON.stringify(user)
        fetch(urlUsers,{
            method:"POST",
            body:userData,
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log("Login successful",user)
            loginData();
        }). catch((error)=>{
            console.log(error);
        });
    };

//Login a registered User
const loginUser = (user) =>{
    const userData = JSON.stringify();
    console.log (userData);
    fetch (urlUser, {
        method: "POST",
        body: userData,
        headers:{
            "Accept" : "application/json",
            "Content-Type" : "application/json",
         } 
    })
    .then((res=> res.json()))
    .then((data)=>{
    console.log(data);
        })
    .catch((error)=>{
    console.log(error)
    })
}

router.get("/user/profile",(req,res)=>{
    res.status(200).send(req.user);
})