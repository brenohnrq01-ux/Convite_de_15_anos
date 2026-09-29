# Convite de Yasmim — Ruby + Sinatra

## Windows 10

1. Extraia o ZIP. Abra a pasta convite-ruby, que contém Gemfile e app.rb.
2. Clique na barra de endereço do Explorador, digite powershell e pressione Enter.
3. Instale as dependências:

```powershell
bundle install
```

4. Somente depois de concluir a instalação, inicie:

```powershell
bundle exec rackup -s puma -o localhost -p 4567
```

5. Abra http://localhost:4567. Deixe o terminal aberto. Ctrl+C encerra o servidor.

Se aparecer "Could not locate Gemfile", execute `Get-Location` e `dir Gemfile`:
você precisa estar na pasta onde está o arquivo Gemfile (sem extensão .txt).
Não abra as páginas ERB diretamente no navegador.

## Arquivos

- app.rb: rotas Ruby, incluindo compatibilidade com /index.html e /convite.html.
- config.ru: entrada do servidor Rack.
- Gemfile: dependências; bundle install gera Gemfile.lock. Guarde esse arquivo no Git.
- views/index.erb: carta inicial.
- views/convite.erb: convite e confirmação por WhatsApp.
- public/abertura.css e public/abertura.js: aparência e comportamento da carta.
- public/style.css: aparência do convite.
- public/imagens/: GIF original.
- public/bela_e_a_fera.mp3: música original.

## Comportamento preservado

O convite é carregado em um iframe na página inicial. O mesmo elemento de áudio
permanece ativo durante essa transição. A música começa com o clique no selo.
Abrir /convite diretamente não inicia a música da abertura.
A carta mantém o visual e os tempos presentes no ZIP enviado. A preferência do
sistema por movimentos reduzidos continua sendo respeitada.
O HTML original referenciava script.js, ausente no ZIP. Essa referência foi removida;
a animação da carta está em abertura.js e a rosa é um GIF independente de JavaScript.

## Publicação na Vercel

Esta versão contém funções Ruby em api/index.rb e api/convite.rb.
Elas renderizam as mesmas páginas ERB usadas pelo Sinatra localmente.
Na Vercel não é iniciado um servidor Puma persistente.

1. Envie o conteúdo desta pasta ao repositório GitHub, com vercel.json,
   Gemfile, api/, views/ e public/ na raiz. Não envie apenas o ZIP.
2. Importe o repositório na Vercel ou atualize o projeto conectado.
3. Framework Preset: Other.
4. Root Directory: pasta que contém vercel.json (raiz se enviado como acima).
5. Build Command: Override habilitado e campo vazio.
6. Output Directory: public.
7. Install Command: mantenha o padrão automático.
8. Clique em Deploy. Não use rackup como Build Command.

O runtime Ruby da Vercel está em beta. A documentação consultada informa
Ruby 3.3.x como padrão. O Gemfile deste pacote não fixa Ruby 4 e não inclui
o lockfile criado no Windows. Se adicionar seu Gemfile.lock, será necessário
verificar compatibilidade de Ruby, Bundler e plataforma Linux.
Faça o primeiro teste em um projeto de Preview antes de trocar o link enviado
a convidados. Nenhum deploy foi executado durante esta adaptação.

Referência: https://vercel.com/docs/functions/runtimes/ruby

## Verificação

Conferidos os caminhos dos assets e a sintaxe do JavaScript. Ruby não estava
instalado no ambiente de conversão: a instalação das gems e a execução Ruby ainda
precisam ser validadas no seu computador, inclusive com Ruby 4 no Windows.

Referência técnica: https://sinatrarb.com/intro.html
