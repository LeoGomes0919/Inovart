const Mask = {
  apply(input, func) {
    setTimeout(function () {
      input.value = Mask[func](input.value)
    }, 1)
  },
  phone(value) {
    value = value.replace(/\D/g, '');

    if (value.length >= 11) {
      value = value.replace(/(\d{2})(\d)/, '($1) $2');
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
    } else {
      value = value.replace(/(\d{2})(\d)/, '($1) $2');
      value = value.replace(/(\d{4})(\d)/, '$1-$2');
    }
    return value;
  }
}

const ImageGallery = {
  content: document.querySelector('.container-details-photo'),
  imageContent: document.querySelector('.container-details-photo > img'),
  previews: document.querySelectorAll('.container-details-gallery img'),
  index: 1,

  setImage(e) {
    const { target } = e;

    ImageGallery.previews.forEach(preview => preview.classList.remove('active'));
    target.classList.add('active');
    ImageGallery.imageContent.classList.add('fade');
    setTimeout(() => {
      ImageGallery.imageContent.classList.remove('fade');
    }, 1000)
    ImageGallery.imageContent.src = target.src
  },
  
  next() {
    ImageGallery.index++;
    ImageGallery.imageContent.classList.add('fade');
      setTimeout(() => {
        ImageGallery.imageContent.classList.remove('fade');
      }, 1000);
    if(ImageGallery.index <= ImageGallery.previews.length) {
      ImageGallery.imageContent.src = ImageGallery.previews[ImageGallery.index-1].src;
    }
    if(ImageGallery.index > ImageGallery.previews.length) {
      ImageGallery.index = 1;
      ImageGallery.imageContent.src = ImageGallery.previews[ImageGallery.index-1].src;
    }
  },
  prev() {
    ImageGallery.imageContent.classList.add('fade');
    setTimeout(() => {
      ImageGallery.imageContent.classList.remove('fade');
    }, 1000);
    if(ImageGallery.index > 1 && ImageGallery.index <= ImageGallery.previews.length) {
      ImageGallery.index--;
      ImageGallery.imageContent.src = ImageGallery.previews[ImageGallery.index-1].src;
    }
  }
}
