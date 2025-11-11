var agora = new Date()
var hora = agora.getHours
if(hora>=0 && hora<5){
    console.log("Boa madrugada")
}else{
    if(hora<12){
        console.log("bom dia")
    }else{
        if(hora<18){
            console.log("boa tarde")
        }else{
            console.log(" boa noite")
        }
    }
}