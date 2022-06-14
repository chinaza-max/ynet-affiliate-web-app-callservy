let userData=localStorage.getItem("UserData");

if(userData==""||userData==null){

    window.location.replace("page-login.html");
    
    console.log("userData")
}

