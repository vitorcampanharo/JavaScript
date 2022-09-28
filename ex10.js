var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()
console.log(`São exatamente ${hora} horas e ${min} minutos. Do dia ${dia} do ${mes} de ${ano}`)
if (hora >= 1 && hora < 5) {
    console.log("Boa noite")
} else if (hora >= 5 && hora < 12) {
    console.log("Bom dia")
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde")
} else if (hora >= 18 && hora <= 24) {
    console.log("Boa noite")
}
