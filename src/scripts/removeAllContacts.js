import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        const emptyContact = [];
        const jsonData = JSON.stringify(emptyContact, null, 2)
        await fs.writeFile(PATH_DB, jsonData, 'utf-8')
        console.log('All contacts have been successfully removed.');
    }
    catch (error) {
        console.error('Error removing all contacts:', error.message);
    throw error;
    }
 };

removeAllContacts();
