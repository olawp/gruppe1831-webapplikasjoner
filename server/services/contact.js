import Contact from '../models/contact.js';

export const getContactById = async (id) => Contact.findById(id);

export const createContact = async (data) => Contact.create(data);

export const removeContact = async (id) => {
  const contact = await Contact.findById(id);
  contact.remove();
};
