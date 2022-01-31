# Requisitos do projeto
## `Fluxo Comum`
### `01login.test`
- [ ] 1 - Crie uma tela de login que deve ser acessível pelos endpoints / e /login no navegador
- [ ] 2 - Crie os elementos da tela de login com os data-testids disponíveis no protótipo
- [ ] 3 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados mal-formatados
- [ ] 4 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados válidos, porém inexistentes no banco de dados
- [ ] 5 - Desenvolva a tela de login de maneira que ela possibilite fazer o login com dados válidos e existentes no banco de dados
### `02register.test`
- [ ] 6 - Crie uma tela de registro que deve ser acessível via endpoint /register no navegador e pelo botão de registro na tela de login
- [ ] 7 - Crie os elementos da tela de registro com os data-testids disponíveis no protótipo
- [ ] 8 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro com dados mal-formatados
- [ ] 9 - Desenvolva a tela de registro de maneira que ela possibilite cadastrar com dados válidos
- [ ] 10 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro de um usuário já existente
## `Fluxo do Cliente`
### `03customer_products.test`
- [ ] 11 - Crie uma tela de produtos do cliente contendo uma barra de navegação - navbar - que servirá também para demais telas das pessoas usuárias
- [ ] 12 - Desenvolva a tela de produtos do cliente criando os demais elementos com os data-testids disponíveis no protótipo
- [ ] 13 - Desenvolva a tela de produtos do cliente de forma que ela pressuponha dados válidos da pessoa usuária armazenados no localStorage
- [ ] 14 - Desenvolva a tela de produtos do cliente de forma que os cards de todos os produtos pré-cadastrados contenham os valores corretos
- [ ] 15 - Desenvolva a tela de produtos do cliente de forma que o preço total esteja correto após a adição de itens aleatórios
- [ ] 16 - Desenvolva a tela de produtos do cliente de forma que haja um botão de carrinho que redirecionará para a tela de checkout caso itens sejam adicionados
### `04customer_checkout.test`
- [ ] 17 - Crie uma tela de checkout do cliente com elementos com os data-testids disponíveis no protótipo
- [ ] 18 - Desenvolva a tela de checkout do cliente de forma a possuir os dados corretos do carrinho e preço total
- [ ] 19 - Desenvolva a tela de checkout do cliente de forma que seja possível remover itens do carrinho
- [ ] 20 - Desenvolva a tela de checkout do cliente de forma a nos redirecionar para a tela de detalhes do pedido feito após a finalização do mesmo
- [ ] 21 - Desenvolva a tela de checkout do cliente de forma a gerar uma nova venda na tabela sales, assim como relações em salesProducts ao finalizar o pedido
### `05customer_orders.test`
- [ ] 22 - Crie uma tela de pedidos do cliente com elementos a partir dos data-testids disponíveis no protótipo
- [ ] 23 - Desenvolva a tela de pedidos do cliente de forma a conter a lista de pedidos do mesmo com os dados corretos
- [ ] 24 - Desenvolva a tela de pedidos do cliente de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo
### `06customer_order_details.test`
- [ ] 25 - Crie uma tela de detalhes do pedido do cliente com elementos a partir dos data-testids disponíveis no protótipo
- [ ] 26 - Desenvolva a tela de detalhes do pedido do cliente de forma a possuir os dados corretos da venda
## `Fluxo da Pessoa Vendedora`
### `07seller_orders.test`
- [ ] 27 - Crie uma tela de pedidos da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo
- [ ] 28 - Desenvolva a tela de pedidos da pessoa vendedora de forma a conter a lista de pedidos do mesmo com os dados corretos
- [ ] 29 - Desenvolva a tela de pedidos da pessoa vendedora de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo
### `08seller_order_details.test`
- [ ] 30 - Crie uma tela de detalhes do pedido da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo
- [ ] 31 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a possuir os dados corretos da venda
## `Validação do Status do Pedido`
- [ ] 32 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a ser capaz de alterar o status do pedido
### `09customer_seller_status_sync.test`
- [ ] 33 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de detalhes do pedido do cliente após atualização das páginas
- [ ] 34 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de lista de pedidos do cliente após atualização das páginas
- [ ] 35 - Garanta que o status do pedido atualizado na tela de detalhes do pedido do cliente seja refletido na tela de lista de pedidos da pessoa vendedora após atualização das páginas
### `10customer_seller_socket_status_sync.test`
- [ ] 36 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a interagir em tempo real com a tela de detalhes do pedido do cliente
- [ ] 37 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a interagir em tempo real com a tela de lista de pedidos do cliente
- [ ] 38 - Desenvolva a tela de detalhes do pedido do cliente de forma a interagir em tempo real com a tela de lista de pedidos da pessoa vendedora
## `Fluxo da Pessoa Administradora`
### `11admin_manage_users.test`
- [ ] 39 - Crie uma tela de pessoa administradora com elementos a partir dos data-testids disponíveis no protótipo
- [ ] 40 - Desenvolva a tela da pessoa administradora de forma a validar o formulário de cadastro
- [ ] 41 - Desenvolva a tela da pessoa administradora de forma que seja possível cadastrar pessoas usuárias válidas
- [ ] 42 - Desenvolva a tela da pessoa administradora de forma que ela impossibilite o cadastro de pessoas usuárias já existentes
- [ ] 43 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que haja uma tabela de pessoas usuárias cadastradas
- [ ] 44 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que seja possível deletar pessoas usuárias na tabela
## `Cobertura de Testes`
### `12coverage_tests.test`
- [ ] 45 - Crie testes que cubram no mínimo 30 por cento dos arquivos do front-end e back-end em src com um mínimo de 75 linhas cobertas em cada
- [ ] 46 - (`Bônus`) Crie testes que cubram no mínimo 60 por cento dos arquivos do front-end e back-end em src com um mínimo de 150 linhas cobertas em cada
- [ ] 47 - (`Bônus`) Crie testes que cubram no mínimo 90 por cento dos arquivos do front-end e back-end em src com um mínimo de 225 linhas cobertas em cada

