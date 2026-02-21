function sendMessage(userName: string, isLogged: boolean) {
   console.log(`Olá ${userName}. Você ${!isLogged? " não" : ""} pode logar.`)
}

const userName = "Beto"
const isLogged = true

sendMessage(userName, isLogged)

let idades: number[] = [12, 13, 14]
let nomes: string[] = ["arthur", "joao", "daniel"]


