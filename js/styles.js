
const btnAumentar = document.querySelector('.btn-info')
const btnDisminuir = document.querySelector('.btn-danger')
const span=document.getElementById('span')
let contador = 0


btnAumentar.addEventListener(`click`, () => {
        console.log(`Aumenta con click`);
        contador++
        span.textContent = contador
            });
    
btnDisminuir.addEventListener(`click`, () => {
        console.log(`Disminuye con click`);
        contador--
        span.textContent = contador
            });


    

    

        





        
        




    