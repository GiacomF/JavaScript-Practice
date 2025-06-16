const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello", name, "how are you?")

const shouldWePlay = prompt("Do you want to play? ")
if(shouldWePlay === "Yes" || shouldWePlay === "yes")
{
    console.log("Great! Let's go! ")
}
else
{
    console.log("All right! What would you like to do? ")
}