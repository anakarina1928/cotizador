//import { dataCars } from "./api/api.js";
//import { insertHtmArray, generatingOptions, defaultOption } from "./utils/template.js";

const year = document.querySelector('#year').value;//select de años
const make = document.querySelector('#make').value;//select de marca
//const valueCars = document.querySelector('#value-cars').value;// valor ingresado por el usuario
const basico =document.querySelector('#basico');
const completo = document.querySelector('#completo');
const boton = document.querySelector('#boton');
//const plan = document.querySelector("input[name='tipo']:checked").value;



const getTypeOfPlan = (plan) => plan==='basico'? 2.3 : 3.5;

const calculateCarMake = makeCar =>{
    let increment;

    switch (makeCar) {
        case 'AMERICANO': increment=3.7;
        
            break;
            case 'EUROPEO': increment=2.5;
            
            break;
            case 'ASIATICO': increment=1.6;
            
            break;
    
        default:
          return increment;
    }
}

const differenceFromCurrentYear = (yearCar)=> new Date().getFullYear()-yearCar;

let plan ="";
if(basico.checked){
    plan="basico"
}else if(completo.checked){
    plan="completo"
} 
   

const cotizacion ={make, year, plan };
const cotizar = (cotizador)=>{
 
   
    const {make, year, plan }= cotizador;
    let result=2000;
    const difference = differenceFromCurrentYear(year);
    result-=((difference*3)*result)/100;

    result=calculateCarMake(make)*result;
    const obtPlan= getTypeOfPlan(plan);
    result=parseFloat(obtPlan*result).toFixed(2);
    console.log('este es el resoltado: ', result);
    return result;
}
boton.addEventListener('click',(event)=>{
    
    cotizar(cotizacion)})

/*
const creatingOptionsInHtml = async () => {
    const cars = await dataCars();
    let optionYear = '';
    let optionName = '';

    cars.sort((a, b) => a.year - b.year).forEach(element => {
       
        optionYear = optionYear + generatingOptions(element.year,element.id); //acumulamos las opciones de años y marca para despues insertarlo en html
        optionName = optionName + generatingOptions(element.make,element.id);
    })
    insertHtmArray(yearCars, optionYear, defaultOption('elige el año'));
    insertHtmArray(makeCars, optionName, defaultOption('elige la marca del auto'));
    //console.log('estos son los años', cars.map(elemt => elemt.year));
};

creatingOptionsInHtml();
*/


