import fs from 'fs';
// import fetch from 'node-fetch';

const getAdidas = async (start) => {
    const headers = {
        'Accept-Language': 'es-ES,es;q=0.9',
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(`https://www.adidas.cl/api/plp/content-engine?query=hombre&start=${start}`, { headers });

        if (!response.ok) {
            console.log('Error: ' + response.statusText);
            return;
        }

        const data = await response.json();

        if (data.raw && data.raw.itemList && data.raw.itemList.items) {
            return data.raw.itemList.items;
        } else {
            console.log('data.raw.itemList.items[0] not found in the response');
        }

    } catch (error) {
        console.log(error.message);
    }
};

const start = 0;
const limit = 3936;
const step = 48;

let promises = [];

for (let i = start; i <= limit; i += step) {
    promises.push(getAdidas(i));
}

Promise.all(promises)
    .then((data) => {
        // Elimina los elementos undefined del array (si la función getAdidas devuelve undefined)
        data = data.filter(item => item !== undefined);
        fs.writeFileSync('output.json', JSON.stringify(data, null, 2)); 
        console.log('Data saved in output.json');
    })
    .catch(error => console.error(error));
