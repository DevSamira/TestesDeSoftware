
if(document.cookie == "errorLogin=true") alert("E-mail ou senha inválido")
var cookies = document.cookie.split(";");
var cookies = document.cookie.split(";");

for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

let btn = document.getElementById('btnSalvar')
btn.addEventListener('click', async ()=>{
    let data = {
        name:document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        password: document.getElementById("password").value,
    }
    let request = await fetch('/user', {
        method:'post',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    let result = await request.json()
    if(result.has_error){
        alert(result.data)
    }else{
        location.reload('/')
    }
    
})