# Tarefa 2: Comparador de Preços - Desafio Pichau

OBS: A tarefa 1 está nesse repositório em um arquivo PDF.
Deploy em: https://desafiopichau.vercel.app

## O que foi feito

- **Tabela de Comparação Dinâmica**: Exibe uma lista de produtos e seus respectivos preços na Pichau e em lojas concorrentes.
- **Ordenação de Colunas**: É possível ordenar a tabela clicando no cabeçalho de qualquer coluna (nome do produto ou nome da loja).
- **Destaque Visual de Preços**:
  - O preço **mais baixo** em cada linha é destacado em verde.
  - O preço **mais alto** em cada linha é destacado em vermelho.
  - O preço da Pichau tem um estilo visual próprio para fácil identificação.
- **Componentização Modular**: A aplicação foi construída seguindo uma arquitetura de componentes bem definida, promovendo reusabilidade e manutenibilidade.
- **Estilização**: A interface oferece uma experiência de usuário agradável e moderna.

## Organização do Projeto e Arquitetura

A estrutura do projeto foi pensada para ser escalável e de fácil manutenção, seguindo os princípios da metodologia **Atomic Design**. Essa abordagem divide a interface em componentes menores e reutilizáveis, organizados por complexidade.

**Por que essa abordagem?**

- **Reutilização**: Componentes básicos (átomos) são usados para construir componentes mais complexos (moléculas, organismos), evitando duplicação de código.
- **Manutenibilidade**: Isolar a lógica em componentes menores, torna a depuração e a adição de novas funcionalidades muito mais simples.
- **Consistência**: Garante que os elementos da interface sejam consistentes em toda a aplicação.
- **Desenvolvimento Paralelo**: Diferentes desenvolvedores podem trabalhar em componentes distintos sem conflitos.

A estrutura de diretórios `src/componentes` reflete essa metodologia:

### Átomos (`src/componentes/atomos`)

Os blocos de construção fundamentais da UI. São componentes simples e independentes.

- `HeaderOrdenavel.vue`: Um único cabeçalho de coluna clicável que emite um evento de ordenação. Inclui lógica para exibir o ícone de direção (`▲`/`▼`).
- `Preco.vue`: Uma única célula de preço. Contém a lógica para formatar o valor como moeda (BRL) e aplicar estilos com base nas props (`maisBarato`, `maisCaro`, `nossoPreco`).

### Moléculas (`src/componentes/moleculas`)

Grupos de átomos que trabalham juntos como uma unidade funcional.

- `HeaderTabela.vue`: A linha de cabeçalho completa da tabela. É composta por múltiplos átomos `HeaderOrdenavel`.
- `LinhaProduto.vue`: Uma única linha da tabela. É composta pelo nome do produto e múltiplos átomos `Preco`. Contém a lógica para encontrar o preço mínimo e máximo na linha.

### Organismos (`src/componentes/organismos`)

Seções maiores e mais complexas da interface, compostas por moléculas e/ou átomos.

- `TabelaComparacaoPrecos.vue`: O componente da tabela completa. Ele une a molécula `HeaderTabela` com múltiplas moléculas `LinhaProduto` e gerencia o estado principal da tabela (dados, ordenação atual).

### Views (`src/views`)

As páginas da aplicação, onde os organismos são montados para criar a interface final que o usuário vê.

- `HomeView.vue`: A página principal. Ela busca os dados (atualmente do mock), gerencia a lista de produtos filtrados e renderiza o organismo `TabelaComparacaoPrecos`.

## Melhorias de Frontend

**Documentação de Componentes com Storybook**: Implementar o Storybook para criar uma biblioteca visual dos nossos componentes.

**Generalização dos Componentes**: Refatorar os componentes de tabela para que sejam totalmente genéricos e reutilizáveis em qualquer contexto, e não apenas para listar produtos.

**Centralização de Estilos**: Parar de usar valores fixos de cores e fontes diretamente no CSS dos componentes. Adotar um tema centralizado, utilizando um sistema de `theme`, como o do Vuetify.

**Internacionalização (i18n)**: Remover todos os textos fixos e implementar a internacionalização. Isso habilitará a aplicação a suportar múltiplos idiomas de forma escalável.

**Testes**: Escrever testes (unitários, integração, e2e) para garantir a confiabilidade do código.

**Acessibilidade**: Garantir que a aplicação seja utilizável por todos, incluindo pessoas que dependem de leitores de tela.

**Evoluição da Tela**: Criar a interface de usuário necessária para as funcionalidades de paginação, filtros avançados e novos gráficos.

## Melhorias de Backend

**API**: Resgatar as informações de uma API, ao invés de mocks.

**Web Scraping**: Utilizar um serviço de backend dedicado a coletar os preços dos concorrentes de forma automática.

**Cache**: Utilizar uma ferramenta de cache para garantir agilidade e diminuir a carga no banco de dados, disponibilizando os dados mais acessados quase instantaneamente.

## Como Executar o Projeto

1.  Clone o repositório para a sua máquina local:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd <NOME_DO_DIRETORIO>
    ```

3.  Instale as dependências do projeto e execute o servidor de desenvolvimento:

    ```bash
    yarn install && yarn dev
    ```

4.  Abra seu navegador e acesse o endereço indicado no seu terminal.
