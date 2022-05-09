import path from 'path';
import ImageQuery from './imgInterface';
import { promises as fs } from 'fs';
import { imgActualPath, imgThumbPath } from './imgPath';

export async function getImg(query: ImageQuery): Promise<null | string> {
  if (!query.imgName) {
    return null;
  }

  let imgPath: string = '';
  if (query.width && query.height) {
    imgPath = path.resolve(
      imgThumbPath,
      `${query.imgName}-${query.width}x${query.height}.jpg`
    );
  } else {
    imgPath = path.resolve(imgActualPath, `${query.imgName}.jpg`);
  }
  try {
    await fs.access(imgPath);
    return imgPath;
  } catch {
    return null;
  }
}
