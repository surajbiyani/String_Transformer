const input = document.querySelector('.input-str')

const UpperCase = document.querySelector('#upper-case span')
const LowerCase = document.querySelector('#lower-case span')
const CamelCase = document.querySelector('#camel-case span')
const pascalCase = document.querySelector('#pascal-case span')
const snakeCase =  document.querySelector('#snake-case span')
const kababCase =  document.querySelector('#kebab-case span')
const trimOutput =  document.querySelector('#Trim-case span')

function capitalizeString(str){
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1,str.length);
}

function toCamelCase(str){
   const lowerCaseString = str.toLowerCase();
   const wordsArray = lowerCaseString.split(' ');
   const finalArray = wordsArray.map((word,i) => {
    if(i === 0) return word
    return capitalizeString(word)
   })
   return finalArray.join('');
}

function topascalCase(str){
    const lowerCaseString = str.toLowerCase();
    const wordsArray = lowerCaseString.split(' ');
    const finalArray = wordsArray.map((word) => {
     return capitalizeString(word)
    })
    return finalArray.join('');
 }
 function toSnakeCase(str){
    return str.replaceAll(' ','_')
 }
 function toKababCase(str){
    return str.replaceAll(' ','-')
 }

 function toTrimCase(str){
    return str.replaceAll(' ','')
 }


function updateScreen(){
    LowerCase.innerText = input.value.trim().toLowerCase();
    UpperCase.innerText = input.value.trim().toUpperCase();
    CamelCase.innerText = toCamelCase(input.value.trim()); 
    pascalCase.innerText = topascalCase(input.value.trim());
    snakeCase.innerText = toSnakeCase(input.value.trim());
    kababCase.innerText = toKababCase(input.value.trim());
    trimOutput.innerText = toTrimCase(input.value.trim());
}


updateScreen();
input.addEventListener('input',()=>{
    
        updateScreen();
    
})