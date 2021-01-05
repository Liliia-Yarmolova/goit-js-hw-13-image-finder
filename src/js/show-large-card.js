import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onClick(event) {

    if (event.target.nodeName !== 'IMG') {
    return;
    }
    
    event.preventDefault()
    const largeImageURL = event.target.dataset.source

    const instance = basicLightbox.create(
        `<img src=${largeImageURL}>`
    )
    instance.show()

}

export default onClick
