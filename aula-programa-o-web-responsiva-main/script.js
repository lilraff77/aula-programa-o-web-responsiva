let contador = 0;
let carrinho = [];

document.getElementById("titulo-boas-vindas").innerText = "🔥 Bem-vindo à TechZone";

/* IMAGEM PADRÃO (caso falte alguma) */
const IMG_PADRAO = "https://via.placeholder.com/80x80?text=Produto";

/* ADICIONAR PRODUTO */
function comprarProduto(nome, preco, imagem) {
    contador++;
    document.getElementById("contador").innerText = contador;

    carrinho.push({
        nome: nome || "Produto",
        preco: preco || 0,
        imagem: imagem || IMG_PADRAO
    });

    mostrarToast();
}

/* ABRIR CARRINHO */
function mostrarCarrinho() {
    let lista = document.getElementById("lista-carrinho");
    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;

        lista.innerHTML += `
            <div class="item-carrinho">
                <img src="${item.imagem}" onerror="this.src='${IMG_PADRAO}'">
                <div>
                    <h4>${item.nome}</h4>
                    <p>R$ ${item.preco}</p>
                    <button onclick="removerItem(${index})">Remover</button>
                </div>
            </div>
        `;
    });

    document.getElementById("total-itens").innerText =
        "Total: R$ " + total.toFixed(2);

    document.getElementById("janela-carrinho").style.display = "block";
}

/* REMOVER ITEM */
function removerItem(index) {
    carrinho.splice(index, 1);
    mostrarCarrinho();
}

/* FECHAR */
function fecharCarrinho() {
    document.getElementById("janela-carrinho").style.display = "none";
}

/* TOAST */
function mostrarToast() {
    let toast = document.getElementById("toast");
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

/* TEMA */
function mudarTema() {
    document.body.style.background = "#111";
}