
/* ================================
   🔝 SCROLL SUAVE DO SITE
   ================================ */

// Faz toda a rolagem da página ser suave
// (quando clicar em links ou usar scrollTo)

document.documentElement.style.scrollBehavior = "smooth";


/* ================================
   ⬆️ BOTÃO VOLTAR AO TOPO
   ================================ */

// Função chamada pelo botão no HTML
function voltarAoTopo() {

    // window = navegador inteiro
    // scrollTo = move a página até um ponto específico

    window.scrollTo({
        top: 0,              // posição do topo da página
        behavior: "smooth"   // animação suave
    });

}
console.log("JS carregou com sucesso!");