//Imperativa
const hola="Cris";
const decirHola =()=>{
    console.log(`Hi ${hola}`);
}
decirHola();

//Funcional
const dHi=(name)=>`Hi ${name}`;
console.log(dHi("Cristobal"));

const sum = (a,b) => a + b;
const sum2 = (a,b) => a - b;
const suma = (a,b,rrrr) => rrrr(a,b);
console.log(suma(2,2,sum2));