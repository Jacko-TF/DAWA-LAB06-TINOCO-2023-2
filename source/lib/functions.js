const daysUntilChristmas = () => {

    var today = new Date();

    var christmas = new Date(today.getFullYear(), 11, 25);

    if(today > christmas){

        christmas.setFullYear(today.getFullYear() + 1);

    }

    return Math.floor((christmas - today) / (1000 * 60 * 60 * 24));

}

const getAge = (myage) => {
    return Math.floor(((new Date().getTime()) - myage.getTime())/(1000 * 60 * 60 * 24 * 365.25));
}

const validateForm = (form) =>{

    var errores = [];

    for (let input in form){
        if(form[input].required){
            if( typeof(form[input].value) === "undefined" || form[input].value === "" || form[input].value === null){
                errores.push(`El campo ${input} es requerido`)
            }
        }
        switch (form[input].type){
            case "text":
                if(!isNaN(form[input].value)){
                    errores.push(`El campo ${input} debe ser de tipo ${form[input].type}`)
                }
                break;
            case "number":
                if(isNaN(form[input].value)){
                    errores.push(`El campo ${input} debe ser de tipo ${form[input].type}`)
                }
                break;
            case "email":
                var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!form[input].value.match(regexEmail)) {
                    errores.push(`El campo ${input} debe ser de tipo ${form[input].type}`)
                }
                break;
            case "date":
                var regexDate = /^\d{4}-\d{2}-\d{2}$/;
                if (!form[input].value.match(regexDate)) {
                    errores.push(`El campo ${input} debe ser de tipo ${form[input].type}`)
                }
                break;
        }
    }
    return errores;
}

module.exports = {
    daysUntilChristmas,
    getAge,
    validateForm
}