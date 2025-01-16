import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data)
        const count = contacts.length;
        return count;
    }
    catch (error) {
        console.error('Error counting contacts:', error.message);
        throw error;
    }
 };

console.log(await countContacts());
