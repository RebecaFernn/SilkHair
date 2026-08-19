import { useMemo } from 'react';
import './styles/app.css';

const benefits = [
  {
    icon: '🔥',
    title: 'Proteção térmica',
    description: 'Escudo inteligente contra até 230ºC, mantendo os fios saudáveis mesmo com ferramentas de calor diárias.',
  },
  {
    icon: '💧',
    title: 'Hidratação sem pesar',
    description: 'Ácido hialurônico leve que sela a umidade sem comprometer o movimento natural.',
  },
  {
    icon: '✨',
    title: 'Brilho de estúdio',
    description: 'Refletores de luz que entregam acabamento luminoso, digno de finalização profissional.',
  },
  {
    icon: '🪞',
    title: 'Antifrizz instantâneo',
    description: 'Tecnologia antiestática que alinha os fios, reduzindo o frizz desde a primeira aplicação.',
  },
  {
    icon: '🩷',
    title: 'Maciez seda',
    description: 'Extratos botânicos deixam o toque acetinado e com caimento natural.',
  },
  {
    icon: '💨',
    title: 'Finalização fácil',
    description: 'Desembaraça, protege e prepara o cabelo em um único passo.',
  },
];

const differentiators = [
  {
    title: 'Proteção + tratamento',
    detail: 'Combina escudo térmico, hidratação profunda e controle de frizz em uma etapa.',
  },
  {
    title: 'Textura leve',
    detail: 'Fórmula em névoa cremosa que desaparece nos fios sem pesar.',
  },
  {
    title: 'Tecnologia SilkShield™',
    detail: 'Microfilme inteligente envolve cada fio, distribuindo o calor de forma homogênea.',
  },
  {
    title: 'Experiência premium',
    detail: 'Perfume autoral e embalagem escultural para transformar a rotina em ritual.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Pré-escova',
    text: 'Com o cabelo úmido, borrife SilkHair das raízes às pontas, mantendo 20cm de distância.',
  },
  {
    step: '02',
    title: 'Ativação térmica',
    text: 'Seque com secador ou difusor. A fórmula ativa o filme protetor e sela a cutícula.',
  },
  {
    step: '03',
    title: 'Finalização',
    text: 'Modele como preferir. Use novamente nas pontas para um brilho extra instantâneo.',
  },
];

const testimonials = [
  {
    name: 'Isabela Martins',
    role: 'Beauty Editor, Revista Lume',
    quote:
      'SilkHair cria um acabamento lustroso com sensação zero de produto. É o tipo de proteção smart que faltava no nécessaire premium.',
    avatar: '/avatar-isabela.jpg',
  },
  {
    name: 'Camila Freitas',
    role: 'Cabeleireira especialista em loiros',
    quote:
      'Minhas clientes amam o brilho espelhado e eu confio na proteção. Resultado profissional sem esforço.',
    avatar: '/avatar-camila.jpg',
  },
  {
    name: 'Júlia Prado',
    role: 'Cliente pilota de testes',
    quote:
      'Sou viciada em chapinha e nunca mais senti cheiro de cabelo queimado. A textura é leve e o perfume é perfeito.',
    avatar: '/avatar-julia.jpg',
  },
];

const faqs = [
  {
    question: 'SilkHair protege até qual temperatura?',
    answer: 'O escudo SilkShield™ foi projetado para suportar até 230ºC, cobrindo secador, chapinha e modeladores de cachos.',
  },
  {
    question: 'Posso usar em cabelos oleosos?',
    answer: 'Sim! A textura ultraleve distribui a hidratação sem acumular resíduos, mantendo o balanço natural.',
  },
  {
    question: 'É indicado para cabelos cacheados?',
    answer: 'Perfeitamente. Ele ajuda na definição, controla o frizz e protege durante a difusão ou fitagem com calor.',
  },
  {
    question: 'O produto tem fragrância?',
    answer: 'Possui notas suaves de peônia e musk, desenvolvidas para uma experiência elegante e nada enjoativa.',
  },
];

function useLaunchWaitlist() {
  return useMemo(
    () => () => {
      const ctaElement = document.getElementById('cta-feedback');
      if (!ctaElement) {
        return;
      }
      ctaElement.classList.add('cta-feedback-visible');
      setTimeout(() => {
        ctaElement.classList.remove('cta-feedback-visible');
      }, 3200);
    },
    []
  );
}

export default function App() {
  const launchWaitlist = useLaunchWaitlist();

  return (
    <main className="page">
      <header className="hero" id="inicio">
        <div className="hero__ornament" aria-hidden="true" />
        <div className="container hero__content">
          <div className="hero__copy">
            <span className="eyebrow">SilkHair™</span>
            <h1>Proteção extraordinária para cabelos com brilho cinematográfico.</h1>
            <p>
              O leave-in premium com tecnologia SilkShield™ que protege, trata e entrega acabamento espelhado em minutos. Uma experiência sensorial para quem exige performance sem abrir mão da estética.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn btn--primary" onClick={launchWaitlist}>
                Garantir meu kit de lançamento
              </button>
              <a href="#como-funciona" className="btn btn--ghost">
                Entenda a fórmula
              </a>
            </div>
            <div className="hero__badges">
              <div>
                <strong>+95%</strong>
                <span>Perceberam menos quebra em 4 semanas*</span>
              </div>
              <div>
                <strong>8 em 10</strong>
                <span>Sentiram toque seda desde a primeira aplicação</span>
              </div>
            </div>
            <small className="hero__disclaimer">*Painel com 54 participantes, estudo interno SilkLab 2026.</small>
          </div>
          <div className="hero__visual">
            <div className="hero__bottle" role="img" aria-label="Frasco SilkHair com textura rosa perolada" />
            <div className="hero__card">
              <span>Edição limitada</span>
              <strong>SilkHair Ritual Set</strong>
              <p>Leave-in + escova côncava + necessaire em seda vegana.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="section section--benefits" id="beneficios">
        <div className="container">
          <header className="section__header">
            <span className="eyebrow">Benefícios</span>
            <h2>Resultado profissional sem sair de casa.</h2>
            <p>
              Cada borrifada envolve o fio com ativos inteligentes que protegem do calor, controlam o frizz e revelam um brilho líquido com toque acetinado.
            </p>
          </header>
          <div className="grid grid--benefits">
            {benefits.map((benefit) => (
              <article className="card card--benefit" key={benefit.title}>
                <span className="card__icon" aria-hidden="true">
                  {benefit.icon}
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--identity" id="identidade">
        <div className="container identity">
          <aside className="identity__swatch" aria-hidden="true">
            <div className="identity__texture" />
            <div className="identity__model" />
          </aside>
          <div className="identity__content">
            <span className="eyebrow">Nossa identidade</span>
            <h2>SilkHair é sofisticada, moderna e acolhedora.</h2>
            <p>
              Desenvolvemos uma experiência que combina o cuidado premium com a leveza do cotidiano. Cores suaves, formas orgânicas e uma tipografia elegante traduzem a promessa de brilho e movimento.
            </p>
            <div className="identity__palette">
              <div>
                <span style={{ backgroundColor: 'var(--color-soft-pink)' }} />
                <small>Soft Pink · #F7DDE5</small>
              </div>
              <div>
                <span style={{ backgroundColor: 'var(--color-rose-pink)' }} />
                <small>Rose Pink · #EFAFC3</small>
              </div>
              <div>
                <span style={{ backgroundColor: 'var(--color-baby-blue)' }} />
                <small>Baby Blue · #C9E3F2</small>
              </div>
              <div>
                <span style={{ backgroundColor: 'var(--color-powder-blue)' }} />
                <small>Powder Blue · #8FB9D4</small>
              </div>
              <div>
                <span style={{ backgroundColor: 'var(--color-deep-slate)' }} />
                <small>Deep Slate · #394452</small>
              </div>
            </div>
            <div className="identity__typography">
              <div>
                <h4>Playfair Display</h4>
                <p>“Seu cabelo merece proteção extraordinária.”</p>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>Montserrat</h4>
                <p style={{ fontFamily: 'var(--font-body)' }}>Leve, moderna e perfeita para comunicar benefícios com clareza.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="diferenciais">
        <div className="container">
          <header className="section__header section__header--center">
            <span className="eyebrow">Diferenciais</span>
            <h2>Cada detalhe foi pensado para cabelos impecáveis.</h2>
          </header>
          <div className="grid grid--differentials">
            {differentiators.map((item) => (
              <article className="card card--differential" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--how" id="como-funciona">
        <div className="container">
          <header className="section__header">
            <span className="eyebrow">Como funciona</span>
            <h2>Transformação em três passos.</h2>
          </header>
          <div className="timeline">
            {howItWorks.map((item) => (
              <article className="timeline__item" key={item.step}>
                <span className="timeline__step">{item.step}</span>
                <div className="timeline__content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--testimonial" id="prova-social">
        <div className="container">
          <header className="section__header section__header--center">
            <span className="eyebrow">Prova social</span>
            <h2>Favorito entre especialistas e beauty lovers.</h2>
            <p>
              Feedbacks reais da nossa comunidade de testes, que avaliou SilkHair durante 60 dias antes do lançamento oficial.
            </p>
          </header>
          <div className="grid grid--testimonials">
            {testimonials.map((item) => (
              <article className="card card--testimonial" key={item.name}>
                <div className="card__avatar" style={{ backgroundImage: `url(${item.avatar})` }} aria-hidden="true" />
                <blockquote>“{item.quote}”</blockquote>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--pricing" id="oferta">
        <div className="container pricing">
          <div className="pricing__content">
            <span className="eyebrow">Oferta de lançamento</span>
            <h2>Ritual completo SilkHair</h2>
            <p>
              Garanta seu kit com edição numerada, incluindo o leave-in SilkHair, escova térmica côncava e necessaire em seda vegana.
            </p>
            <ul>
              <li>Entrega expressa para capitais selecionadas;</li>
              <li>Garantia de 30 dias ou seu dinheiro de volta;</li>
              <li>Clube SilkLab com tutoriais e webinars exclusivos.</li>
            </ul>
          </div>
          <aside className="pricing__card">
            <div className="pricing__highlight">Edição limitada</div>
            <div className="pricing__value">
              <span className="pricing__currency">R$</span>
              <span className="pricing__amount">189</span>
              <span className="pricing__frequency">à vista</span>
            </div>
            <p className="pricing__installments">ou 3x de R$ 63 sem juros</p>
            <button type="button" className="btn btn--primary btn--full" onClick={launchWaitlist}>
              Entrar na lista VIP
            </button>
            <small>Primeiras 300 assinantes recebem brinde exclusivo SilkGlow.</small>
          </aside>
        </div>
      </section>

      <section className="section section--faq" id="faq">
        <div className="container">
          <header className="section__header section__header--center">
            <span className="eyebrow">FAQ</span>
            <h2>Tire suas dúvidas antes do lançamento.</h2>
          </header>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta" id="cta">
        <div className="container cta">
          <div className="cta__copy">
            <h2>Receba seu convite para o pré-lançamento SilkHair.</h2>
            <p>
              Cadastre-se na lista VIP e receba a abertura antecipada de vendas, além de conteúdos exclusivos sobre cuidados térmicos.
            </p>
            <form
              className="cta__form"
              onSubmit={(event) => {
                event.preventDefault();
                launchWaitlist();
              }}
            >
              <label htmlFor="email">Email</label>
              <div className="cta__input-group">
                <input id="email" type="email" name="email" placeholder="voce@exemplo.com" required />
                <button type="submit" className="btn btn--primary">
                  Quero meu convite
                </button>
              </div>
            </form>
            <span id="cta-feedback" className="cta__feedback">
              Convite reservado! Enviaremos novidades muito em breve.
            </span>
          </div>
          <div className="cta__visual" aria-hidden="true">
            <div className="cta__texture" />
            <div className="cta__bottle" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__content">
          <span className="footer__logo">SilkHair™</span>
          <nav>
            <a href="#beneficios">Benefícios</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#prova-social">Prova social</a>
            <a href="#oferta">Oferta</a>
            <a href="#faq">FAQ</a>
          </nav>
          <small>© {new Date().getFullYear()} SilkHair. Experiência premium de proteção térmica.</small>
        </div>
      </footer>
    </main>
  );
}
