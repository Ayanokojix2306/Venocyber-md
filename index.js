const bot = require(__dirname + '/lib/amd');
const { VERSION } = require(__dirname + '/config');

const MAX_RETRIES = 5; // Maximum number of retries
let retryCount = 0;

const start = async () => {
    try {
        console.log(`Starting ayanokoji-md ${VERSION}`);

        await bot.init();
        console.log('🥰 Ayanokoji-md Bot is initializing...');
        
        await bot.DATABASE.sync();
        console.log('💾 Database synchronized successfully.');
        
        await bot.connect();
        console.log('🤖 Bot connected and ready to go!');
        
        // Log the status
        console.log('Bot is running...');
    } catch (error) {
        console.error('Oops, something went wrong😶: ' + error);

        retryCount++;
        if (retryCount <= MAX_RETRIES) {
            console.error(`Retrying in 5 seconds... (${retryCount}/${MAX_RETRIES})`);
            setTimeout(start, 5000); // Retry after 5 seconds
        } else {
            console.error('Maximum retries reached. Exiting...');
            process.exit(1); // Exit the process after reaching the max retries
        }
    }
};

start();
