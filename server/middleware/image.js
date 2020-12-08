/**
 * @author Ola Wethal Petersen
 * @desc Mellomvare for håndtering av bilder. Inneholder en filteringsfunksjon som sjekker filformat, en storage funksjon som bestemmer hvor filer skal lagres
 * @exports upload
 */

import multer from 'multer';
import ErrorHandler from '../utils/errorHandler.js';

// Bestemmer hvilke filtyper som er lovlig å laste opp
function fileFilter(req, file, cb) {
  const filetypes = /\.(jpeg|jpg|png)$/;
  if (!file.originalname.match(filetypes)) {
    return cb(
      new ErrorHandler(
        'Kun bildefiler av typen jpeg, jpg, og png er tilatt',
        400
      )
    );
  }
  cb(null, true);
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images');
  },
  filename(req, file, cb) {
    cb(null, `custom_value_${file.originalname}`);
  },
});

// Limiter filstørrelse til 5 MB
export const upload = multer({
  storage,
  limits: { fileSize: 5000000 },
  fileFilter,
}).single('image');
