/**
 * @author Ola Wethal Petersen
 * @desc Inneholder konstanter som brukes i prosjektet. Her definerer vi porten webserveren skal kjøre på.
 * @exports PORT
 */

const PORT = process.env.PORT || 5000;
const dbPort = 27017;

export { PORT };
export { dbPort };
