import path from 'path';
import sharp from 'sharp';
import ImageQuery from './imgInterface';
import { imgActualPath, imgThumbPath } from './imgPath';

const processImage = async (query: {
  realImg: string;
  storedImg: string;
  width: number;
  height: number;
}): Promise<null | string> => {
  try {
    await sharp(query.realImg)
      .resize(query.width, query.height)
      .toFile(query.storedImg);
    return null;
  } catch {
    return 'Image could not be processed.';
  }
};

export async function storeResizeImg(
  query: ImageQuery
): Promise<null | string> {
  if (!query.imgName || !query.width || !query.height) {
    return null;
  }
  const realImgPath: string = path.resolve(
    imgActualPath,
    `${query.imgName}.jpg`
  );
  const storeImgPath: string = path.resolve(
    imgThumbPath,
    `${query.imgName}-${query.width}x${query.height}.jpg`
  );
  return await processImage({
    realImg: realImgPath,
    storedImg: storeImgPath,
    width: parseInt(query.width),
    height: parseInt(query.height)
  });
}
