// ARRAY DO CARRINHO
let carrinho = []; 
let totalCliques = 0; 

// ==========================
// FUNÇÕES DO CARRINHO (SISTEMA REAL)
// ==========================

// FUNÇÃO DE COMPRA (Aciona a lógica de adicionar e contar)
function comprarProduto(produto) { 
    let confirmar = confirm("Deseja adicionar " + produto + " ao carrinho?"); 

    if (confirmar) { 
        adicionarCarrinho(produto);
        contarClique();
    }
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho(produto) { 
    carrinho.push(produto); 
    
    // Atualiza a listinha pequena da página principal
    const listaPequena = document.getElementById("itens-carrinho");
    if (listaPequena) {
        const item = document.createElement("li");
        item.style.padding = "8px";
        item.style.borderBottom = "1px solid #eee";
        item.textContent = "🛒 " + produto;
        listaPequena.appendChild(item);
    }
}

// MOSTRAR CARRINHO (Abre a "guia" detalhada)
function mostrarCarrinho() { 
    const janela = document.getElementById("janela-carrinho");
    if (janela) {
        janela.style.display = "block";
        renderizarCarrinho(); // Desenha a lista com botões de remover
    } else {
        // Fallback caso a janela não exista no HTML
        if (carrinho.length === 0) { 
            alert("Seu carrinho ainda está vazio!"); 
        } else { 
            alert("Produtos no carrinho:\n\n" + carrinho.join("\n")); 
        }
    }
}

// FECHAR A GUIA DO CARRINHO
function fecharCarrinho() {
    const janela = document.getElementById("janela-carrinho");
    if (janela) janela.style.display = "none";
}

// REMOVER ITEM ESPECÍFICO
function removerItem(index) {
    carrinho.splice(index, 1); // Remove do array pelo índice
    
    // Atualiza o contador de cliques para bater com a quantidade atual
    totalCliques = carrinho.length;
    const contador = document.getElementById("contador");
    if (contador) contador.innerText = totalCliques;

    renderizarCarrinho(); // Recarrega a guia detalhada
    atualizarResumoLateral(); // Recarrega a lista da página principal
}

// DESENHA A LISTA NA GUIA DETALHADA
function renderizarCarrinho() {
    const container = document.getElementById("lista-detalhada-carrinho");
    const totalTexto = document.getElementById("total-itens");
    
    if (!container) return;
    
    container.innerHTML = ""; // Limpa para redesenhar

    if (carrinho.length === 0) {
        container.innerHTML = "<p style='color: #666;'>Seu carrinho está vazio.</p>";
    } else {
        carrinho.forEach((produto, index) => {
            const div = document.createElement("div");
            div.style.display = "flex";
            div.style.justifyContent = "space-between";
            div.style.alignItems = "center";
            div.style.padding = "10px";
            div.style.borderBottom = "1px solid #ddd";
            div.style.marginBottom = "10px";

            div.innerHTML = `
                <span><strong>🛒 ${produto}</strong></span>
                <button onclick="removerItem(${index})" style="width: 80px; background: #ff4444; color: white; padding: 5px; border-radius: 4px; border: none; cursor: pointer;">Remover</button>
            `;
            container.appendChild(div);
        });
    }
    
    if (totalTexto) totalTexto.innerText = "Total de itens: " + carrinho.length;
}

// ATUALIZA A LISTA DA PÁGINA PRINCIPAL
function atualizarResumoLateral() {
    const listaPequena = document.getElementById("itens-carrinho");
    if (listaPequena) {
        listaPequena.innerHTML = "";
        carrinho.forEach(p => {
            const li = document.createElement("li");
            li.style.padding = "8px";
            li.style.borderBottom = "1px solid #eee";
            li.textContent = "🛒 " + p;
            listaPequena.appendChild(li);
        });
    }
}

// ==========================
// OUTRAS FUNÇÕES (INTERFACE E TEMA)
// ==========================

function contarClique() { 
    totalCliques++; 
    const contador = document.getElementById("contador");
    if (contador) contador.innerText = totalCliques; 
}

function mudarTema() { 
    temaAtual++; 
    if (temaAtual > 4) temaAtual = 0; 
    const linksTemas = [
        'https://tse1.mm.bing.net/th/id/OIP.4VJwO2LQKJg-bRY_Z0pOjwHaHa?pid=Api',
        'https://img.freepik.com/fotos-premium/luxo-opulento-elegancia-papel-de-parede-abstrato-com-fundo-dourado-e-preto_271410-8273.jpg',
        'https://thumbs.dreamstime.com/b/fundo-de-luxo-d-abstrato-cor-ondas-curvas-que-fluem-322305371.jpg',
        'https://thumbs.dreamstime.com/b/fundo-floral-de-luxo-preto-e-dourado-forma-textura-seda-preta-253195975.jpg',
        'https://img.freepik.com/fotos-premium/padrao-perfeito-com-design-de-fundo-de-papel-de-parede-textura-ouro-liquido_159242-20901.jpg?w=1060'
    ];
    document.body.style.backgroundImage = `url('${linksTemas[temaAtual]}')`;
}

let temaAtual = 0;

function destacarCard(elemento) { 
    elemento.style.transition = "all 0.35s ease"; 
    elemento.style.transform = "scale(1.05) translateY(-10px)"; 
    elemento.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
}

function removerDestaque(elemento) { 
    elemento.style.transform = "scale(1) translateY(0)"; 
    elemento.style.boxShadow = "none"; 
}

function efeitoDigitacao(idElemento, texto, velocidade = 70) {
    let i = 0;
    const elemento = document.getElementById(idElemento);
    if (!elemento) return;

    function digitar() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i); 
            i++;
            setTimeout(digitar, velocidade); 
        }
    }
    elemento.textContent = ""; 
    digitar();
}

function validarFormulario() {
    let nome = document.getElementById("nome").value;
    if (nome === "") {
        alert("Preencha o nome!");
        return false;
    }
    alert("Formulário enviado com sucesso!");
    return true;
}

window.onload = function () {
    efeitoDigitacao("titulo-boas-vindas", " Bem vindo à melhor loja de eletrônicos do Brasil!", 70);
};