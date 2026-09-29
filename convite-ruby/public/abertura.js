
(() => {
  const abertura = document.querySelector('main');
  const cena = document.querySelector('.cena');
  const envelope = document.querySelector('.envelope');
  const carta = document.querySelector('.carta');
  const selo = document.getElementById('abrir-envelope');
  const link = document.querySelector('.entrar');
  const instrucao = document.querySelector('.instrucao');

  const musica = document.getElementById('musica');
  const botaoMusica = document.getElementById('botao-musica');
  const telaConvite = document.getElementById('tela-convite');

  const reduzirMovimento = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );

  let abriu = false;
  let entrando = false;
  let temporizadorEntrada;

  musica.volume = 0.5;

  function ajustarAltura() {
    cena.style.setProperty(
      '--subida',
      `${carta.offsetHeight + 5}px`
    );
  }

  function atualizarBotaoMusica() {
    const pausada = musica.paused;

    botaoMusica.textContent = pausada ? '♫' : 'Ⅱ';
    botaoMusica.setAttribute(
      'aria-label',
      pausada ? 'Reproduzir música' : 'Pausar música'
    );
    botaoMusica.title = pausada
      ? 'Reproduzir música'
      : 'Pausar música';
  }

  function tocarMusica() {
    botaoMusica.hidden = false;

    musica.play().catch(() => {
      // O botão permite tentar novamente com um toque.
      atualizarBotaoMusica();
    });
  }

  botaoMusica.addEventListener('click', () => {
    if (musica.paused) {
      tocarMusica();
    } else {
      musica.pause();
    }
  });

  musica.addEventListener('play', atualizarBotaoMusica);
  musica.addEventListener('pause', atualizarBotaoMusica);

  function entrarNoConvite() {
    if (entrando) return;

    entrando = true;
    window.clearTimeout(temporizadorEntrada);

    instrucao.textContent = 'Abrindo seu convite…';

    telaConvite.addEventListener('load', () => {
      abertura.hidden = true;
      telaConvite.hidden = false;

      document.body.classList.add('exibindo-convite');

      telaConvite.focus();

      // Não pausamos nem recriamos o áudio.
    }, { once: true });

    // Carrega o convite dentro da página atual.
    // Não use window.location.assign() aqui.
    telaConvite.src = link.href;
  }

  selo.addEventListener('click', () => {
    if (abriu) return;

    abriu = true;

    // Inicia no toque do visitante para evitar depender
    // de uma tentativa de reprodução automática atrasada.
    tocarMusica();

    ajustarAltura();

    selo.setAttribute('aria-expanded', 'true');
    cena.classList.add('aberta');
    envelope.classList.add('aberto');

    instrucao.textContent =
      'Uma noite especial espera por você…';

    window.setTimeout(() => {
      carta.inert = false;
      selo.disabled = true;

      if (!entrando) {
        link.focus({ preventScroll: true });

        // Oito segundos depois de a carta abrir.
        temporizadorEntrada = window.setTimeout(
          entrarNoConvite,
          8000
        );
      }
    }, reduzirMovimento.matches ? 0 : 1650);
  });

  link.addEventListener('click', evento => {
    evento.preventDefault();
    entrarNoConvite();
  });

  window.addEventListener('resize', ajustarAltura);
  document.fonts.ready.then(ajustarAltura);

  ajustarAltura();
  atualizarBotaoMusica();
})();
