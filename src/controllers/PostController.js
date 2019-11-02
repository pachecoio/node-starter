import Controller from  './Controller';
import PostService from  "./../services/PostService";
import Post from  "./../models/Post";
const postService = new PostService(
  new Post().getInstance()
);

class PostController extends Controller {

  constructor(service) {
    super(service);
  }
  
}

export default new PostController(postService);
