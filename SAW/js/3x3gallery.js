var gallery = document.getElementById("gallery")

fetch('assets/gallery.json').then(function(res){
    res.json().then(function(json){
        /* calls function on the element we're loading, we pass the element and index items into the function */
        json.forEach(function(el){

            /* anchor which will exist in memory to add stuff to */
            var galleryItem = document.createElement('a');

            /* defines the styles to add images in css */
            galleryItem.setAttribute("class","gallery-item");
            /* sets the href for where we want the link to go */
            galleryItem.setAttribute("href", el.url);
            /* updates the target attribute */
            galleryItem.setAttribute("target", "_blank");

            /* creates an image element */
            var galleryImage = docment.createElement('img');

            galleryImage.setAttribute("src", el.url);

            galleryImage.setAttribute("title", el.caption);

            galleryImage.setAttribute("alt", el.caption);

            var caption = document.createElement('caption');

            caption.innerText = el.caption;

            galleryItem.appendChild(galleryImage);
            galleryItem.appendChild(caption);

            gallery.appendChild(galleryItem);

        });

    })

})