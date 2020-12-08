export const validate = async (schema, input) => {
  try {
    return await schema.validateAsync({ ...input });
  } catch (error) {
    return error;
  }
};
