let gword = null
let state = 0

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clear(){

    const words = document.querySelectorAll(".letter")
    words.forEach(word => {
        word.remove()
    })
    
}

function word(){
    const words = ["google", "amazon", "facebook", "apple", "microsoft", "ibm", "oracle", "intel", "hp", "twitter", "salesforce", "vmware", "jpmorgan", "boeing", "caterpillar", "ford", "tesla", "bmw", "daimler", "volkswagen", "audi", "porsche", "renault", "peugeot", "citroën", "fiat", "alfa"]

    clear()

    len = words.length

    word = words[random(0, len-1)]
    gword = word

    cant = word.length

    for (var i = 0; i < cant; i++) {
        const span = document.createElement("span")
        span.textContent = "_"
        span.classList.add("letter")
        span.classList.add(word[i])
        document.querySelector("#word").appendChild(span)
    }

}

function letter(letter){
    if (state !== 6){
        const botton = document.querySelector(`#${letter.toLowerCase()}`)
        botton.disabled = true
        botton.classList.remove("enable")
        if (gword.includes(letter)){
            const sletter = document.querySelectorAll(`.${letter}`)
            for (var i = 0; i < sletter.length; i++) {
                sletter[i].textContent = letter
            }
            sletter.textContent = letter
            botton.classList.add("correct")

        }else{
            let img = document.querySelector("#img")
            switch (state) {
                case 0:
                    img.src = "img/ahorcado-1.png"
                    state = 1
                    botton.classList.add("incorrect")
                    break;
                case 1:
                    img.src = "img/ahorcado-2.png"
                    state = 2
                    botton.classList.add("incorrect")
                    break;
                case 2:
                    img.src = "img/ahorcado-3.png"
                    state = 3
                    botton.classList.add("incorrect")
                    break;
                case 3:
                    img.src = "img/ahorcado-4.png"
                    state = 4
                    botton.classList.add("incorrect")
                    break;
                case 4:
                    img.src = "img/ahorcado-5.png"
                    state = 5
                    botton.classList.add("incorrect")
                    break;
                case 5:
                    img.src = "img/ahorcado-6.png"
                    state = 6
                    botton.classList.add("incorrect")
                    break;
            }
        }
    }

    if (state === 6){
        if (confirm("Perdiste, ¿quieres volver a jugar?")){
            reload()
        }
    }
}

function reload(){
    window.location.reload()
}

