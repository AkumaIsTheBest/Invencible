document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const optionsContainer = document.querySelector('.options-container');
    const gif = document.querySelector('.gif');

    let clickCount = 0;  

    toggleButton.addEventListener('click', function() {
        optionsContainer.classList.toggle('hidden');
    });

    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`Você está indo para a página de ${button.textContent}!`);
        });
    });

   
    function mudarimagem(){
        const gifs = [
            '../ims/invincible-fortnite.gif',
            '../ims/omni-man-pull-up.gif',
            '../ims/omniman-fortnite.gif',
            '../ims/invincible-omniman1.gif',
            '../ims/yoshikage-kira-evil-smile.gif'
        ];

        
        gif.src = gifs[clickCount];  
        clickCount++;  

    
        if (clickCount >= gifs.length) {
            clickCount = 0;  
        }
    }
   
    let tempo = 2 * 1000;
    let intevalID = setInterval(() => {
        mudarimagem()
        clickCount === 2 ? tempo = 10 : tempo = 2 * 1000;
        console.log(tempo)

        clearInterval(intevalID)
        intevalID = setInterval(() => {
            mudarimagem()
            clickCount === 2 ? tempo = 10 : tempo = 2 * 1000
            console.log(tempo)
        }, tempo)
        
    }, tempo)
    gif.addEventListener('click', function() {
        mudarimagem()

    });
});
