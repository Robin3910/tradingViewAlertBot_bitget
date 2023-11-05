const API_KEY = '';
const SECRET_KEY = '';
const PHRASE = ""
const PORT = 80;
const STOP_LOSS = 0.02;
const STOP_PROFIT = 0.007;
const WHITE_IP_CONFIG = ['52.89.214.238',
    '139.180.196.157',
    '34.212.75.30',
    '54.218.53.128',
    '52.32.178.7',
    '127.0.0.1',
    '103.254.155.26'];
const env = "prd";
const BASE_URL = env === "prd" ? "https://fapi.binance.com" : "https://testnet.binancefuture.com";
module.exports = {
    PORT,
    API_KEY,
    SECRET_KEY,
    BASE_URL,
    WHITE_IP_CONFIG,
    STOP_PROFIT,
    STOP_LOSS,
    PHRASE
}
