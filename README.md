# Projeto de integração com a API [freetogames](https://www.freetogame.com/api-doc)

Este projeto integra com a API supracitada para apresentar uma listagem de jogos na tela, com as features de pesquisa por keyword, ordenação por data de publicação ou por nome do game, detalhe do game selecionado e favoritar o game para ser enviador por email ( ainda em desenvolvimento ).

## Scripts disponíveis

No diretório do projeto, executar

### `npm start`

que inicializará a aplicação em modo de desenvolvimento.\
Será aberto o endereço [http://localhost:3005](http://localhost:3005) no browser para visualização da aplicação.

No diretório `backend`, executar

### `npm start`

que inicializará o servidor da aplicação para o envio de email. No momento, esta feature está rudimentar e apenas envia um email default para o endereço informado.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Features adicionais

A aplicação possui muito potencial para crescer. Dentre as features que podem ser implementadas e terminadas estão:

1. Enviar os games favoritados por email, em formato html, com os principais campos que identificam um game ( como imagem, título e descrição )
2. Filtros dinâmicos de múltipla escolha
3. Usuário poder salvar um perfil de filtros a serem aplicados todas as vezes
4. Limpar filtros
5. Ordenação descendente
