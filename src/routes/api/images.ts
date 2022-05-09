import { Router, Request, Response } from 'express';
import { getImg } from '../../helper/getImg';
import { storeResizeImg } from '../../helper/storeImg';
import { validate } from './validationImg';

const routerImg = Router();

routerImg.get('/', async (req: Request, res: Response): Promise<void> => {
  const msgOfValidation: null | string = await validate(req.query);
  if (msgOfValidation) {
    res.send(msgOfValidation);
    return;
  }

  const path: null | string = await getImg(req.query);
  if (path) {
    res.sendFile(path);
  } else {
    res.send('Error somthing Went wrong ');
  }

  let err: string | null = '';

  if (!(await getImg(req.query))) {
    err = await storeResizeImg(req.query);
  }

  if (err) {
    res.send(err);
    return;
  }
});

export default routerImg;
