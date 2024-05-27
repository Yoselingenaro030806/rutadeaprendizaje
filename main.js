let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('"Cada vez que veas un negocio exitoso, fue porque alguna vez alguien tomó una decisión valiente"')
  .pauseFor(200)
  .deleteChars(10)
  .start();
