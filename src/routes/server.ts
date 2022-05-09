import express, { Router } from 'express';
import routerImg from './api/images';

const routes = Router();

routes.use('/api/images', routerImg);

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <h1 class="p-2 bg-dark text-light" > Img Resize Project </h1> 


    <ul style="list-style:none">
    <p class="mb-2 text-success fs-4"> You can choose from Available Img List :-  </p>
    <li><a class="btn btn-warning  rounded-pill bg-gradient  mt-2" href="/api/images?imgName=icelandwaterfall">icelandwaterfall</a></li>
    <li><a class="btn btn-primary rounded-pill bg-gradient  mt-2" href="/api/images?imgName=encenadaport">encenadaport</a></li>
    <li><a class="btn btn-info  rounded-pill bg-gradient  mt-2" href="/api/images?imgName=santamonica">santamonica</a></li>
    <li><a class="btn btn-danger rounded-pill bg-gradient  mt-2" href="/api/images?imgName=palmtunnel">palmtunnel</a></li>
    <li><a class="btn btn-success  rounded-pill bg-gradient  mt-2" href="/api/images?imgName=fjord">fjord</a></li>
   
    <li class="bg-dark me-3 my-4">----</li>

    <p class="mb-2 text-success fs-4 "> You can change imgName , [width and height] </p>

    <li><a class="btn btn-warning  rounded-pill bg-gradient  mt-2" href="/api/images?imgName=icelandwaterfall&height=300&width=400">icelandwaterfall with height=300 & width=400 </a></li>
    <li><a class="btn btn-primary rounded-pill bg-gradient  mt-2" href="/api/images?imgName=encenadaport&height=200&width=350">encenadaport with height=200 & width=350 </a></li>
    <li><a class="btn btn-danger rounded-pill bg-gradient  mt-2" href="/api/images?imgName=palmtunnel&height=700&width=450">palmtunnel with height=700 & width=350 </a></li>
    <li><a class="btn btn-info  rounded-pill bg-gradient  mt-2" href="/api/images?imgName=santamonica&height=99&width=99">santamonica with height=99 & width=99 </a></li>
    <li><a class="btn btn-success  rounded-pill bg-gradient  mt-2" href="/api/images?imgName=fjord&height=150&width=150">fjord with height=150 & width=150 </a></li>
 
    </ul>`
  );
});
export default routes;
