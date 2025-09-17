import { qrcode } from './qrUrl.js';

const result = await qrcode('text', 'https://local.drizzle.studio/');
if (result) {
    console.log('Returned file path:', result.filePath);
}
