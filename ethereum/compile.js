const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const file = "Campaign.sol";
const campaignPath = path.resolve(__dirname, "contracts", file);
const content = fs.readFileSync(campaignPath, "utf-8");
const input = {
  language: "Solidity",
  sources: {
    [file]: {
      content,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
const compiled = solc.compile(JSON.stringify(input));
const output = JSON.parse(compiled).contracts[file];

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
