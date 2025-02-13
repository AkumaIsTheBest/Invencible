document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const optionsContainer = document.querySelector('.options-container');

    toggleButton.addEventListener('click', function() {
     
        optionsContainer.classList.toggle('hidden');
    });

  
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`vc esta indo na pagina... ${button.textContent}!`);
        });
    });
});
