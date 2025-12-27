# Portfolio 3D

Projeto Next.js unificado com componentes 3D usando Three.js e blog integrado.

## Estrutura do Projeto

```
portfolio-3d/
├── app/
│   ├── api/              # API routes para o blog
│   │   └── posts/
│   ├── blog/             # Páginas do blog
│   │   ├── [slug]/
│   │   ├── posts/        # Posts markdown
│   │   ├── layout.tsx
│   │   └── page.js
│   ├── components/
│   │   ├── 3d/           # Componentes Three.js
│   │   │   ├── Scene3D.tsx
│   │   │   └── Model3D.tsx
│   │   └── Utterance/    # Componente de comentários
│   ├── context/
│   │   └── ThemeContext.js
│   ├── globals.css
│   ├── layout.tsx        # Layout raiz
│   └── page.tsx          # Página inicial
├── lib/                  # Utilitários
│   ├── fontawesome.js
│   └── posts.js
├── public/
│   └── boneco.glb        # Modelo 3D
└── package.json
```

## Tecnologias

### Core
- **Next.js 16.1.1** - Framework React com App Router
- **React 19.2.3** - Biblioteca UI
- **TypeScript 5.9.3** - Tipagem estática

### 3D
- **Three.js 0.182.0** - Biblioteca 3D WebGL
- **@react-three/fiber 9.4.2** - React renderer para Three.js
- **@react-three/drei 10.7.7** - Helpers para React Three Fiber

### Blog & UI
- **Tailwind CSS 3.4.1** - Framework CSS utility-first
- **Framer Motion 12.0.11** - Animações
- **marked 15.0.6** - Markdown parser
- **gray-matter 4.0.3** - Frontmatter parser
- **FontAwesome 6.7.2** - Ícones

### Outros
- **DOMPurify 3.2.4** - Sanitização HTML
- **React Spinners 0.15.0** - Loading indicators
- **React Type Animation 3.2.0** - Efeitos de digitação
- **@vercel/analytics 1.5.0** - Analytics

## Scripts

```bash
npm run dev   # Servidor de desenvolvimento
npm run build # Build de produção
npm start     # Servidor de produção
npm run lint  # Linter
```

## Componentes 3D

Os componentes 3D estão em `app/components/3d/`:

- **Scene3D.tsx**: Componente principal da cena 3D com Canvas, luzes, controles e background gradient
- **Model3D.tsx**: Carrega e renderiza o modelo GLB com centralização automática

### Características 3D Implementadas
- Modelo 3D rotacionando automaticamente (sentido anti-horário)
- Câmera com movimento horizontal livre e vertical limitado
- Zoom desabilitado (distância fixa)
- Degradê de fundo azul (de baixo para cima)
- Iluminação com luz azul (#0C73CD) de cima
- Container circular (300x300px)

## Blog

Sistema de blog com:
- Posts em Markdown (em `app/blog/posts/`)
- API routes para listar e buscar posts
- Dark/Light mode toggle
- Theme context global
- Comentários via Utterances (configurar repo no Comments.js)

## Configuração

### TypeScript
- Suporta arquivos `.js`, `.jsx`, `.ts`, `.tsx`
- Modo strict desabilitado para compatibilidade

### Next.js
- App Router
- Turbopack para builds
- Transpila Three.js
- Suporta múltiplas extensões de página

## Próximos Passos

1. Integrar componentes 3D na página inicial
2. Criar header/navigation
3. Adicionar mais posts ao blog
4. Configurar Utterances no Comments.js
5. Personalizar tema e cores
6. Adicionar mais seções ao portfolio

## Modelo 3D

O modelo 3D está em `public/boneco.glb`. Para trocar:
1. Substitua o arquivo GLB em `/public`
2. Atualize o caminho em `Model3D.tsx` (linha 8)

## Desenvolvimento

O projeto está configurado para aceitar tanto TypeScript quanto JavaScript. Os componentes 3D usam TypeScript, enquanto o blog usa JavaScript.

Build testado e funcionando sem erros! ✅
