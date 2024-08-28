const bot = require(__dirname + '/lib/amd')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Starting ayanokoji-md ${VERSION}`)
  try {
    await bot.init();
    // Personalized startup message
    console.log('🥰 Ayanokoji-md Bot is initializing...');
    
    await bot.DATABASE.sync();
    console.log('💾 Database synchronized successfully.');
    
    await bot.connect();
    console.log('🤖 Bot connected and ready to go!');
} catch (error) {
    Debug.error('Oops, something went wrong😶: ' + error);
    start(); // Or remove this line if you don't want the bot to keep retrying
}
