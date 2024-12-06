const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    const inputArr = [
        {id: "nombre", value: "Nombre"},
        {id: "email", value: "Email"},
        {id: "fecha", value: "Fecha"},
        {id: "hora", value: "Hora"},
        {id: "mensaje", value: "Mensaje"}
    ]
    for(let {id, value} of inputArr){
        const elemento = document.getElementById(id);
        if(elemento.value.trim() === ""){
            
        }
    }
}