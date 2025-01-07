
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ynQijYqR#3n4i6k4KvApGHkRzPwMhsqVDpbY7m0HFis_b7Y5NMng",
};
