document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('id_email');
    const passwordInput = document.getElementById('id_password');
    
    form.addEventListener('submit', function(event) {
        // Previne o envio padrão do formulário
        event.preventDefault();

        // Limpa mensagens de erro anteriores
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        let hasError = false;

        // Validação do campo de e-mail
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Por favor, insira seu e-mail.');
            hasError = true;
        }

        // Validação do campo de senha
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Por favor, insira sua senha.');
            hasError = true;
        }

        // Se não houver erros, envia o formulário
        if (!hasError) {
            form.submit();
        }
    });

    function showError(inputElement, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        inputElement.parentNode.appendChild(errorDiv);
    }
});