const dc = require('./discord');
const { sig } = require("./utils/sig");

(async () => {
    sig();

    await dc.initialize();
    // here is where you enter your email and password
    await dc.login('your email', 'your password')

    await dc.likeChannelProcess('your server id', 'your channel id', 1) // 1 = 1 minute 

    debugger;

})();
