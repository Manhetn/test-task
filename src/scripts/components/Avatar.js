import BaseComponent from './BaseComponent';

export default class Avatar extends BaseComponent {
  constructor(parameters){
    super(parameters);
  }

  setListeners() {
    this._setHandlers([
      { element: this.elements.input,
        event: 'change',
        handler: this._changeAvatar.bind(this)
      },
    ]);
  }

  _changeAvatar() {
    const file = event.target.files[0];
    const reader = new FileReader();
    this.elements.avatar.file = file;
    reader.onload = (function(aImg) {
      return function(event) {
        aImg.src = event.target.result;
      };
    })(this.elements.avatar);
    reader.readAsDataURL(file);
  }

}

