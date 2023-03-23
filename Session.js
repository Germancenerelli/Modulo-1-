const cliente = document.getElementById("cliente");
const password = document.getElementById("password");
const frmLogin = document.getElementById("frm-register");

frmLogin.addEventListener("submit",LoginUSer);

function LoginUSer() {

   
    const getlocal = localStorage.getItem("user");
    const validateUser = JSON.parse(getlocal);

    if (cliente.value === "" || password.value === "")
    {
        alert("Completa todos los espacios");
    }
    else if (!validateUser.find(user => user.Name === cliente.value))
    {
        alert("Usuario no encontrado/Existe");
    }
    else if (validateUser.find(user => user.Name === cliente.value).Password !== password.value){
        alert("Error Password")
    }
    else {
        alert("usuario cargado exitosamente!!")
        window.location.assign("unite.html");

    }
}
function redireccion(){
    location.href = "registro.html"
}
