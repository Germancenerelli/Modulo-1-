const frmLogin = document.getElementById("frm-register");
const Usuario = document.getElementById("Usuario");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const ConfirmPassword = document.getElementById("Confirm-Password");

const userRegistered = [];
let id = 0 


frmLogin.addEventListener("submit",RegisterUser);
function RegisterUser() {
    id++;

    const user = {
        id: id,
        Name:Name.value,
        Email:Email.value,
        Password:Password.value,
        ConfirmPassword:ConfirmPassword.value,
    };
    if (
        Name.value === "" ||  
        Email.value === "" ||
        Password.value === "" ||
        ConfirmPassword.value === "" 
    ){
        alert("Todos los Campos deben estar cargados");
    }
        else if (Password.value !== ConfirmPassword.value){

        }
        else if (userRegistered.find(user => user.user === Name.value))
        {
        alert("El Usuario ya existe");{
        }
        }else{
                userRegistered.push(user);

                localStorage.setItem("user",JSON.stringify(userRegistered));
        }{
        alert ("Se regitro con exito!!")
        location.href = "nosotros.html"
        }
        Name.value = " ";
        Email.value = " ";
        Password.value = " ";
        ConfirmPassword.value = " "
        
        window.location.href = "nosotros.html"

}
function redireccion(){
    location.href = "iniciar session.html"
}
