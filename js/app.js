document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const abas = document.querySelectorAll('.aba');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Só processa se for aba interna (não link externo como manutencao)
            const targetAba = item.getAttribute('data-aba');
            if (targetAba) {
                e.preventDefault();

                // Remove active de todas as abas e itens
                abas.forEach(aba => aba.classList.remove('active'));
                navItems.forEach(nav => nav.classList.remove('active'));

                // Ativa a aba clicada
                document.getElementById(targetAba).classList.add('active');
                item.classList.add('active');
            }
            // Se for link pra manutencao.html, o navegador cuida normalmente
        });
    });

    // Garante que a aba Lives comece ativa (redundância)
    const initial = document.querySelector('[data-aba="aba-lives"]');
    if (initial) initial.click();
});
