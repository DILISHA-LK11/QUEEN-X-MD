
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-MD=3VtRSQCZ#-2AOqH7I8Sn016Lzv5Q2Mmc8SG8oPNxF-IQdHcvnRTo",
};
