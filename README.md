# 🌹 Convite Digital XV — A Bela e a Fera

<p align="center">
  Experiência web interativa criada para um aniversário de 15 anos com estética inspirada em <strong>A Bela e a Fera</strong>.
</p>

<p align="center">
  <a href="https://convite-de-15-anos-gilt.vercel.app">
    <img src="https://img.shields.io/badge/🌐_Ver_Convite-Vercel-000000?style=for-the-badge" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" />
  <img src="https://img.shields.io/badge/Sinatra-000000?style=for-the-badge&logo=ruby&logoColor=white" />
  <img src="https://img.shields.io/badge/ERB-B91C1C?style=for-the-badge" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
</p>

## ✨ Experiência

O projeto transforma um convite tradicional em uma experiência digital:

- 💌 carta animada de abertura;
- 🕯️ estética clássica em dourado e vermelho;
- 🌹 rosa encantada animada;
- 🍂 efeitos visuais e pétalas;
- 🎵 trilha sonora integrada;
- 📜 página principal do convite;
- 📱 layout responsivo;
- 🔗 navegação adaptada à versão web.

## 💎 Evento

O convite foi desenvolvido para os **15 anos de Yasmim**, com inspiração visual em **A Bela e a Fera**.

## 🧱 Arquitetura

A primeira versão nasceu como páginas estáticas e posteriormente foi portada para **Ruby com Sinatra**, utilizando templates ERB.

```text
Navegador
   ↓
Sinatra
   ↓
ERB Views
   ↓
HTML + CSS + JavaScript + Assets
```

## 📁 Estrutura

```text
convite-ruby/
├── api/
├── public/
│   ├── imagens/
│   ├── abertura.css
│   ├── abertura.js
│   ├── style.css
│   └── bela_e_a_fera.mp3
├── views/
│   ├── index.erb
│   └── convite.erb
├── app.rb
├── config.ru
├── Gemfile
└── vercel.json
```

## 🚀 Executando localmente

Pré-requisitos:

- Ruby
- Bundler

```bash
git clone https://github.com/brenohnrq01-ux/Convite_de_15_anos.git
cd Convite_de_15_anos/convite-ruby
bundle install
bundle exec rackup -p 4567
```

Depois acesse:

```text
http://localhost:4567
```

## 🛠️ Tecnologias

- Ruby
- Sinatra 4
- Puma
- Rackup
- ERB
- HTML5
- CSS3
- JavaScript
- Vercel

## 📌 Status

🟢 Versão funcional publicada e em evolução visual.

---

<p align="center">
  Desenvolvido por <strong>Breno Henrique</strong>
</p>
