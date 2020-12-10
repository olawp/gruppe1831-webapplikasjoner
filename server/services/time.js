import Time from '../models/time.js';

export const createTime = async (data) => Time.create(data);

export const listTimes = async () => Time.find();
