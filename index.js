const bot = require(__dirname + '/lib/amd');
const { VERSION } = require(__dirname + '/config');

// Assuming bot provides a logging/debugging tool
const { Debug } = bot;

const start = async () => {
    try {
        console.log(`Starting ayanokoji-md ${VERSION}`);

        console.time('Initialization');
        await bot.init();
        console.timeEnd('Initialization');
        console.log('🥰 Ayanokoji-md Bot is initializing...');
        
        console.time('Database Sync');
        await bot.DATABASE.sync();
        console.timeEnd('Database Sync');
        console.log('💾 Database synchronized successfully.');
        
        console.time('Bot Connect');
        await bot.connect();
        console.timeEnd('Bot Connect');
        console.log('🤖 Bot connected and ready to go!');
        
        // Log the status
        console.log('Bot is running...');
    } catch (error) {
        console.error('Oops, something went wrong😶: ' + error);
        // Optionally, add a delay before retrying or notify and exit
        console.error('Retrying in 5 seconds...');
        setTimeout(start, 5000); // Retry after 5 seconds
    }
};

start();
