/* ---------- FOOTER YEAR ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- FORM SUBMISSÃO SIMPLES (sem backend) ---------- */
const form = document.getElementById("contactForm");
const msgEl = document.getElementById("formMsg");

form.addEventListener("submit", e => {
    e.preventDefault(); // impede recarregamento
    msgEl.textContent = "✅ Mensagem enviada! Em breve entrarei em contato.";
    form.reset();
});

/* ---------- ATIVO NAVEGAÇÃO (highlight) ---------- */
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function setActiveLink() {
    const scrollPos = window.scrollY + 80; // offset para o menu ficar fixo
    sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            const id = sec.getAttribute("id");
            const link = document.querySelector(`[href="#${id}"]`);
            link.classList.add("active");
        } else {
            const link = document.querySelector(`[href="#${sec.getAttribute('id')}"]`);
            link.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", setActiveLink);
setActiveLink(); // executa ao carregar

/* ---------- Inicializa AOS (já está no HTML) ---------- */
AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true
});
