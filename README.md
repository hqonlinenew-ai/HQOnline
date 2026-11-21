# Acervo de Modelismo

Catálogo de revistas de modelismo (aero, ferro, nauti etc.) para GitHub Pages.

## Arquivos
- `index.html`: catálogo com menu lateral (categorias, ano, título), busca e rolagem infinita (mais recentes primeiro).
- `leitor.html`: abre em nova janela com o PDF em iframe e botão de download.
- `catalogo.csv`: os dados. Uma linha por revista.
- `estilo.css`, `app.js`: estilo e funções compartilhadas.
- `logo.png` (opcional): logo quadrado exibido no canto superior esquerdo.

## Colunas do catalogo.csv
`id, categoria, titulo, edicao, ano, data_postagem, capa_url, pdf_url, download_url`

- `id` deve ser único.
- `data_postagem` no formato AAAA-MM-DD define a ordem na tela inicial.
- `capa_url` e `pdf_url` precisam ser links que permitam iframe (ex.: Google Drive `.../preview`).
- `download_url` é o link do botão de download (se vazio, usa `pdf_url`).
- Categorias, anos e títulos novos aparecem sozinhos no menu.
- Valores com vírgula devem ficar entre aspas.

## Publicar
Envie a pasta para um repositório e ative Settings → Pages. Abrir o `index.html` direto do computador não funciona, porque o navegador bloqueia a leitura do CSV.
