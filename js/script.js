const botones = document.querySelectorAll(".categoria");
const cards = document.querySelectorAll(".card");

botones.forEach(btn => {

    btn.addEventListener("click", () => {

        botones.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filtro = btn.dataset.filter;

        cards.forEach(card => {

            if (filtro === "all") {
                card.style.display = "block";
            } else {

                const categorias = card.dataset.category.split(" ");

                card.style.display = categorias.includes(filtro)
                    ? "block"
                    : "none";
            }

        });

    });

});