const dotenv = require("dotenv");
const { parsed } = dotenv.config({ path: "./ethereum/.env" });

module.exports = {
  config: {
    infuraEndpointHttps: parsed.infuraEndpointHttps,
    accountMemo: parsed.accountMemo,
    factoryAddress: parsed.factoryAddress,
  },
};
