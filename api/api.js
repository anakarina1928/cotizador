/*
const dataCard = () => {
    const url = 'https://car-data.p.rapidapi.com/cars?limit=20&page=0';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '71b3ba728bmsh0cd124f2a6231c9p1eb716jsne59f32e4eed3',
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
    };

    const petitionFetch = fetch(url, options);

    petitionFetch
        .then(response => response.json())
        .then(response => console.log('data', response))
        .catch(err => console.error(err));



}*/

 const dataCars = async () => {

    const url = 'https://car-data.p.rapidapi.com/cars?limit=5&page=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '71b3ba728bmsh0cd124f2a6231c9p1eb716jsne59f32e4eed3',
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
    };

    const resp= await fetch(url, options);
    const data = await resp.json();
    console.log('peticion async' , data);

    const cars = data.map(element=>{

        return{
            year: element.year,
            make:element.make, 
            id:element.id,
           
        }
    })

   console.log('objeto ', cars)
   return  cars;
    
} 

export {dataCars};
//or 
//export default dataCars;




