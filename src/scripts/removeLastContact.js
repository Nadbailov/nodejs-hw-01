import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const currentContacts = JSON.parse(data);

        if (currentContacts.length === 0) {
            console.log('No contacts to remove.');
            return;
        }
        currentContacts.pop();

        const jsonData = JSON.stringify(currentContacts, null, 2);
        await fs.writeFile(PATH_DB, jsonData, 'utf-8');
        console.log('Last contact successfully removed.');
    } catch (error) {
        console.error('Error removing last contact:', error.message);
    }
 };

removeLastContact();
