# DAWA-LAB06-TINOCO-2023-2
## Requerimientos
>Necesitamos node.js y por ende npm para usar este paquete llamado tecsup-2023-tarea-tinocoflores

---
## Guía de instalación
### Proyecto node desde 0
>Ejecutaremos el siguiente comando

    npm init -y

>Ejecutaremos el siguiente comando en nuestro proyecto de node

    npm i tecsup-2023-tarea-tinocoflores

>Con esto podremos ver el nombre de la dependencia y la versión en el archivo package.json
>Crearemos un archivo index.js y para probar la funcionalidad tenemos el siguiente código:

    const fun = require('tecsup-2023-tarea-tinocoflores');

    console.log(fun.daysUntilChristmas());
    
    console.log(fun.getAge(new Date("2003-10-8")))
    
    let form = {
        "name":{
            "value":"Jacko",
            "required": true,
            "type": "text"
        },
        "lastname":{
            "value":"Tinoco",
            "required": false,
            "type": "text"
        },
        "birthday":{
            "value":"2003-10-08",
            "required": true,
            "type": "date"
        },
        "email":{
            "value":"jacko.tinoco@tecsup.edu.pe",
            "required": true,
            "type": "email"
        },
        "age":{
            "value":19,
            "required": true,
            "type": "number"
        }
    }
    
    console.log(fun.validateForm(form));

>Con esto podemos ver como función el paquete
---
