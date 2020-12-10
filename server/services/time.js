import Time from '../models/time';

export const createTime = async (data) => Time.create(data);

export const listTimes = async () => Time.find();
