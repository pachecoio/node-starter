import PostController from './../src/controllers/PostController';

export default (app) => {

  // POST ROUTES
  app.get(`/api/post`, PostController.getAll);
  app.get(`/api/post/:params`, PostController.get);
  app.post(`/api/post`, PostController.insert)
  app.put(`/api/post/:id`, PostController.update);
  app.delete(`/api/post/:id`, PostController.delete);

}