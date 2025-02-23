document.getElementById('data_nasc').addEventListener('input', function (e) {
    let value = e.target.value;

    // Remove todos os caracteres não numéricos (mantém apenas os números)
    value = value.replace(/\D/g, '');

    // Aplica a máscara "DD/MM/AAAA"
    if (value.length <= 2) {
        value = value.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    } else if (value.length <= 4) {
        value = value.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    } else {
        value = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    }

    // Define o valor no input com as barras corretas
    e.target.value = value;
});

