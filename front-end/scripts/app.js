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
let button = document.querySelector(".buttons");
let checkboxTarea = ""
let indice = ""

function deshabilitarBotonModificar() {
    document.getElementById("update_data").disabled=true
    document.getElementById("update_data").style.backgroundColor='#808080'
}

//Array que almacenará los datos tipo Objetos
let arrayTareas=[];

//Objeto  que se almacenará en el array
let item={
    tarea:"",
    tipo: "",
}

// Cuando se renderice el DOM se mostraran las tareas que haya.
deshabilitarBotonModificar()
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
                <div class="main-div_list_check" id="ad${i}">
                    <input type="checkbox" onClick="prueba(${i})" id="${i}" class="checkbox">
                    <label for="cbox${i}" id="cbox${i}">${arrayTareas[i].tarea}</label>
                    <input type="hidden" value="no" id="hd${i}">
                    <input type="hidden" value="${arrayTareas[i].tarea}" id="text${i}">
                </div>
                <div class="main-div_list_items">
                    <div class="main-div_list_tipo">
                    <label for="tipo" style="visibility: hidden;">${arrayTareas[i].tipo}</label>
                    </div>
                    <div class="main-div_list_buttons_update">
                        <span class="icon-loop2"></span>
                        <button class="actualizar" id="actualizar${[i]}">Actualizar</button>
                    </div>
                    <div class="main-div_list_buttons_delete">
                        <span class="icon-bin"></span>
                        <button class="borrar" id="borrar${[i]}">Borrar</button>
                    </div>
                </div>
            </div>
            `;
            listadoTareas.innerHTML += newDiv
        } else {
            const newDiv =`
            <div class="main-div_list">
                <div class="main-div_list_check" id="ad${i}">
                    <input type="checkbox" onClick="prueba(${i})" id="${i}" class="checkbox">
                    <label for="cbox${i}" id="cbox${i}">${arrayTareas[i].tarea}</label>
                    <input type="hidden" value="no" id="hd${i}">
                    <input type="hidden" value="${arrayTareas[i].tarea}" id="text${i}">
                </div>
                <div class="main-div_list_items">
                    <div class="main-div_list_tipo">
                        <label for="tipo">${arrayTareas[i].tipo}</label>
                    </div>
                    <div class="main-div_list_buttons_update">
                        <span class="icon-loop2"></span>
                        <button class="actualizar" id="actualizar${[i]}">Actualizar</button>
                    </div>
                    <div class="main-div_list_buttons_delete">
                        <span class="icon-bin"></span>
                        <button class="borrar" id="borrar${[i]}">Borrar</button>
                    </div>
                </div>
            </div>
            `
            listadoTareas.innerHTML += newDiv
        }
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
                    <div class="main-div_list_check" id="ad${i}">
                        <input type="checkbox" onClick="prueba(${i})" id="${i}" class="checkbox">
                        <label for="cbox${i}" id="cbox${i}">${arrayTareas[i].tarea}</label>
                        <input type="hidden" value="no" id="hd${i}">
                        <input type="hidden" value="${arrayTareas[i].tarea}" id="text${i}">
                    </div>
                    <div class="main-div_list_items">
                        <div class="main-div_list_tipo">
                        <label for="tipo" style="visibility: hidden;">${arrayTareas[i].tipo}</label>
                        </div>
                        <div class="main-div_list_buttons_update">
                            <span class="icon-loop2"></span>
                            <button class="actualizar" id="actualizar${[i]}">Actualizar</button>
                        </div>
                        <div class="main-div_list_buttons_delete">
                            <span class="icon-bin"></span>
                            <button class="borrar" id="borrar${[i]}">Borrar</button>
                        </div>
                    </div>
                </div>
                `;
                listadoTareas.innerHTML += newDiv
            } else {
                const newDiv =`
                <div class="main-div_list">
                    <div class="main-div_list_check" id="ad${i}">
                        <input type="checkbox" onClick="prueba(${i})" id="${i}" class="checkbox">
                        <label for="cbox${i}" id="cbox${i}">${arrayTareas[i].tarea}</label>
                        <input type="hidden" value="no" id="hd${i}">
                        <input type="hidden" value="${arrayTareas[i].tarea}" id="text${i}">
                    </div>
                    <div class="main-div_list_items">
                        <div class="main-div_list_tipo">
                            <label for="tipo">${arrayTareas[i].tipo}</label>
                        </div>
                        <div class="main-div_list_buttons_update">
                            <span class="icon-loop2"></span>
                            <button class="actualizar" id="actualizar${[i]}">Actualizar</button>
                        </div>
                        <div class="main-div_list_buttons_delete">
                            <span class="icon-bin"></span>
                            <button class="borrar" id="borrar${[i]}">Borrar</button>
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

function deshabilitarBoton(){
    button.disabled = true;
    document.getElementById("idbotton").style.backgroundColor='grey'
    document.getElementById("update_data").disabled=false
    document.getElementById("update_data").style.backgroundColor='#0791e6'
    
}

function actualizar(valorTarea, valorTipo){
    deshabilitarBoton()
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
            document.getElementById("borrar"+i).style.backgroundColor='grey'
            document.getElementById("borrar"+i).disabled=true
            document.getElementById("actualizar"+i).style.backgroundColor='grey'
            document.getElementById("actualizar"+i).disabled=true
        }
    }
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
    deshabilitarBotonModificar()
    habilitarBotones()
}

function habilitarBotones(){
    button.disabled = false;
    document.getElementById("idbotton").style.backgroundColor='#0791e6'
    document.getElementById("borrar"+i).style.backgroundColor='#ff4e4e'
    document.getElementById("borrar"+i).disabled=false
    document.getElementById("actualizar"+i).style.backgroundColor='#f97308'
    document.getElementById("actualizar"+i).disabled=false
}

function prueba(val){
    var id = "hd"+val
    var id2 = "text"+val
    var check = document.getElementById(id).value
    if(check == 'no'){
        var texto = document.getElementById(id2).value;
        html = `
        <input type="checkbox" checked onClick="prueba(${val})" id="${val}" class="checkbox">
        <label for="cbox${val}" id="cbox${val}"><strike>${texto}<strike></label>
        <input type="hidden" value="si" id="hd${val}">
        <input type="hidden" value="${texto}" id="text${val}">
        `
        
        var iid = 'ad'+val;
        document.getElementById(iid).innerHTML = html;
        document.getElementById("borrar"+val).style.backgroundColor='grey'
        document.getElementById("borrar"+val).disabled=true
        document.getElementById("actualizar"+val).style.backgroundColor='grey'
        document.getElementById("actualizar"+val).disabled=true
    } else {
        var texto = document.getElementById(id2).value;
        html = `
        <input type="checkbox" onClick="prueba(${val})" id="${val}" class="checkbox">
        <label for="cbox${val}" id="cbox${val}">${texto}</label>
        <input type="hidden" value="no" id="hd${val}">
        <input type="hidden" value="${texto}" id="text${val}">
        `
        
        var iid = 'ad'+val;
        document.getElementById(iid).innerHTML = html;
        document.getElementById("borrar"+val).style.backgroundColor='#ff4e4e'
        document.getElementById("borrar"+val).disabled=false
        document.getElementById("actualizar"+val).style.backgroundColor='#0791e6'
        document.getElementById("actualizar"+val).disabled=false
    }
}
