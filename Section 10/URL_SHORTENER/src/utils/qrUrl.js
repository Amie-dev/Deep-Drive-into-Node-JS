import QRCode from 'qrcode';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate QR code as an image file
export const qrcode = async (fileName, data) => {
    const filePath = path.join(__dirname, '../public', `${fileName}.png`);
    try {
        await QRCode.toFile(filePath, data,url);
        console.log(`QR Code saved as ${filePath}`);
        console.log(url)
        return { filePath };
    } catch (err) {
        console.error('Error saving QR code:', err);
        return null;
    }
};
