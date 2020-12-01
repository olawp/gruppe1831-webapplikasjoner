import Office from '../models/office.js';

export const listOffice = async () => Office.find();
