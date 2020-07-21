export default class Post  {

  createPost(post) {
    return `<article class="post">
              <h4 class="post__title">${post.title}</h4>
              <p class="post__text">${post.body}</p>
            </article>`;
  }

}
