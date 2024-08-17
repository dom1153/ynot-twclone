# Y Not - Twitter Clone

![alt text](ynot-tw-clone-thumb.jpg)

![Vercel](https://vercelbadge.vercel.app/api/dom1153/ynot-twclone)

A full stack twitter clone built with React and Next.js for educational purposes.

See the website live [here](https://ynot-twclone.vercel.app/).

## Features

1. Create posts.
2. Like and comment other user posts.
3. Following other users on the platform.
4. Responsive web design.
5. User Authentication.
6. Image Uploading.

### Technologies

- React
- Next.js
- NextAuth.js
- Tailwind CSS
- MongoDB
- Prisma
- Typescript

## Prerequisites (for running locally)

A local `npm` install is required.

If you use Visual Studio Code you can use the [Dev Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension. See instructions [below](#visual-studio-code-dev-container-extension)

A flake is included if you're using the [nix package manager](https://nixos.org/).

You will need to have access to a mongodb database to include in a `.env` file

### Getting Started

```bash
npm install
npm run dev
# or use yarn / pnpm / bun equivalents
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Visual Studio Code Dev Container Extension

Run `> Dev Containers: Rebuild and reopen in container`

#### Dev Container (cli)

This requires the standalone dev container [cli app](https://github.com/devcontainers/cli)

```bash
cd .devcontainer
devcontainer up --workspace-folder $PWD/..
devcontainer exec --workspace-folder $PWD/.. npm run dev
```

#### Nix / NixOS

```bash
nix develop
npm run dev
```

### Setting up the `.env` file

A `.env` file is necesssary to issue and retrieve database information from mongodb. The nextauth secrets can be random strings, while the database url must be provided from a mongodb connection string. Sample `.env` file contents are provided below:

```conf
DATABASE_URL="mongodb+srv://USERNAMEmongodb:XXXXXXXXX@clusterXXXX.XXXXXXX.mongodb.net/test"
NEXTAUTH_JWT_SECRET="ARBITRARY_JWT_SECRET"
NEXTAUTH_SECRET="ARBITRARY_SECRET"
```

## Origin of the Name

The name 'Y Not' is a legally distinct variant of 'X' (formerly known as twitter), and simply because why not.
