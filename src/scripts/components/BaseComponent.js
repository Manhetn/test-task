export default class BaseComponent {
  constructor(parameters){
    this.block = parameters.block;
    this.elements = parameters.elements;
    this.modifiers = parameters.modifiers;
  }

  getDependencies(dependencies) {
    this._dependencies = dependencies;
  }

  _setHandlers(handlersArray) {
    handlersArray.forEach(handlerUnit => {
      const { element, event, handler } = handlerUnit;
      element.addEventListener(event, handler);
    });
  }

  _removeHandlers(handlersArray) {
    handlersArray.forEach(handlerUnit => {
      const { element, event, handler } = handlerUnit;
      element.removeEventListener(event, handler);
    });
  }

}
