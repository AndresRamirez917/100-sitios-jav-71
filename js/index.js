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
            return swal({
                title: `El campo ${value} no puede estar vacío`,
                icon: "error",
                 })
        }
        if(id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(elemento.value)){
            return swal({
                title: `El campo ${value} no tiene el formato correcto`,
                icon: "error",
                 })
        }
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         inputArr.forEach(({id}) => document.getElementById(id).value = "")
}