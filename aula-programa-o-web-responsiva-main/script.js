// CONFIGURAÇÕES DE ESTILO VIVO (Cores e Gradientes)
const COLORS = {
    primary: '#6366f1', // Indigo Vivo
    success: '#10b981', // Esmeralda
    danger: '#ef4444',  // Vermelho Vibrante
    accent: '#f59e0b'   // Âmbar
};

let carrinho = []; 
let totalCliques = 0; 
let temaAtual = 0;

// ==========================
// FUNÇÕES DO CARRINHO
// ==========================

// Agora recebe o nome e a URL da imagem do produto
function comprarProduto(nome, urlImagem) { 
    adicionarCarrinho(nome, urlImagem);
    contarClique();
    
    // Dispara a mini tela de aviso (Toast)
    mostrarAvisoToast(nome);
    
    console.log(`%c + ${nome} adicionado!`, `color: ${COLORS.success}; font-weight: bold`);
}

function mostrarAvisoToast(nome) {
    // Busca ou cria o elemento de notificação
    let toast = document.getElementById("toast-notificacao");
    
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast-notificacao";
        document.body.appendChild(toast);
    }

    // Define o conteúdo visual da mini tela
    toast.innerHTML = `✅ <span style="margin-left:8px">${nome} adicionado!</span>`;

    // Ativa a animação (certifique-se de ter o CSS correspondente)
    toast.classList.add("mostrar");

    // Remove automaticamente após 3 segundos
    setTimeout(() => {
        toast.classList.remove("mostrar");
    }, 3000);
}

function adicionarCarrinho(nome, urlImagem) { 
    carrinho.push({ nome: nome, imagem: urlImagem }); 
    atualizarResumoLateral();
}

function mostrarCarrinho() { 
    const janela = document.getElementById("janela-carrinho");
    if (janela) {
        janela.style.display = "flex"; 
        janela.animate([
            { opacity: 0, transform: 'scale(0.95)' },
            { opacity: 1, transform: 'scale(1)' }
        ], { duration: 200, easing: 'ease-out' });
        
        renderizarCarrinho();
    }
}

function fecharCarrinho() {
    const janela = document.getElementById("janela-carrinho");
    if (janela) {
        const anim = janela.animate([
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0.95)' }
        ], { duration: 150, easing: 'ease-in' });
        
        anim.onfinish = () => janela.style.display = "none";
    }
}

function removerItem(index) {
    const container = document.getElementById("lista-detalhada-carrinho");
    const itemElemento = container.children[index];

    if (itemElemento) {
        const animaSaida = itemElemento.animate([
            { opacity: 1, transform: 'translateX(0)' },
            { opacity: 0, transform: 'translateX(50px)' }
        ], { duration: 200 });

        animaSaida.onfinish = () => {
            carrinho.splice(index, 1); 
            totalCliques = carrinho.length;
            
            const contador = document.getElementById("contador");
            if (contador) contador.innerText = totalCliques;

            renderizarCarrinho(); 
            atualizarResumoLateral();
        };
    }
}

function renderizarCarrinho() {
    const container = document.getElementById("lista-detalhada-carrinho");
    const totalTexto = document.getElementById("total-itens");
    
    if (!container) return;
    container.innerHTML = ""; 

    if (carrinho.length === 0) {
        container.innerHTML = `<p style="color: #94a3b8; text-align: center; padding: 20px;">O carrinho está vazio.</p>`;
    } else {
        carrinho.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "cart-item-professional";
            div.style.cssText = `
                display: flex; justify-content: space-between; align-items: center;
                padding: 10px; margin-bottom: 8px; background: #f8fafc;
                border-radius: 8px; border-left: 4px solid ${COLORS.primary};
            `;

            div.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="${item.imagem}" style="width: 45px; height: 45px; object-fit: contain; border-radius: 5px; background: #fff;">
                    <span style="color: #1e293b; font-weight: 500; font-size: 14px;">${item.nome}</span>
                </div>
                <button onclick="removerItem(${index})" style="
                    background: ${COLORS.danger}; color: white; padding: 6px 12px;
                    border-radius: 6px; border: none; cursor: pointer; font-size: 11px;
                    width: auto;
                ">Remover</button>
            `;
            container.appendChild(div);
        });
    }
    if (totalTexto) totalTexto.innerText = "Total: " + carrinho.length + " itens";
}

function atualizarResumoLateral() {
    const listaPequena = document.getElementById("itens-carrinho");
    if (!listaPequena) return;

    listaPequena.innerHTML = "";
    carrinho.forEach((item) => {
        const li = document.createElement("li");
        li.style.cssText = `
            display: flex; align-items: center; gap: 8px;
            padding: 8px; border-bottom: 1px solid #f1f5f9;
            color: #475569; font-size: 13px; list-style: none;
        `;
        li.innerHTML = `
            <img src="${item.imagem}" style="width: 25px; height: 25px; object-fit: contain; border-radius: 3px; background: #fff;">
            <span>${item.nome}</span>
        `;
        listaPequena.appendChild(li);
    });
}

// ==========================
// INTERFACE E EFEITOS VIVOS
// ==========================

function contarClique() { 
    totalCliques = carrinho.length; 
    const contador = document.getElementById("contador");
    if (contador) {
        contador.innerText = totalCliques;
        contador.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.3)', color: COLORS.accent },
            { transform: 'scale(1)' }
        ], { duration: 300 });
    }
}

function mudarTema() { 
    temaAtual = (temaAtual + 1) % 5; 
    const linksTemas = [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
        'https://img.freepik.com/fotos-premium/luxo-opulento-elegancia-papel-de-parede-abstrato-com-fundo-dourado-e-preto_271410-8273.jpg',
        'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80'
    ];
    
    document.body.style.transition = "background 0.5s ease-in-out";
    document.body.style.backgroundImage = `url('${linksTemas[temaAtual]}')`;
    document.body.style.backgroundSize = "cover";
}

function destacarCard(elemento) { 
    elemento.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"; 
    elemento.style.transform = "translateY(-12px) scale(1.02)"; 
    elemento.style.boxShadow = `0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px ${COLORS.primary}44`;
}

function removerDestaque(elemento) { 
    elemento.style.transform = "translateY(0) scale(1)"; 
    elemento.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"; 
}

function efeitoDigitacao(idElemento, texto, velocidade = 50) {
    const elemento = document.getElementById(idElemento);
    if (!elemento) return;
    
    let i = 0;
    elemento.textContent = ""; 
    elemento.style.borderRight = `3px solid ${COLORS.primary}`; 
    
    function digitar() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i); 
            i++;
            setTimeout(digitar, velocidade); 
        } else {
            elemento.style.borderRight = "none";
        }
    }
    digitar();
}

window.onload = function () {
    efeitoDigitacao("titulo-boas-vindas", "A revolução tecnológica começa aqui.", 60);
};