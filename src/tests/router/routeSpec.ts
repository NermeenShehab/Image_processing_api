import supertest from 'supertest';
import app from '../../server';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Test responses from endpoints', (): void => {
  describe('endpoint: /api/images', (): void => {
    it('responds 200 with error msg if send without parameter', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/api/images');
      expect(response.status).toBe(200);
    });

    it('responds 200 with error msg if send with a missing parameter', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/images?imgName=fjord&height=250'
      );
      expect(response.status).toBe(200);
    });

    it('responds 200 if send img name only ', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/images?imgName=fjord'
      );
      expect(response.status).toBe(200);
    });

    it('responds 200 if send img with valid width and height ', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/images?imgName=fjord&width=800&height=360 '
      );
      expect(response.status).toBe(200);
    });

    it('responds 200 with error msg if send img with invalid height and valid width ', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/images?imgName=fjord&width=750&height=-300 '
      );
      expect(response.status).toBe(200);
    });

    it('responds 200 with error msg if send img with valid height and invalid width ', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/images?imgName=fjord&height=600&width=-300 '
      );
      expect(response.status).toBe(200);
    });
  });

  describe('endpoint: /', (): void => {
    it('responds 200 with info about site when gets /  ', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });

  describe('endpoint: /image', (): void => {
    it('Error 404 this is invalid endpoint ', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/image');
      expect(response.status).toBe(404);
    });
  });
});
