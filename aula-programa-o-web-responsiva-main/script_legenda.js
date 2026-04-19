// ARRAY DO CARRINHO
let carrinho = [];

// FUNÇÃO DE COMPRA
function comprarProduto(produto) {
    let confirmar = confirm("Deseja comprar " + produto + "?");

    if (confirmar) {
        alert("Compra realizada!");
    } else {
        alert("Compra cancelada!");
    }
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho(produto) {
    carrinho.push(produto);
    console.log("Carrinho:", carrinho);
}

// MOSTRAR CARRINHO
function mostrarCarrinho() {
    if (carrinho.length === 0) {
        alert("Carrinho vazio!");
    } else {
        alert("Produtos no carrinho:\n" + carrinho.join("\n"));
    }
}

// CONTADOR
let totalCliques = 0;

function contarClique() {
    totalCliques++;
    document.getElementById("contador").innerText = totalCliques;
}

// TEMA FUNDO


let temaAtual = 0; 
// CONTROLA QUAL TEMA ESTÁ ATIVO

function mudarTema() {

    temaAtual++;

    if (temaAtual > 4) {
        temaAtual = 0;
    }

    if (temaAtual === 0) {
        document.body.style.backgroundImage = "url('https://tse1.mm.bing.net/th/id/OIP.4VJwO2LQKJg-bRY_Z0pOjwHaHa?pid=Api')";
        // TEMA 0

    } else if (temaAtual === 1) {
        document.body.style.backgroundImage = "url('https://img.freepik.com/fotos-premium/luxo-opulento-elegancia-papel-de-parede-abstrato-com-fundo-dourado-e-preto-design-sofisticado-para-decoracao-de-luxo_271410-8273.jpg')";
        // TEMA 1

    } else if (temaAtual === 2) {
        document.body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/fundo-de-luxo-d-abstrato-cor-ondas-curvas-que-fluem-efeito-ilumina%C3%A7%C3%A3o-sotaque-dourado-abstratas-alta-qualidade-coloridas-com-322305371.jpg')";
        // TEMA 2

    } else if (temaAtual === 3) {
        document.body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/fundo-floral-de-luxo-preto-e-dourado-forma-textura-seda-preta-com-motivos-ouro-k-desenho-luxuoso-abstrato-d-ren-um-padr%C3%A3o-algumas-253195975.jpg')";
        // TEMA 3

    } else if (temaAtual === 4) {
        document.body.style.backgroundImage = "url('https://img.freepik.com/fotos-premium/padrao-perfeito-com-design-de-fundo-de-papel-de-parede-de-textura-de-luxo-ouro-liquido-generative-aixa_159242-20901.jpg?w=1060')";
        // TEMA 4
    }

    

    
}
// IMAGEM
function clicouImagem() {
    alert("Você clicou na imagem!");
}

// FORMULÁRIO
function validarFormulario() {
    let nome = document.getElementById("nome").value;

    if (nome === "") {
        alert("Preencha o nome!");
        return false;
    }

    alert("Formulário enviado!");
    return true;
}

// HOVER CARD
// JAVASCRIPT INSERIDO: HOVER CARD ESTILO ROXO TECNOLÓGICO
function destacarCard(elemento) {

    // ANIMAÇÃO SUAVE
    elemento.style.transition = "all 0.35s ease";

    // LEVE ZOOM + ELEVAÇÃO
    elemento.style.transform = "scale(1.07) translateY(-6px)";

    // BORDA ROXA NEON
    elemento.style.border = "2px solid #a855f7";

    // SOMBRA ROXA (EFEITO TECNOLOGIA)
    elemento.style.boxShadow = "0 0 15px #a855f7, 0 0 30px rgba(168,85,247,0.5)";

    // FUNDO DEGRADÊ ROXO
    elemento.style.background = "linear-gradient(135deg, rgba(88,28,135,0.6), rgba(168,85,247,0.2))";

    // TEXTO MAIS BRILHANTE
    elemento.style.color = "#ffffff";
}


// JAVASCRIPT INSERIDO: REMOVER EFEITO
function removerDestaque(elemento) {

    // VOLTA AO NORMAL
    elemento.style.transform = "scale(1) translateY(0)";

    // REMOVE SOMBRA
    elemento.style.boxShadow = "none";

    // REMOVE BORDA
    elemento.style.border = "none";

    // REMOVE FUNDO
    elemento.style.background = "";

    // VOLTA COR PADRÃO
    elemento.style.color = "";

    // TRANSIÇÃO SUAVE AO VOLTAR
    elemento.style.transition = "all 0.35s ease";
}