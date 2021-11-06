<div style="text-align: center;">
  <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2fbacb7a-e460-44a3-8fc5-e66f96dae148%2Fcover-reactjs.png?table=block&id=57692167-7879-4019-a83f-544e79167b12&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=6b184496-d59f-431e-9205-efb47de631f8&cache=v2" alt="trilha ignite reactjs" style="width:384px;"/>
</div>

---
<h1>Desafio 02 - Componentizando a aplicação </h1>

Essa será uma aplicação onde o seu principal objetivo é refatorar uma página para listagem de filmes de acordo com gênero. A aplicação já está totalmente funcional mas grande parte do seu código está diretamente no arquivo `App.tsx`. Para resolver isso da melhor forma, é necessário dividir a aplicação em duas partes principais: `sidebar` e o `conteúdo principal` que possui o header e a listagem de filmes.


- [x] A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- [x] Na sidebar é possível selecionar qual categoria de filmes deve ser listada;
- [x] A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- [x] O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.


<h2>Template da plicação</h2>
<p>O template está disponível na seguinte URL: <a href="https://github.com/rocketseat-education/ignite-template-componentizando-a-aplicacao"> github.com/rocketseat-education/ignite-template-componentizando-a-aplicacao</a></p>

<h2>Solução</h2>

`src/App.tsx` esse componente contém toda a aplicação, a sidebar e o content.

`src/components/Content.tsx` esse componente, possui toda a lógica e corpo responsável pelo header e conteúdo da aplicação.

`src/components/SideBar.tsx` esse componente, possui toda a lógica e corpo responsável pela seção que contém o título do site e a parte de navegação à esquerda da página.

---
Feito com 💜 por Rocketseat