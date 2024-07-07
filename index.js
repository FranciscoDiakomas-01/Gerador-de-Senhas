window.onload = function () {
    //
    const copyBnt = document.getElementById("copy")
    copyBnt.addEventListener("click",async()=>{
        let span = document.querySelector("span").textContent
        if(String(span).length === 0){
            alert("Nenhum texo a ser copiado")
            return
        }else{
                await navigator.clipboard.writeText(span)
                alert("Senha Copiada com sucesso!")
        }

        
    })
    const btnGeneratePass = document.querySelector("button")
    btnGeneratePass.addEventListener("click",()=>{

        //pegando os chars
        let chars = ""
        let tamanho = document.getElementById("tamanho")
        let uppercase = document.getElementById("uppercase").checked
        let lowercase = document.getElementById("lowerrcase").checked
        let numbers = document.getElementById("number").checked
        let charsEspeciais = document.getElementById("especial_chars").checked

        //validacao
        if(tamanho.value  > 20){
            alert("A senha deve conter no máximo 20 caracteres")
            return
        }else if(tamanho.value < 8){
            alert("A senha deve conter no mímino que 8 caracteres")
            return
        }
        if(String(tamanho.value).length  === 0){
            alert("Preencha o campo!")
            return
        }
        if(uppercase){
            chars += "ABCDEFGHIJKLMNOPQRSTUVWYXZ"
        }
        if(lowercase){
            chars +=  "abcdefghijklmnopqrstuvwxyz"
        }
        if(numbers){
            chars += "1234567890"
        }
        if(charsEspeciais){
            chars+= "+-#*%&/()=?!|"
        }
        if(!chars){
            alert("Selecione pelomenos Uma opcção")
            return
        }
        let passWord = ""
        
        for(let i = 0 ; i < tamanho.value ; i++){
            let position = Math.floor(Math.random() * chars.length)
            passWord += chars[position]

        }
        tamanho.value = ""
        tamanho.setAttribute("autofocus", true)
        let span = document.querySelector("span").textContent = passWord
        

    })
}