const https = require('https');
const fs = require('fs');

const url = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_1920,q_auto/https://artblocks-mainnet.s3.amazonaws.com/";
const totalAmount = 750;
const delay = 0;

if (!fs.existsSync('./images')) {
    fs.mkdirSync('./images');
}

async function downloadImage(i) {
    const imageName = `98${String(i).padStart(6, '0')}.png`;
    const newImageName = `${String(i + 1).padStart(3, '0')}.png`;
    const imageUrl = url + imageName;

    return new Promise((resolve, reject) => {
        https.get(imageUrl, (response) => {
            response.on('error', error => {
                reject(error);
            });

            response.pipe(fs.createWriteStream(`./images/${newImageName}`));

            response.on('end', () => {
                console.log(`Finished downloading image ${i + 1}`);
                resolve();
            });
        });
    });
}

async function downloadAllImages() {
    const imagePromises = [];
    for (let i = 0; i < totalAmount; i++) {
        imagePromises.push(downloadImage(i));
    }
    await Promise.all(imagePromises);
    console.log(`Finished downloading  images`);
}


downloadAllImages();
