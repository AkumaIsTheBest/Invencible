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

   
    gif.addEventListener('click', function() {
   
        const gifs = [
            '../ims/invincible-fortnite.gif',
            '../ims/omni-man-pull-up.gif',
            '../ims/omniman-fortnite.gif',
            '../ims/invincible-omniman.gif',
            '../ims/yoshikage-kira-evil-smile.gif'
        ];

        
        gif.src = gifs[clickCount];  
        clickCount++;  

    
        if (clickCount >= gifs.length) {
            clickCount = 0;  
        }
    });
});
