# Fork deste portfólio

Este projeto é um clone local do repositório upstream [HasanAshab/portfolio](https://github.com/HasanAshab/portfolio) (design original com créditos no README deles).

## 1. Criar o fork no GitHub

1. Abre **https://github.com/HasanAshab/portfolio**
2. Clica em **Fork**
3. Escolhe a tua conta / organização e confirma

## 2. Ligar o teu repositório a este clone

Na pasta `patrick-portfolio` (este projeto):

```bash
git remote add origin https://github.com/TEU_USUARIO/TEU_REPO.git
git branch -M main
git add .
git commit -m "Personaliza Patrick Soares — site config e metadados"
git push -u origin main
```

O remote `upstream` já aponta para o repo do Hasan (para puxares atualizações no futuro):

```bash
git fetch upstream
git merge upstream/main
```

## 3. Variáveis de ambiente

Copia `.env.example` para `.env.local` (se existir) e preenche o que usares (Supabase, Resend, etc., conforme o projeto original). Para começar só com o site estático:

```env
NEXT_PUBLIC_SITE_URL=https://teu-dominio.vercel.app
```

## 4. Onde editar conteúdo

| O quê | Onde |
|--------|------|
| Nome, email, links, local | `src/config/site.ts` |
| Skills / ícones | `src/constants/index.ts` + imagens em `public/` |
| Projetos | `src/components/main/Projects.tsx` |
| Experiência / timeline | `src/components/main/Timeline.tsx` |
| SEO / JSON-LD | `src/app/layout.tsx` |
| Página inicial (ordem das secções) | `src/app/page.tsx` |

## 5. Licença e créditos

Mantém o ficheiro `LICENSE` e as menções aos autores originais conforme a licença MIT do repositório upstream.
