const start = async () => {
    Debug.info(`Starting ayanokoji-md ${VERSION}`)
    try {
        await bot.init();
        console.log('🥰 Ayanokoji-md Bot is initializing...');
        
        await bot.DATABASE.sync();
        console.log('💾 Database synchronized successfully.');
        
        await bot.connect();
        console.log('🤖 Bot connected and ready to go!');
    } catch (error) {
        Debug.error('Oops, something went wrong😶: ' + error);
        // Optionally, add a delay before retrying or notify and exit
        console.error('Retrying in 5 seconds...');
        setTimeout(start, 5000); // Retry after 5 seconds
    }
};

start(); // Call the function to start the bot
