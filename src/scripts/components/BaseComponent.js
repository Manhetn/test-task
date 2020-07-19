export default class BaseComponent {
  constructor(parameters){
    this.block = parameters.block;
    this.elements = parameters.elements;
    this.modifiers = parameters.modifiers;
  }

  // получение данных извне
  getDependencies(dependencies) {
    this._dependencies = dependencies;
  }

  // добавление слушателей
  _setHandlers(handlersArray) {
    handlersArray.forEach(handlerUnit => {
      const { element, event, handler } = handlerUnit;
      element.addEventListener(event, handler);
    });
  }

  // удаление слушателей
  _removeHandlers(handlersArray) {
    handlersArray.forEach(handlerUnit => {
      const { element, event, handler } = handlerUnit;
      element.removeEventListener(event, handler);
    });
  }

}
