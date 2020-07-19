export default class Friend {

  createFriend(friend) {
    return `<div class="friend">
              <img
                class="friend__avatar avatar"
                src="${this._checkImageUrl(friend.avatar)}"
                alt="friend photo"
              />
              <div class="friend__info">
                <h2 class="friend__info-iteam friend__first-name">${friend.first_name}</h2>
                <h3 class="friend__info-iteam friend__last-name">${friend.last_name}</h3>
                <p class="friend__info-iteam">email:
                  <a
                    class="friend__contact-info friend__email-address"
                    href="mailto:${friend.email}"
                    lang="en"
                    title="friend email"
                  >
                    ${friend.email}
                  </a>
                </p>
              </div>
            </div>`
  }

  _checkImageUrl(url) {
    if(url === null) {
      url = `https://image.flaticon.com/icons/png/512/64/64096.png`;
      return url;
    } else {
      return url;
    }
  }

}
