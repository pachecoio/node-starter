import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';

class Post {

  initSchema() {
    const schema = new Schema({
      title: {
        type: String,
        required: true,
      },
      slug: String,
      subtitle: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
      content: {
        type: String,
        required: true,
      }
    }, { timestamps: true });
    schema.pre(
      "save",
      function(next) {
        let post = this;
        if (!post.isModified("title")) {
          return next();
        }
        post.slug = slugify(post.title, "_");
        console.log('set slug', post.slug);
        return next();
      },
      function(err) {
        next(err);
      }
    );
    schema.plugin(uniqueValidator);
    mongoose.model("posts", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("posts");
  }
}

export default Post;
