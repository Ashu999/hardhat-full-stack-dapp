import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';

const ALCHEMY_GOERLI_HTTPS = process.env.ALCHEMY_GOERLI_HTTPS || 'GOERLI HTTPS';
const GOERLI_PRIVATE_KEY =
  process.env.GOERLI_PRIVATE_KEY || 'YOUR GOERLI PRIVATE KEY';

const ALCHEMY_SEPOLIA_HTTPS =
  process.env.ALCHEMY_SEPOLIA_HTTPS || 'SEPOLIA HTTPS';
const SEPOLIA_PRIVATE_KEY =
  process.env.SEPOLIA_PRIVATE_KEY || 'YOUR SEPOLIA PRIVATE KEY';

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    // goerli: {
    //   url: `${ALCHEMY_GOERLI_HTTPS}`,
    //   accounts: [GOERLI_PRIVATE_KEY],
    // },
    sepolia: {
      url: `${ALCHEMY_SEPOLIA_HTTPS}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};

export default config;
