
let btnSalvar = document.getElementById("btnSalvar");
let btnSair =  document.getElementById("btnSair");

btnSair.addEventListener("click", ()=>{
    location.href="/"
})
btnSalvar.addEventListener("click", async ()=>{
    let product = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        code:document.getElementById("code").value,
        value: document.getElementById("value").value,
        author: document.getElementById("author").value
    }
    let request = await fetch("http://localhost:8080/product", {
        method:"POST",
        body:JSON.stringify(product),
        headers:{
            "Content-Type": "application/json",
        }
    })
   let result = await request.json()
   if(result.has_error == false){
        location.reload()
   }else{
    alert("Não foi possível cadastrar o produto. Verifique se o código de produto passando não está sendo usado em outro produto.")
   }
   
})
async function removeProduct(id){
    let product = {
        id:id
    }
    let request = await fetch("http://localhost:8080/product", {
        method:"DELETE",
        body:JSON.stringify(product),
        headers:{
            "Content-Type": "application/json",
        }
    })
    let result = await request.json()
   if(result.has_error == false){
    location.reload()
   }else{
    alert("Não foi possível remover o produto.")
   }
    
}
async function editProduct(id){
    let request = await fetch("http://localhost:8080/product/"+id)
    let result = await request.json()
    document.getElementById("editName").value = result.data.name;
    document.getElementById("editCode").value = result.data.code;
    document.getElementById("editDescription").value = result.data.description;
    document.getElementById("editAuthor").value = result.data.author;
    document.getElementById("editValue").value = result.data.value;
    document.getElementById("editId").value = result.data.id;
}
let btnEdit = document.getElementById("btnEdit")
btnEdit.addEventListener("click", async ()=>{
    let data = {
        name: document.getElementById("editName").value,
        description: document.getElementById("editDescription").value,
        code: document.getElementById("editCode").value,
        value: document.getElementById("editValue").value,
        author: document.getElementById("editAuthor").value,
        id:document.getElementById("editId").value
    }
    let request = await fetch("http://localhost:8080/product", {
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
        }
    })
    let result = await request.json()
    if(result.has_error == false){
     location.reload()
    }else{
     alert("Não foi possível editar o produto.")
    }
})
async function removerConta(id){
    let data = {
        id:id
    }
    let request = await fetch("http://localhost:8080/user", {
        method:"DELETE",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
        }
    })
    let result = await request.json()
    if(result.has_error == true){
        alert('Houve um problema ao apagar a conta.')
        console.log(result)
    }else{
        location.href = 'http://localhost:8080/'
    }
}