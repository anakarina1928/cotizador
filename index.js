import {dataCars} from "./api/api.js";
import { insertHtmArray, generatingOptions, defaultOption } from "./utils/template.js";

const yearCars = document.querySelector('#year');
const makeCars = document.querySelector('#make');

//Los nombres y fechas se estan repitiendo
//valor del auto
//funcionalidad para cotizar el auto
// input tipo radio para indicar si es basico o completo el tipo de seguro.
//


const creatingOptionsInHtml= async () =>{
    const cars = await dataCars();
    let optionYear = '';
    let optionName='';

    cars.sort((a,b) => a.year - b.year).forEach(element =>{
//acumulamos las opciones de años y marca para despues insertarlo en html
        optionYear = optionYear + generatingOptions(element.year);
        optionName = optionName + generatingOptions(element.make);
    
    })
    insertHtmArray(yearCars, optionYear,defaultOption('elige el año'));
    insertHtmArray(makeCars, optionName,defaultOption('elige la marca del auto'));
//console.log('estos son los años', cars.map(elemt => elemt.year));
}
creatingOptionsInHtml();

 