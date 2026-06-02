let contador = 0;

function plantarArvore(){
    contador++;

    document.getElementById("numero").innerText = contador;
}

const elementos = document.querySelectorAll('.fade');

function aparecer(){

    elementos.forEach(item => {

        const topo = item.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){
            item.classList.add('show');
        }

    });

}

window.addEventListener('scroll', aparecer);

aparecer();
