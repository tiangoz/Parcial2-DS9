// inputs del usuario

let buscarTarea = document.getElementById('seekTask')
let formularioBusqueda = document.getElementById('search_form')
let mostrarTareas = document.getElementById('show')
let formulario = document.getElementById('tasks_form')
let listadoTareas = document.getElementById('tasks_type_list')
let tarea = document.getElementById('task')
let tareaTipo = document.getElementById("task_type")
let limpiar = document.getElementById("clean")
let actualizarDato = document.getElementById("update_data")
let checkboxTarea = ""
let indice = ""

//Array que almacenará los datos tipo Objetos
let arrayTareas=[];

//Objeto  que se almacenará en el array
let item={
    tarea:"",
    tipo: "",
}

// Cuando se renderice el DOM se mostraran las tareas que haya.
document.addEventListener('DOMContentLoaded', mostrar)
mostrarTareas.addEventListener('click', mostrar)

//función agregar
function agregarTarea(valorTarea, valorTipo){
    item={
        tarea: valorTarea,
        tipo: valorTipo,
    }
    arrayTareas.push(item);
}

//Funcion que escucha el formulario
formulario.onsubmit=function(e){
    e.preventDefault();
    let valorTarea = tarea.value
    let valorTipo = tareaTipo.value

    agregarTarea(valorTarea, valorTipo)
    tarea.value=""
    tareaTipo.selectedIndex=0

    guardar()
}

function guardar(){
    localStorage.setItem('tareas',JSON.stringify(arrayTareas))
    mostrar()
}

function mostrar(){
    listadoTareas.innerHTML="";
    arrayTareas=JSON.parse(localStorage.getItem('tareas'))
    for(var i=0;i<arrayTareas.length;i++) {
        if(arrayTareas[i].tipo == "novalido") {
            const newDiv =`
            <div class="main-div_list2">
                <div class="main-div_list_check" id="${i}">
                    <input type="checkbox" id="cbox${i}" class="checkbox">
                    <label for="cbox1">${arrayTareas[i].tarea}</label>
                </div>
                <div class="main-div_list_items">
                    <div class="main-div_list_tipo">
                    <label for="tipo" style="visibility: hidden;">${arrayTareas[i].tipo}</label>
                    </div>
                    <div class="main-div_list_buttons_update">
                        <span class="icon-loop"></span>
                        <button class="actualizar">Actualizar</button>
                    </div>
                    <div class="main-div_list_buttons_delete">
                        <span class="icon-bin"></span>
                        <button class="borrar">Borrar</button>
                    </div>
                </div>
            </div>
            `;
            listadoTareas.innerHTML += newDiv
        } else {
            const newDiv =`
            <div class="main-div_list">
                <div class="main-div_list_check" id="${i}">
                    <input type="checkbox" id="cbox${i}" class="checkbox">
                    <label for="cbox1">${arrayTareas[i].tarea}</label>
                </div>
                <div class="main-div_list_items">
                    <div class="main-div_list_tipo">
                        <label for="tipo">${arrayTareas[i].tipo}</label>
                    </div>
                    <div class="main-div_list_buttons_update">
                        <span class="icon-loop"></span>
                        <button class="actualizar">Actualizar</button>
                    </div>
                    <div class="main-div_list_buttons_delete">
                        <span class="icon-bin"></span>
                        <button class="borrar">Borrar</button>
                    </div>
                </div>
            </div>
            `
            listadoTareas.innerHTML += newDiv
        }
        checkboxTarea = document.getElementById("cbox"+i).checked
        console.log(checkboxTarea)
        // checkboxTarea[i].addEventListener('change', detectar)
    }
}

//Funcion que escucha el formulario
formularioBusqueda.onsubmit=function(e){
    e.preventDefault();
    let valorBuscarTarea = buscarTarea.value
    buscarListado(valorBuscarTarea)
    buscarTarea.value=""
}

// Función para buscar
function buscarListado(valorBuscarTarea){
    listadoTareas.innerHTML="";
    let palabra = valorBuscarTarea
    for(var i=0;i<arrayTareas.length;i++){
        if(arrayTareas[i].tarea==palabra || arrayTareas[i].tipo ==palabra){
            if(arrayTareas[i].tipo == "novalido") {
                const newDiv =`
                <div class="main-div_list2">
                    <div class="main-div_list_check" id="${i}">
                        <input type="checkbox" id="cbox${i}" class="checkbox">
                        <label for="cbox1">${arrayTareas[i].tarea}</label>
                    </div>
                    <div class="main-div_list_items">
                        <div class="main-div_list_tipo">
                        <label for="tipo" style="visibility: hidden;">${arrayTareas[i].tipo}</label>
                        </div>
                        <div class="main-div_list_buttons_update">
                            <span class="icon-loop"></span>
                            <button class="actualizar">Actualizar</button>
                        </div>
                        <div class="main-div_list_buttons_delete">
                            <span class="icon-bin"></span>
                            <button class="borrar">Borrar</button>
                        </div>
                    </div>
                </div>
                `;
                listadoTareas.innerHTML += newDiv
            } else {
                const newDiv =`
                <div class="main-div_list">
                    <div class="main-div_list_check" id="${i}">
                        <input type="checkbox" id="cbox${i}" class="checkbox">
                        <label for="cbox1">${arrayTareas[i].tarea}</label>
                    </div>
                    <div class="main-div_list_items">
                        <div class="main-div_list_tipo">
                            <label for="tipo">${arrayTareas[i].tipo}</label>
                        </div>
                        <div class="main-div_list_buttons_update">
                            <span class="icon-loop"></span>
                            <button class="actualizar">Actualizar</button>
                        </div>
                        <div class="main-div_list_buttons_delete">
                            <span class="icon-bin"></span>
                            <button class="borrar">Borrar</button>
                        </div>
                    </div>
                </div>
                `
                listadoTareas.innerHTML += newDiv
            }
        }
    }
}


// Limpiar el HTML
limpiar.addEventListener('click',limpiarListado,true)

function limpiarListado(){
    listadoTareas.innerHTML="";
}


listadoTareas.onclick=function(e) {
    e.preventDefault();
    if(e.target.classList=="actualizar" || e.target.classList=="borrar") {
        var valorTarea = e.target.parentNode.parentNode.parentNode.querySelector('label').innerHTML
        var valorTipo = e.target.parentNode.parentNode.querySelector('label').innerHTML
        }

        if(e.target.classList=="borrar"){
            borrar(valorTarea, valorTipo)
        } else if(e.target.classList=="actualizar"){
            actualizar(valorTarea, valorTipo)
        }
    }


function borrar(valorTarea, valorTipo){
    arrayTareas.forEach((elemento, index)=>{
        if(elemento.tarea == valorTarea && elemento.tipo == valorTipo){
            arrayTareas.splice(index, 1);
        }
        guardar()
    })
}

function actualizar(valorTarea, valorTipo){
    for(var i=0;i<arrayTareas.length;i++){
        if(arrayTareas[i].tarea==valorTarea && arrayTareas[i].tipo == valorTipo) {
            indice = i
            tarea.value= arrayTareas[i].tarea
            if(arrayTareas[i].tipo == "novalido"){
                tareaTipo.selectedIndex=0
            }else if (arrayTareas[i].tipo == "Universidad"){
                tareaTipo.selectedIndex=1
            }else if (arrayTareas[i].tipo == "Trabajo"){
                tareaTipo.selectedIndex=2
            } else {
                tareaTipo.selectedIndex=3
            }
        }
    }
    console.log(indice)
}

actualizarDato.addEventListener('click', actualizarRegistro)

function actualizarRegistro() {
    let valorTarea = tarea.value
    let valorTipo = tareaTipo.value
    console.log(indice)
    arrayTareas[indice] = {tarea: valorTarea, tipo: valorTipo};
    
    tarea.value=""
    tareaTipo.selectedIndex=0
    indice = ""
    guardar()
}

//Función que detecta el check
// let checkboxTarea = document.getElementById("cbox0")
// checkboxTarea.addEventListener('change', detectar)

function detectar(){
    if(checkboxTarea) {
       alert('checkbox esta seleccionado'); 
    }
}