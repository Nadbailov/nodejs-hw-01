import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        const jsonData = JSON.stringify(updatedContacts, null, 2);

        await fs.writeFile(PATH_DB, jsonData, 'utf-8');
        console.log('Contacts successfully saved to file:', PATH_DB);
    } catch (error) {
        console.error('Error writing data to file:', error.message);
        throw error;
    }
};
