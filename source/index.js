const fun = require('./lib/functions');

if (typeof exports !== 'undefined'){
    if (typeof module !== 'undefined' && module.exports){
        exports = module.exports = fun;
    }
    exports.fun = fun;
}else{
    ShadowRoot.fun = fun;
}

//Prueba
// const fun = require('./lib/functions');

// console.log(fun.daysUntilChristmas());

// console.log(fun.getAge(new Date("2003-10-8")))

// let form = {
//     "name":{
//         "value":"Jacko",
//         "required": true,
//         "type": "text"
//     },
//     "lastname":{
//         "value":"Tinoco",
//         "required": false,
//         "type": "text"
//     },
//     "birthday":{
//         "value":"2003-10-08",
//         "required": true,
//         "type": "date"
//     },
//     "email":{
//         "value":"jacko.tinoco@tecsup.edu.pe",
//         "required": true,
//         "type": "email"
//     },
//     "age":{
//         "value":19,
//         "required": true,
//         "type": "number"
//     }
// }

// console.log(fun.validateForm(form));