import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => {
        try {
        const currentContacts = await readContacts();

        const newContacts = Array.from({ length: number }, () => createFakeContact());

        const updatedContacts = [...currentContacts, ...newContacts];

        await writeContacts(updatedContacts);
    } catch (error) {
        console.error('Error while generating contacts:', error.message);
    }
 };

generateContacts(5);
