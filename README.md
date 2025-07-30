# 🧩 Host - Micro Frontends Container

Este projeto é o **host** principal responsável por integrar múltiplos **Micro Frontends (MFEs)** utilizando **Module Federation** com **Vite**. Ele serve como ponto de entrada da aplicação, carregando dinamicamente os MFEs via URLs remotas.

---

## 📦 Tecnologias

- React
- Vite
- TailwindCSS
- Module Federation (`@originjs/vite-plugin-federation`)
- Docker + NGINX

---

## 🚀 Rodando o projeto localmente

### Pré-requisitos

- Node.js >= 22
- Docker

---

### 🧪 Rodando em ambiente de desenvolvimento

    ```bash
    # Instale as dependências
    npm install

    # Inicie o projeto em modo dev
    npm run dev


    A aplicação estará disponível em:
    http://localhost:5173



### 🔗 Micro Frontends Consumidos

O host está atualmente configurado para consumir os seguintes MFEs:
    ```bash
    remotes: {
      welcome: "https://teddy-welcome.vercel.app/assets/remoteEntry.js",
      clients: 'https://teddy-clients.vercel.app/assets/remoteEntry.js',
    }



### 🔗 Repositórios dos Micro Frontends e Design System

Este projeto depende dos seguintes repositórios:

    🧱 Design System
    🔗 https://github.com/MvFranca/teddy-design-system

    👥 MFE - Clients
    🔗 https://github.com/MvFranca/teddy-clients

    🙌 MFE - Welcome
    🔗 https://github.com/MvFranca/teddy-welcome


  Para rodar localmente, basta acessar os repositórios dos mfes, e executar `npm run preview`, e substituir as urls presentes no `vite.config.ts` pelas geradas no preview.