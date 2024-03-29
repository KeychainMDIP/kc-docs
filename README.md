# KeyChain Documentation Site

This repo contains the source code for the Keychain documentation site. This website is built using [Docusaurus](https://docusaurus.io/).

### Installation

1. Clone the repo:

```sh
git clone https://github.com/keychainmdip/kc-docs
cd kc-docs
```

1. Pull the contents from the `docs` submodule:

```sh
git submodule init
git submodule update --remote --merge
```

This project sources the documentation directly from the `kc` repository.


1. Install dependencies:

```sh
yarn install
```

### Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
