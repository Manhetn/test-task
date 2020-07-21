const FRIENDS_PARAMETERS ={
  block: document.querySelector('.friends'),
  elements: {
    friendsList: document.querySelector('.friends__list'),
    pageNumbers: document.querySelector('.friends__page-numbers'),
    pageNumber: document.querySelector('.friends__page-number'),
  },
  modifiers: {
    blockHidden: 'friends_hidden',
    active: 'friends__page-number_active',
    pageHidden: 'friends__page_hidden',
  },
  data: {
    friendsOnThePage: '3',
  },
}

export default FRIENDS_PARAMETERS;

