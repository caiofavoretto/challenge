![Eplus](https://www.agenciaeplus.com.br/wp-content/themes/eplus/images/agencia-eplus-n-logo.png)

# E-Plus Frontend Challenge

Seja bem-vindo ao E-Plus Front-end Challenge, considere este o primeiro passo para fazer parte de uma das melhores equipes de ecommerce e marketing digital do Brasil!

Para completar o desafio com sucesso você precisará codificar o layout que segue no projeto, para isso será necessário consumir um json via xhttp que retornará uma lista de produtos na resposta do request e servirá para alimentar/manipular o mini-cart.

Então mãos a obra e bom challenge ;)

## Design

- O topo apresentado deve seguir o [seguinte design](https://projects.invisionapp.com/share/NARHXUS6HCF#/357617423_Eplus)
- Baseado neste layout, faça uma adaptação responsiva para celulares.

## Como realizar o teste

- Faça um fork deste repositório em seu GitHub
- Adicione ao Readme uma descrição de como executar seu projeto
- Descreva as funcionalidades do seu desafio, nos conte tudo que fez! Se fez o desafio utilizando pré-processadores, por exemplo, pois usaremos estas informações para avaliá-lo.
- O ideal é que este challenge leve até 8h.
- Faça commits parciais, para que possamos acompanhar o seu desenvolvimento.
- Em caso de dúvidas, entre em contato com rodrigo.freitas@agenciaeplus.com.br ou nadia@agenciaeplus.com.br

## Dicas

- Os ícones usados, são todos do Material Design. https://material.io/icons/
- A fonte utilizada é Montserrat (Está fonte se encontra no google fonts).
- Trabalhamos com clientes perfeccionistas, portanto tenha atenção com espaçamentos, tamanhos e estilos de fonte.

## Critérios de avaliação

- Alcançar os objetivos propostos
- Qualidade de código
- Commits parciais, mostrando a linha de desenvolvimento
- Boa descrição das funcionalidades do desafio
- Fidelidade ao design proposto
- Adaptação mobile

# Descrição do teste realizado

- Para visualizar o resultado basta clicar [**aqui**](https://challenge-eplus-caio.herokuapp.com/)

## Como foi realizado

A aplicação foi deselvolvida utilizando React, uma biblioteca JavaScript de código aberto que serve para criar interfaces de usuário através da componentização de elementos.
Juntamente a isso, foram adicionadas outras dependências aos projeto para a construção de um código mais estruturado e de fácil entendimento, tais como:
- **Styled Components:** um tipo de css que funciona de forma parecida com SASS, porém é possível criar componentes React baseados em estilos pré-determinados.
- **Axios:** utilizado para controle de requisições HTTP e consumo de APIs Rest

O início do projeto se deu através de um planejamento por tickets em um quadro como esse
![board](docs/board.PNG)
A partir disso, foram geradas tarefas que compunham cada _commit_

As funcionalidades criadas foram as seguintes:
- A aplicação funciona como um SPA (Single Page Aplication), por isso, possível mudar de aba sem perder o estado do menu superior.
- A aplicação é responsiva e se adapta a qualquer tamanho de tela.
- O sistema busca os dados de um json local através de uma requisição HTTP e preenche o carrinho de compras.
- Caso não haja nada no carrinho, esta tele é exibida:
![board](docs/carrinho.PNG)
