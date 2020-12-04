import Office from '../models/office.js';

export const listOffice = async () => Office.find();

export const getOfficeById = async (id) => Office.findById(id);

export const createOffice = async (data) => Office.create(data);
