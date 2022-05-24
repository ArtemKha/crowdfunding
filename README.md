# Crowdfunding Ethereumn App

This app (crowdfunding with smart contracts) is a self-executing agreement between investor (approver) and fundraiser (manager) depending on which process needs to be automated and put into the blockchain ecosystem.

After money was raised by project manager creates request to spend money to promote his product/project development.

## Setup

Set parameters in .env file:

```zsh
infuraEndpointHttps="https://rinkeby.infura.io/v3/<infura-api-key>"
accountMemo="one two three five six ..."
```

## Commands

`yarn contract:build` – creates abi and bytecode of contract in json file

`yarn contract:deploy` – deploys to ethereum network (uses infura api from .env config)

`yarn contract:test` – run tests for contract
