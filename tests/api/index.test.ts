import apiIndexhandler from '../../pages/api/index';
import { createMocks } from 'node-mocks-http';

describe('API index', () => {
  test('test api', async () => {
    // setup
    const { req, res } = createMocks({ method: 'GET' });
    await apiIndexhandler(req, res);

    // result
    const body = JSON.parse(res._getData());
    const code = res._getStatusCode();

    // assertion
    expect(code).toBe(200);
    expect(body).toHaveProperty('message');
    expect(body.message).toEqual('Welcome to PAPA');
  });
});
