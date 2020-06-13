
//let test1="admin";
//let test2=1234;
function redirect(){
    window.open('main.html');
}

function validate(callback){
   
let username=document.getElementById("username").value;
let password=document.getElementById("password").value;
    if(username=="admin"&&password=="1234"){
     // alert("success");
     callback();
        return true;
    }
    alert("invalid");
        

}
