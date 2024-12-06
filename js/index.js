async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctail = await result.json();
    console.log(coctail);
    const randDrink = coctail.drinks.sort(() => 0.5 - Math.random()).slice(0,4);
    const lengua = randDrink.slice(0,4);
    randDrink.forEach((element, index) => {
        const box = document.createRange().createContextualFragment(`
             <div class="box box-1">
                    <img src="${element.strDrinkThumb}" alt="">
                    <div class="box-text">
                        <h2>Project ${index + 1}</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ab itaque officiis voluptates culpa cumque aspernatur consequuntur tempora reprehenderit ad.</p>
                    </div>
                </div>
            
            `)
            const portafolio_flex = document.querySelector('.porfolio-flex');
            portafolio_flex.append(box)
    })
}
getData()

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