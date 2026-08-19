# SilkHair — leave-in/protetor térmico premium
“Proteção, brilho e movimento.”

## Integrantes

- Rebeca Fernandes

## Sobre o produto

SilkHair é uma marca de haircare premium focada em proteção, tratamento e beleza dos fios. O produto principal é um leave-in com proteção térmica, desenvolvido para proteger os cabelos do calor do secador, chapinha e modeladores, enquanto proporciona maciez, brilho e aparência saudável.

SilkHair é um leave-in premium com proteção térmica desenvolvido para quem deseja proteger os fios das altas temperaturas sem abrir mão de maciez, brilho e movimento.

Sua fórmula combina proteção contra o calor, hidratação e ação antifrizz, criando uma camada protetora sobre os fios e deixando o cabelo mais sedoso, alinhado e com aparência saudável.

### Nosso público-alvo

Mulheres de aproximadamente 18 a 35 anos que:

- Utilizam secador, chapinha ou modelador com frequência;
- Se preocupam com danos causados pelo calor;
- Buscam cabelos mais macios e brilhantes;
- Gostam de produtos de beleza com estética premium;
- Valorizam praticidade na rotina;
- Estão dispostas a investir mais em produtos de tratamento e proteção capilar.

### A SilkHair é

Sofisticada · Feminina · Delicada · Moderna · Confiável · Minimalista

A comunicação foi pensada para ser elegante e acolhedora, evitando linguagem excessivamente técnica ou agressiva de vendas.

### Identidade

| Cor | Hex | Aplicação |
| --- | --- | --- |
| Soft Pink | `#F7DDE5` | Fundo e áreas suaves |
| Rose Pink | `#EFAFC3` | Destaques e detalhes |
| Baby Blue | `#C9E3F2` | Elementos secundários |
| Powder Blue | `#8FB9D4` | Botões e CTAs |
| Pearl | `#FFFDFC` | Fundo principal |
| Deep Slate | `#394452` | Textos |

**Tipografia**

- Título: Playfair Display — elegante e sofisticada, ideal para destacar frases como “Seu cabelo merece proteção extraordinária”.
- Texto: Montserrat — moderna, limpa e fácil de ler em botões, descrições e informações do produto.

**Elementos visuais**

- Linhas finas e delicadas
- Formas orgânicas
- Texturas que remetem à seda
- Reflexos suaves
- Fotografias de cabelos brilhantes e naturais
- Frascos minimalistas
- Uso generoso de espaço em branco

## Jornada de construção

### Ideia inicial

A ideia surgiu observando produtos que mais pesquiso e consumo no dia a dia. Durante a busca, considerei óleos capilares, tônicos e máscaras de tratamento, mas percebi que a maior preocupação recorrente é proteger os fios do calor. Já testei diversas marcas e ainda sentia falta de algo que entregasse proteção real com acabamento premium.

### Pesquisa e referências

Pesquisei feedbacks e anúncios de produtos para cabelos em redes sociais (Instagram, TikTok) e também em sites de marcas e revendedoras. Estudei como as marcas premium se posicionam, quais cores e texturas utilizam e quais promessas reforçam em seus materiais.

### Definição da narrativa

Quis construir uma narrativa que combinasse tecnologia (SilkShield™) com ritualidade. O objetivo é que a usuária sinta que o cuidado térmico pode ser um momento de autocuidado e não apenas uma obrigação técnica.

### Wireframe e organização

Organizei a landing page em blocos clássicos: hero forte com CTA, benefícios, diferenciais, prova social, explicação de uso, oferta, FAQ e CTA final com formulário. Cada sessão recebeu conteúdo textual alinhado com o posicionamento premium.

### Decisões de UI

- Apostei em um gradiente delicado (rosa + azul) para transmitir suavidade e futurismo;
- Utilizei cards translúcidos com blur para reforçar a estética high-end;
- Inserção de dados fictícios e métricas para reforçar credibilidade;
- Componentes responsivos utilizando CSS Grid para garantir uma experiência fluida em desktop e mobile.

### Desenvolvimento

- Projeto criado com Vite + React;
- Componentizei os conteúdos em arrays para facilitar manutenção de benefícios, diferenciais, depoimentos e FAQ;
- Criei um CTA funcional que ativa feedback visual simulando a reserva de convite;
- Estilização com CSS puro, aproveitando variáveis de design tokens e gradientes para reproduzir a identidade descrita.

### Próximos passos

- Substituir imagens mockadas pelos assets finais no diretório indicado;
- Validar acessibilidade (leitura por leitores de tela, contraste, navegação via teclado);
- Implementar animações suaves para entradas de seção;
- Incluir testes de usabilidade com participantes reais para ajustar linguagem e fluxo.

## Como rodar o projeto

```bash
npm install
npm run dev
```

A aplicação será executada em modo desenvolvimento na porta sugerida pelo Vite. Para gerar uma build de produção, use:

```bash
npm run build
```

## Estrutura de pastas

```
.
├── assets/                # Coloque aqui as imagens listadas em assets.txt
├── src/
│   ├── styles/
│   │   ├── app.css
│   │   └── global.css
│   │   └── tokens.css
│   ├── App.jsx
│   └── main.jsx
├── assets.txt
├── index.html
├── package.json
└── vite.config.js
```

## Licença

Projeto acadêmico. Utilize como base de estudo e customização pessoal.


### Uso de IA

Notas de 1-5

- gpt-5.6-sol - auxilio na criação da marca e prompts de criação do código e imagens
Nota: 4 : Para a criação de ideias e prompts para serem utilizados ele foi extremamente rápido e detalhista com o que era pedido porém tive algumas dificuldades com a troca dentro da azure

- gpt-5-codex - utilização para criação do código
Nota 4: Ele criou tudo com todo o contexto passado porém teve algumas sequelas em questão ao design

- gpt-5.6-terra - Auxilio com ajustes feitos ao longo do desenvolvimento
Nota: 5 - Ajustes perfeitos, ele entendia bem quando queria adicionar algo ou posicionar de maneira diferente



### Evolução da solução

O que mudou entre a primeira ideia e a versão final?

mudei ordens das camadas de imagens e itens, como construi um contexto solido no começo e atendeu bem o que queria, fui só ajustando e adicionando coisas referente a imagens.


### Resultado final

Gostei demais do resultado, porém tive dificuldade somente com a geração de imagens que tive que fazer por fora com meu chat por fora e se tivesse mais tempo trabalharia em como fazer essas gerações já no pedido de criação ou pelo proprio opencode com outra llm, sem contar isso ele até me direcionou aonde colocar cada imagem, pois solicitei que já separasse isso e quais tipos de iamgem colocar.

