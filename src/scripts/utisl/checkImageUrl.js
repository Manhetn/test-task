const checkImageUrl = (url) => {
  if(url === null) {
    url = `https://image.flaticon.com/icons/png/512/64/64096.png`;
    return url;
  } else {
    return url;
  }
}

export default checkImageUrl;
