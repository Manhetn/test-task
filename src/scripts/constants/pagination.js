const PAGINATION_PARAMETERS = {
  block: document.querySelector('.friends__page-numbers'),
  elements: {
    pageNumber: 'friends__page-number',
    numberActive: '.friends__page-number_active',
  },
  modifiers: {
    numberActive: 'friends__page-number_active',
    numberHidden: 'friends__page-number_hidden',


  },
}

export default PAGINATION_PARAMETERS;
