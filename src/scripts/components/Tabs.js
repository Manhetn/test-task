import BaseComponent from './BaseComponent';

export default class Tabs extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }

  setListeners() {
    this._setHandlers([
      { element: this.elements.tabFriends,
        event: 'click',
        handler: this._openTabFriends.bind(this)
      },
      { element: this.elements.tabPost,
        event: 'click',
        handler: this._openTabPost.bind(this)
      },
    ]);
  }

  _openTabFriends() {
    const { friends, posts, pagination, filter } = this._dependencies;

    this.elements.tabFriends.setAttribute('disabled', 'disabled');
    this.elements.tabPost.removeAttribute('disabled', 'enable');
    posts.hidden();
    friends.visible();

    // pagination.setListeners();
    // filter.setListeners();
  }

  _openTabPost() {
    const { friends, posts, pagination, filter  } = this._dependencies;

    this.elements.tabPost.setAttribute('disabled', 'disabled');
    this.elements.tabFriends.removeAttribute('disabled', 'enable');
    posts.visible();
    friends.hidden();

    // filter.removeListeners();
    // pagination.removeListeners();

  }

}
