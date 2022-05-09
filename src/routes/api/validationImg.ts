import ImageQuery from '../../helper/imgInterface';

const listOfImg: string[] = [
  'icelandwaterfall',
  'encenadaport',
  'santamonica',
  'palmtunnel',
  'fjord'
];

export const validate = async (query: ImageQuery): Promise<null | string> => {
  if (!listOfImg.includes(query.imgName || '')) {
    return `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

      <ul style="list-style:none">
        <p class="mb-2 text-success fs-4">Enter a valid imgName like  </p>
        <li><a class="btn btn-warning  rounded-pill bg-gradient  mt-2" href="/api/images?imgName=icelandwaterfall">icelandwaterfall</a></li>
        <li><a class="btn btn-primary rounded-pill bg-gradient  mt-2" href="/api/images?imgName=encenadaport">encenadaport</a></li>
        <li><a class="btn btn-info  rounded-pill bg-gradient  mt-2" href="/api/images?imgName=santamonica">santamonica</a></li>
        <li><a class="btn btn-danger rounded-pill bg-gradient  mt-2" href="/api/images?imgName=palmtunnel">palmtunnel</a></li>
        <li><a class="btn btn-success  rounded-pill bg-gradient  mt-2" href="/api/images?imgName=fjord">fjord</a></li>
      </ul> 
      `;
  }

  const height: number = <number>(<unknown>('' || query.height));
  if (height < 1 || Number.isNaN(height)) {
    return `  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <p class=" text-center fs-1 p-2  my-5 bg-danger text-light">
            Enter a +ve for height of image 
            </p>
     `;
  }
  const width: number = <number>(<unknown>('' || query.width));
  if (width < 1 || Number.isNaN(width)) {
    return `  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <p class=" text-center fs-1 p-2 my-5 bg-danger text-light">
            Enter a +ve for width of image 
            </p>
        `;
  }

  return null;
};
