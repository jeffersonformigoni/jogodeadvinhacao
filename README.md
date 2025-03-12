# 🎯 Jogo de Adivinhação  

Um jogo desenvolvido para praticar lógica de programação e consolidar conhecimento em **JavaScript**, **HTML** e **CSS**.  

---

## 📖 Sobre o Projeto  

Este projeto consiste em um **jogo de adivinhação** onde o jogador deve tentar descobrir um número aleatório gerado pelo computador dentro de um intervalo de **1 a 100**.  

Durante o curso de **JavaScript e HTML** na [Alura](https://cursos.alura.com.br/), foi proposto um desafio aos participantes: desenvolver um jogo para praticar lógica de programação.  

O jogo foi sendo aprimorado ao longo das aulas, consolidando o aprendizado com novas implementações e oferecendo uma experiência prática e desafiadora para os estudantes.  

---

## 🚀 **Jogue Agora!**  
🔗 **[Acesse a página do jogo](#)** *(adicione o link do jogo aqui)*  

---

## 🎮 **Funcionalidades do Jogo**  

✅ O jogador precisa adivinhar um número secreto entre **1 e 100**  
✅ **10 tentativas** para acertar o número correto  
✅ O jogo informa se o número escolhido está **acima** ou **abaixo** do valor correto  
✅ Caso o jogador esgote as tentativas, o jogo exibe o número correto e finaliza a partida  
✅ O jogador pode **reiniciar o jogo** após o término  

---

🏆 Desafio Extra:

1⃣ Melhoria na Dinâmica do Jogo: Para facilitar a personalização do intervalo de números, foi implementada uma variável chamada numeroMaximo. Agora, se desejar mudar o intervalo de 1 a 100 para 1 a 500, basta alterar o valor dessa variável sem precisar modificar a lógica do jogo.

Exemplo de implementação:

let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

Com essa alteração, o jogo se torna mais flexível e fácil de ajustar conforme a necessidade!
