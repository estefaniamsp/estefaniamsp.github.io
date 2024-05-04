let url = "https://jsonplaceholder.typicode.com/users"

const obtenerUsuarios = async ()=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data)
        pintarUsuarios(data);
    } catch (error){
        console.log(error);
    }

}

obtenerUsuarios();

const pintarUsuarios = (data)=>{
    let body = "";
    for (let i=0; i<data.length; i++){
        body += <tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>;
    }
    document.getElementById("data").innerHTML = body;

}
