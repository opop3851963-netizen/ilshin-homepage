const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const urls = [
  'https://ilshinid.com/wp-content/uploads/2026/10/ilshin-classroom-1.jpg',
  'https://ilshinid.com/wp-content/uploads/2026/10/ilshin-company.jpg',
  'https://ilshinid.com/wp-content/uploads/2026/10/ilshin-public-1.jpg',
  'https://ilshinid.com/wp-content/uploads/2026/10/ilshin-school-other-1.jpg',
  'https://ilshinid.com/wp-content/uploads/2026/10/ilshin-kindergarten-1.jpg',
  'https://ilshinid.com/wp-content/uploads/2026/10/ilshin-music-1.jpg',
  'https://ilshinid.com/wp-content/uploads/2026/10/ilshin-broadcast-1.jpg',
  'https://ilshinid.com/wp-content/uploads/2026/10/ilshin-multipurpose-1.jpg',
  'https://ilshinid.com/wp-content/uploads/2026/10/ilshin-counsel-1.jpg',
  'https://ilshinid.com/wp-content/uploads/2026/10/ilshin-faculty-1.jpg',
  'http://ilshin385.mycafe24.com/wp-content/uploads/2026/10/ilshin-cert-business-reg.jpg',
  'http://ilshin385.mycafe24.com/wp-content/uploads/2026/10/ilshin-cert-construction.jpg',
  'http://ilshin385.mycafe24.com/wp-content/uploads/2026/10/ilshin-cert-interior.jpg',
  'http://ilshin385.mycafe24.com/wp-content/uploads/2026/10/ilshin-cert-women.jpg'
];

const destDir = path.join(__dirname, '..', 'assets', 'images');
fs.mkdirSync(destDir, { recursive: true });

function download(url) {
  return new Promise((resolve) => {
    const filename = path.join(destDir, url.split('/').pop());
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log('Failed:', url, res.statusCode);
        return resolve();
      }
      const file = fs.createWriteStream(filename);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Saved:', filename);
        resolve();
      });
    }).on('error', (err) => {
      console.log('Error:', url, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const u of urls) {
    await download(u);
  }
  console.log('All image downloads finished');
})();
