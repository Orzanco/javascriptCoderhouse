const miForm = document.getElementById("form-container")
const miPrecio = document.getElementById("precio")
const miPrecio2 = document.getElementById("impuesto")
const resp = document.getElementById("resp") 
miForm.addEventListener('submit', (event)=>{
event.preventDefault()
let miPrecioValue = Number(miPrecio.value)
let miPrecio2Value = parseInt(miPrecio2.value) 
let x = miPrecioValue+miPrecio2Value 
let item = document.createElement('li') 
item.textContent = x
resp.appendChild(item) 
})



class Invocadores {
    constructor(nombre, elo) {
        this.nombre = nombre.toLowerCase()
        this.elo = elo.toLowerCase()
    }
}


let invo = JSON.parse(localStorage.getItem('invocadores')) 

if ( !invo ) { 
    invo = []
}            


const getAll = () => { 
    return invo
}

const agregarAlArreglo = (invocadorsito) => { 
    invo.push(invocadorsito)
}

const crear = (n,e) =>{   
    return new Invocadores(n,e)
}

const listaInvocadores = document.getElementById('lista-invocadores') 

const showInvocadores = (invo)=>{    
    console.log(" show invocadores")

    for( let i = 0; i < invo.length ; i++){
        let item = document.createElement('li')
        item.textContent = invo[i].nombre
        listaInvocadores.appendChild(item)
    }
}

showInvocadores(invo)


const form = document.getElementById('form-test')
const nombre = document.getElementById('form-name')
const elo = document.getElementById('form-elo')




form.addEventListener('submit', (event)=>{     

    event.preventDefault()

     let nombreValue = nombre.value
     let eloValue = elo.value
   

   let invocador = crear( nombreValue  , eloValue )
   
   agregarAlArreglo(invocador)

   localStorage.setItem('invo', JSON.stringify(invo))

    nombre.value = ''
   elo.value = ''
 


   let item = document.createElement('li')
   item.textContent = nombreValue
   listaInvocadores.appendChild(item)

})








