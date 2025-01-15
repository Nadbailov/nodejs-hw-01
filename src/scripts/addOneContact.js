import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const currentContacts = JSON.parse(data);

        const newContact = createFakeContact();

        const updatedContacts = [...currentContacts, newContact];

        const jsonData = JSON.stringify(updatedContacts, null, 2);
        await fs.writeFile(PATH_DB, jsonData, 'utf-8');

    } catch (error) {
        console.error('Error adding contact to file:', error.message);
    }
};

addOneContact();
