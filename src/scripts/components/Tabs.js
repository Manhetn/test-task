import BaseComponent from './BaseComponent';

export default class Tabs extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }

  setListeners() {
    this._setHandlers([
      { element: this.elements.tabFriends, event: 'click', handler: this._openTabFriends.bind(this) },
      { element: this.elements.tabPost, event: 'click', handler: this._openTabPost.bind(this) },
    ]);
  }

  _openTabFriends() {
    const { friends, posts } = this._dependencies;

    this.elements.tabFriends.classList.add(this.modifiers.tabActive);
    this.elements.tabPost.classList.remove(this.modifiers.tabActive);
    friends.visible();
    posts.hidden();
  }

  _openTabPost() {
    const { friends, posts } = this._dependencies;

    this.elements.tabPost.classList.add(this.modifiers.tabActive);
    this.elements.tabFriends.classList.remove(this.modifiers.tabActive);
    friends.hidden();
    posts.visible();
  }

}
