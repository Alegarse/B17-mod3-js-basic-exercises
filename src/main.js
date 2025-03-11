import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from './vite.svg'
import agsLogo from './logo_ags.svg'
import { ejercicios } from './exercises/_exercises.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://github.com/Alegarse" target="_blank">
      <img src="${agsLogo}" class="logo" alt="AGS logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>JavaScript Basic Exercises</h1>
    <div class="exercises-grid">
      <div class="grid-tema">
        <h3>Tema 1</h3>
        <button id="ex11">Ejercicio 1</button>
        <button id="ex12">Ejercicio 2</button>
        <button id="ex13">Ejercicio 3</button>
        <button id="ex14">Ejercicio 4</button>
        <button id="ex15">Ejercicio 5</button>
      </div>
      <div class="grid-tema">
        <h3>Tema 2</h3>
        <button id="ex21">Ejercicio 1</button>
        <button id="ex22">Ejercicio 2</button>
        <button id="ex23">Ejercicio 3</button>
        <button id="ex24">Ejercicio 4</button>
        <button id="ex25">Ejercicio 5</button>
      </div>
      <div class="grid-tema">
        <h3>Tema 3</h3>
        <button id="ex31">Ejercicio 1</button>
        <button id="ex32">Ejercicio 2</button>
        <button id="ex33">Ejercicio 3</button>
        <button id="ex3a">Ejercicio a</button>
        <button id="ex3b">Ejercicio b</button>
      </div>
      <div class="grid-tema">
        <h3>Tema 4</h3>
        <button id="ex41">Ejercicio 1</button>
        <button id="ex42">Ejercicio 2</button>
        <button id="ex43">Ejercicio 3</button>
        <button id="ex44">Ejercicio 4</button>
        <button id="ex45">Ejercicio 5</button>
        <button id="ex46">Ejercicio 6</button>
      </div>
      <div class="grid-tema">
        <h3>Tema 5</h3>
        <button id="ex51">Ejercicio 1</button>
        <button id="ex52">Ejercicio 2</button>
        <button id="ex53">Ejercicio 3</button>
        <button id="ex54">Ejercicio 4</button>
        <button id="ex55">Ejercicio 5</button>
        <button id="ex56">Ejercicio 6</button>
      </div>
    </div>
    <div class="card">
      <button id="repo-button" type="button"><a href="https://github.com/Alegarse/B17-mod3-js-basic-exercises" target="_blank" title="Open link to repository">Repositorio</a></button>
    </div>
  </div>
`

document.getElementById("ex11").onclick = ejercicios.main1_1;
document.getElementById("ex12").onclick = ejercicios.main1_2;
document.getElementById("ex13").onclick = ejercicios.main1_3;
document.getElementById("ex14").onclick = ejercicios.main1_4;
document.getElementById("ex15").onclick = ejercicios.main1_5;
document.getElementById("ex21").onclick = ejercicios.main2_1;
document.getElementById("ex22").onclick = ejercicios.main2_2;
document.getElementById("ex23").onclick = ejercicios.main2_3;
document.getElementById("ex24").onclick = ejercicios.main2_4;
document.getElementById("ex25").onclick = ejercicios.main2_5;
document.getElementById("ex31").onclick = ejercicios.main3_1;
document.getElementById("ex32").onclick = ejercicios.main3_2;
document.getElementById("ex33").onclick = ejercicios.main3_3;
document.getElementById("ex3a").onclick = ejercicios.main3_a;
document.getElementById("ex3b").onclick = ejercicios.main3_b;
document.getElementById("ex41").onclick = ejercicios.main4_1;
document.getElementById("ex42").onclick = ejercicios.main4_2;
document.getElementById("ex43").onclick = ejercicios.main4_3;
document.getElementById("ex44").onclick = ejercicios.main4_4;
document.getElementById("ex45").onclick = ejercicios.main4_5;
document.getElementById("ex46").onclick = ejercicios.main4_6;
document.getElementById("ex51").onclick = ejercicios.main5_1;
document.getElementById("ex52").onclick = ejercicios.main5_2;
document.getElementById("ex53").onclick = ejercicios.main5_3;
document.getElementById("ex54").onclick = ejercicios.main5_4;
document.getElementById("ex55").onclick = ejercicios.main5_5;
document.getElementById("ex56").onclick = ejercicios.main5_6;