import express from 'express';
import path from 'path';
import { createThumbDir } from './helper/imgPath';
import routes from './routes/server';

const app = express();
app.use(
  '/css',
  express.static(
    path.join(__dirname, '../node_modules/bootstrap/dist/css/bootstrap.css')
  )
);
app.use(routes);

app.listen(process.env.PORT || 7000, async (): Promise<void> => {
  await createThumbDir();
  console.log('Hello Nermeen , Welcome to the server');
});

export default app;
