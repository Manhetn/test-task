const FRIENDS_PARAMETERS ={
  block: document.querySelector('.friends__list'),
  elements: {
    pageNumbers: document.querySelector('.friends__page-numbers'),
    pageNumber: document.querySelector('.friends__page-number'),
  },
  modifiers: {
    blockHidden: 'friends_hidden',
    active: 'friends__page-number_active',
    numberHidden: 'friends__page-number_hidden',
  },
}

export default FRIENDS_PARAMETERS;
