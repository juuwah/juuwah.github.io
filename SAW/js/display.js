var fullImgLink = document.getElementById("fullImgLink");
var fullImg = document.getElementById("fullImg");


fetch('assests/gallery.json').then(function(res){
    res.json().then(function(json){
        /* calls function on the element we're loading, we pass the element and index items into the function */
        json.forEach(function(el, i){

            /* geneerates each of our images, img will create a html image elemnt in memory */
            var fullImg = document.createElement('img');

            /* Writing the properties of the three attributes of an image */
            fullImg.setAttribute('src', el.url);
            fullImg.setAttribute('alt',el.caption);
            fullImg.setAttribute('title', el.caption);

            /* add the images to the image element */
            function open(img)
            fullImgLink.style.display = "flex";
            /* updates the source of the image */
            fullImg.src = img;

        })

        /* Once we've loaded in our images, we will call this function which will set up our buttons, allow us to move the carousel ect...*/
        /*setupCarousel(json);*/

    })

});