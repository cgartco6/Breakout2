// Crypto Dashboard Configuration
// Save this file as config.js in the same directory as your HTML file

const CRYPTO_DASHBOARD_CONFIG = {
    // API Keys
    cmcApiKey: '1166d943-7350-4996-88ae-0f842df38fde',
    cgApiKey: 'CG-x4bnFrr8oQr3uoMV6Uxi7JLs',
    newsApiKey: 'f5f7faf106e34673ac7e30827f5f8534',
    
    // Additional API keys for better data accuracy
    alternativeApiKey: 'your-alternative-api-key-here',
    cryptoCompareApiKey: 'your-cryptocompare-api-key-here',
    messariApiKey: 'your-messari-api-key-here',
    
    // Update intervals in milliseconds
    updateInterval: 60000, // 1 minute
    
    // Default coins to monitor
    defaultCoins: ['BTC', 'ETH', 'BNB', 'SOL', 'XRP', 'ADA', 'DOGE', 'DOT', 'WIF', 'FIL', 'BONK', 'XMR', 'TRX'],
    
    // AI settings
    aiUpdateInterval: 120000, // 2 minutes
    predictionConfidenceThreshold: 70,
    
    // Data sources priority
    dataSources: [
        'coinmarketcap',
        'cryptocompare',
        'messari',
        'coingecko',
        'alternative'
    ]
};
