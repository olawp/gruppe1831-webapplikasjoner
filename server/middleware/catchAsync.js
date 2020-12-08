/**
 * @author Ola Wethal Petersen , Marius Walling
 * @desc Mellomvare som catcher async errorer. "Boilerplate" lånt fra pensum
 * @exports Unnamed function
 */
export default (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch(next);
};
