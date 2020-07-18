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

}
