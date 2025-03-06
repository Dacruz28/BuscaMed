    function openModal(nome, descricao, disponibilidade) {
        // Atualizar os campos do modal
        document.getElementById('medicamentoNome').textContent = nome;
        document.getElementById('medicamentoDescricao').textContent = descricao;
        document.getElementById('medicamentoDisponibilidade').textContent = "Disponibilidade: " + disponibilidade;
    }
