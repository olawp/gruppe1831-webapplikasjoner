/**
 * @author Ola Wethal Petersen
 * @desc Serivce for kontaktskjemadata. Beskriver hvordan dataen skal behandles mot databasen
 * @exports getContactById createContact removeContact
 */

import Contact from '../models/contact.js';

export const getContactById = async (id) => Contact.findById(id);

export const createContact = async (data) => Contact.create(data);

export const removeContact = async (id) => {
  const contact = await Contact.findById(id);
  contact.remove();
};
