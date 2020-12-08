/**
 * @author Ola Wethal Petersen
 * @desc image controller. Definerer hvordan bildedata skal bli behandlet
 * @exports create get
 */

// eslint-disable-next-line import/named
import { imageService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  if (!req.file) {
    return next(
      new ErrorHandler(
        'Last opp en bildefil i formatet jpeg, jpg eller png',
        400
      )
    );
  }
  const image = await imageService.uploadImage(req.file);
  res.status(201).json({
    success: true,
    data: image,
  });
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const image = await imageService.getImageById(req.params.id);
  if (!image) {
    return next(new ErrorHandler('Bildet eksisterer ikke', 404));
  }

  const imagePath = image.file_path.replace('public/', '');

  res.status(200).json({
    success: true,
    data: { image, imagePath },
  });
});
