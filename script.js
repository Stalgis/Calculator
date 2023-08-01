const screen= document.getElementById("screen") 
screen.textContent = "";
const numeros= document.getElementsByClassName("boton")

for (let index = 0; index < numeros.length; index++) {
    numeros[index].addEventListener("click", function(){
        const valor= this.getAttribute("data-valor")

        switch(valor){
            case "AC":
                screen.textContent=""
                break;
            case "=":
                try{
                    screen.textContent=eval(screen.textContent)
                } catch(err){
                    screen.textContent="Error"
                }
                break;
            default:
                screen.textContent+=valor
                break;

        }
    })    
}