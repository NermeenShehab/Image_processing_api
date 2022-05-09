import { storeResizeImg } from '../../helper/storeImg';

describe('Test image Query ', (): void => {
  it('Error , Invalid img Name   ', async (): Promise<void> => {
    const err: null | string = await storeResizeImg({
      imgName: 'img',
      height: '369',
      width: '557'
    });
    expect(err).not.toBeNull();
  });

  it('Error , invalid height value ', async (): Promise<void> => {
    const err: null | string = await storeResizeImg({
      imgName: 'santamonica',
      height: '-457',
      width: '652'
    });
    expect(err).not.toBeNull();
  });

  it('Error , invalid width value ', async (): Promise<void> => {
    const err: null | string = await storeResizeImg({
      imgName: 'santamonica',
      height: '532',
      width: '-365'
    });
    expect(err).not.toBeNull();
  });

  it('sucessfully resizing image and store it  ', async (): Promise<void> => {
    const imgStored: null | string = await storeResizeImg({
      imgName: 'santamonica',
      height: '100',
      width: '150'
    });
    expect(imgStored).toBeNull();
  });
});
