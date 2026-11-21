# Catálogo de quadrinhos

Página estática que lê a tabela `catalogo.csv`. Para publicar no GitHub Pages, envie estes arquivos para um repositório.

## Estrutura do repositório

```
index.html      a página
catalogo.csv    a tabela (uma linha por quadrinho)
logo.png        logo quadrado (opcional)
capas/          imagens de capa
pdfs/           arquivos PDF para leitura
```

## Publicar

1. Crie um repositório no GitHub e envie todos os arquivos desta pasta (Add file > Upload files).
2. Abra Settings > Pages. Em "Build and deployment", escolha "Deploy from a branch", branch `main`, pasta `/ (root)`, e salve.
3. Em alguns minutos o endereço aparece na mesma tela. Abra a página por ele.

A página só funciona pelo endereço do GitHub Pages. Abrir o `index.html` direto no computador não carrega a tabela.

## Colunas do catalogo.csv

| Coluna | Conteúdo | Obrigatória |
|---|---|---|
| titulo | Nome principal, como "Homem-Aranha" | sim |
| subtitulo | Linha ou coleção, como "Aranhaverso" | não |
| arco | Arco ou história | não |
| editora | Nome da editora | não |
| ano | Ano de lançamento, só o número | não |
| data_postagem | Data em que entrou no catálogo, `AAAA-MM-DD` | recomendada |
| pdf | Caminho do PDF (`pdfs/batman-ano-um.pdf`) ou link de um PDF na internet | não |
| capa | Caminho de uma imagem (`capas/batman-ano-um.jpg`), de um PDF ou link incorporável | não |
| cor_fundo | Cor da capa gerada, como `#1E2F4F` | não |
| cor_texto | Cor do texto da capa gerada, como `#F5D547` | não |
| motivo | Desenho de fundo da capa gerada, de 0 a 3 | não |

Regras:

- Escreva sempre igual. "Marvel" e "Marvel Comics" viram duas editoras nos filtros.
- A data precisa estar completa, como `2026-11-05`. É ela que define quem aparece primeiro.
- Se a `capa` estiver vazia ou a imagem não carregar, a página usa a capa colorida gerada com as colunas de cor.
- Se a `capa` for um PDF ou outro link que não seja imagem, a página mostra a primeira página dentro de um iframe, sem permitir cliques nele.
- Se `pdf` estiver vazio, o título abre a leitura com o aviso "ainda não tem PDF".
- O arquivo pode ser salvo com vírgula ou ponto e vírgula (o Excel em português usa ponto e vírgula) e em UTF-8.
- Linhas sem `titulo` são ignoradas.

## Como o PDF e a capa são exibidos

O PDF abre em um iframe, com o leitor de PDF do próprio navegador. Links do Google Drive (`drive.google.com/file/d/.../view`) são convertidos para a versão de pré-visualização, e o arquivo precisa estar compartilhado como "Qualquer pessoa com o link".

Limites do iframe:

- Sites que proíbem ser incorporados não aparecem. Nesse caso, use o botão "Abrir PDF".
- Em celulares o navegador pode mostrar só a primeira página ou oferecer o download. O botão "Abrir PDF" abre o arquivo em outra aba.

## Capas, PDFs e logo

- Capas: formato retrato, proporção 2:3 (por exemplo 600x900), em JPG ou WebP, de preferência abaixo de 300 KB.
- PDFs: o GitHub aceita arquivos de até 100 MB. Mantenha bem abaixo disso, e envie só PDFs que você tem direito de disponibilizar. O GitHub Pages é público.
- Logo: um arquivo `logo.png` quadrado na raiz do repositório aparece no canto superior esquerdo.

## Atualizar

Edite o `catalogo.csv` no GitHub (ícone de lápis), ou envie uma versão nova exportada da planilha (Arquivo > Fazer download > CSV). A página mostra a mudança em alguns minutos, o tempo do cache do GitHub Pages.
