import path from 'path';
import { promises as fs } from 'fs';

export const imgActualPath = path.resolve(
  __dirname,
  '../../assets/images/full'
);
export const imgThumbPath = path.resolve(
  __dirname,
  '../../assets/images/thumb'
);

//create thumb directory if not exists
export async function createThumbDir(): Promise<void> {
  try {
    await fs.access(imgThumbPath);
  } catch {
    fs.mkdir(imgThumbPath);
  }
}
