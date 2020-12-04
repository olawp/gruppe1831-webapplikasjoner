import multer from 'multer';
import ErrorHandler from '../utils/errorHandler.js';

// Bestemmer hvilke filtyper som er lovlig å laste opp
function allowedFileTypes(req, file, cb) {
  const fileTypes = /\.(jpeg|jpg|png)$/;
  if (!file.originalname.match(fileTypes)) {
    return cb(
      new ErrorHandler(
        'Kan kun laste opp bildefiler av typen jpeg, jpg eller png',
        400
      )
    );
  }
  cb(null, true);
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `custom_value_${file.originalname}`);
  },
});

// Limiter filstørrelse til 5 MB
export const upload = multer({
  storage,
  limits: { fileSize: 5000000 },
  allowedFileTypes,
}).single('image');
