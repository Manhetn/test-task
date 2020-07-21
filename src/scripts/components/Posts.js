import BaseComponent from './BaseComponent';

export default class Posts extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }

  getPosts() {
    const { apiPosts, storage } = this._dependencies;

    apiPosts
      .getPosts()
      .then(res => {
        storage.setPropertyValue('posts', JSON.stringify(res));
        this._renderPosts();
        // console.log(res);
      })
  }

  _renderPosts() {
    const { storage } = this._dependencies;
    const postsArray = JSON.parse(storage.getPropertyValue('posts'));

    postsArray.forEach(post => {
      this._addPost(post);
    })
  }

  _addPost(data) {
    const { post } = this._dependencies;

    this.block.insertAdjacentHTML('afterbegin', post.createPost(data));
  }

  hidden() {
    this.block.classList.add(this.modifiers.blockHidden);
  }

  visible() {
    this.block.classList.remove(this.modifiers.blockHidden);
  }

}
