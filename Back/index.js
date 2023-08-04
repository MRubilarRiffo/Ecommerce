const server = require('./src/server');
const axios = require('axios');
const { conn } = require('./src/db');

const PORT = 3001;

conn.sync({ force: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => console.log(error));