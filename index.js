window.addEventListener('load', init, false);
        function init() {
            let div = document.querySelector('#music_mix');
            div.style.visibility = 'visible';
            let boton = document.querySelector('#display');
            boton.addEventListener('click', function (e) {
                if(div.style.visibility === 'visible'){
                    div.style.visibility = 'hidden';
                }else{
                    div.style.visibility = 'visible';
                }
            }, false);
        }