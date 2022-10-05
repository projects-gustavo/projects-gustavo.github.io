const p = document.querySelector('#hour'),
    hour = new Date().getHours();
;

p.innerText = "Boa noite! Meu nome é";
if (hour >= 0 && hour < 12)
    p.innerText = "Bom dia! Meu Nome é";
if (hour >= 12 && hour < 18)
    p.innerText = "Boa tarde! Meu Nome é";

var typed = new Typed(".typing", {
    strings: ["desenvolvedor front-end", "desenvolvedor web", "designer", "amante da música", "amante da tecnologia"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});