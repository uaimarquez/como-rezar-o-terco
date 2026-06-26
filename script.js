const misterios = [
    {
        titulo: "Mistérios Gloriosos",
        classe: "glorious",
        dias: "Domingos e Quartas",
        pasta: "gloriosos",
        itens: [
            "Ressurreição de Cristo Nosso Senhor",
            "Ascensão de Nosso Senhor ao Céu",
            "Vinda do Espírito Santo sobre os Apóstolos",
            "Assunção de Nossa Senhora ao Céu",
            "Coroação de Nossa Senhora no Céu como Rainha de todos os Anjos e Santos"
        ]
    },

    {
        titulo: "Mistérios Gozosos",
        classe: "joyful",
        dias: "Segundas e Sábados",
        pasta: "gozosos",
        itens: [
            "Anunciação do Arcanjo São Gabriel à Nossa Senhora",
            "Visitação de Nossa Senhora à sua prima Santa Isabel",
            "Nascimento do Menino Jesus em Belém",
            "Apresentação do Menino Jesus no Templo e a Purificação de Nossa Senhora",
            "Perda e o Encontro do Menino Jesus no Templo"
        ]
    },

    {
        titulo: "✦ Mistérios Dolorosos",
        classe: "sorrowful",
        dias: "Terças e Sextas",
        pasta: "dolorosos",
        itens: [
            "Agonia de Cristo Nosso Senhor, quando suou sangue no Horto",
            "Flagelação de Jesus Cristo atado à coluna",
            "Coroação de espinhos de Nosso Senhor",
            "Jesus Cristo carregando a Cruz para o Calvário",
            "Crucificação e morte de Nosso Senhor Jesus Cristo"
        ]
    },

    {
        titulo: "✦ Mistérios Luminosos",
        classe: "luminous",
        dias: "Quintas",
        pasta: "luminosos",
        itens: [
            "Batismo de Jesus no rio Jordão",
            "Auto-revelação de Jesus nas Bodas de Caná",
            "Anúncio do Reino de Deus",
            "Transfiguração de Jesus",
            "Instituição da Eucaristia"
        ]
    }
];

function togglePrayer(btn){
    const box = btn.closest(".prayer-box");
    box.classList.toggle("open");
}

function trocarImagem(pasta, numero, elemento) {

    const img = document.getElementById(`img-${pasta}`);

    img.style.opacity = 0;
    img.style.transform = "scale(.96)";

    setTimeout(() => {

        img.src = `img/${pasta}/${numero}.jpg`;

        img.onload = () => {
            img.style.opacity = 1;
            img.style.transform = "scale(1)";
        };

    },150);

    elemento
        .closest("ol")
        .querySelectorAll("li")
        .forEach(li => li.classList.remove("ativo"));

    elemento.classList.add("ativo");
}
function renderizarMisterios() {

    const container = document.getElementById("misterios");

    let html = "";

    misterios.forEach(misterio => {

        html += `
            <div class="mystery-block">

                <div class="mystery-block-header ${misterio.classe}">
                    <h4>${misterio.titulo}</h4>
                    <span class="days-badge">${misterio.dias}</span>
                </div>

                <div class="mystery-block-body">

                    <div class="mystery-photo">
                        <img
                            id="img-${misterio.pasta}"
                            src="img/${misterio.pasta}/1.jpg"
                            alt="${misterio.titulo}">
                    </div>

                    <div class="mystery-list-area">

                        <ol>
        `;

        misterio.itens.forEach((item, index) => {

            html += `
                <li
                    class="${index === 0 ? "ativo" : ""}"
                    onclick="trocarImagem('${misterio.pasta}', ${index + 1}, this)">
                    ${item}
                </li>
            `;

        });

        html += `
                        </ol>

                    </div>

                </div>

            </div>
        `;

    });

    container.innerHTML = html;
}

renderizarMisterios();