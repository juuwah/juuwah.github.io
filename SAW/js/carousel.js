//References to things we want the user ot interact with go here

var imgs = document.getElementById('carouselImages');

var caption = document.getElementById('carouselCaption');

/*var prev = document.getElementById('cPrev');

var next = document.getElementById('cNext');
*/

/* 
*  loads our dataset from json. To return a "promise" we call a then function which calls the data loaded into binary since it's the result called from the fetch 
*  We need to convert from binary to json, then call a then function again to contain the json
*/
fetch('assests/gallery.json').then(function(res){
    res.json().then(function(json){
        /* calls function on the element we're loading, we pass the element and index items into the function */
        json.forEach(function(el, i){

            /* geneerates each of our images, img will create a html image elemnt in memory */
            var imgs = document.createElement('img');

            /* Writing the properties of the three attributes of an image */
            imgs.setAttribute('src', el.url);
            imgs.setAttribute('alt',el.caption);
            imgs.setAttribute('title', el.caption);

            /* add the images to the image element */
            imgs.appendChild(imgs);

        })

        /* Once we've loaded in our images, we will call this function which will set up our buttons, allow us to move the carousel ect...*/
        /*setupCarousel(json);*/

    })

});

/* code to get the buttons working, passing in json allows us to set up the properties we need based on the object we load in */

/* 
function setupCarousel(json){
    var imgCount = imgs.childElementCount; //gives us the current number of images currently appearing inside the images element
    var currentImg = 1;
    var imgWidth = 500;


    prev.addEventListener('click', function(){
        //logic to check if the current image in view is not the first (if it isn't th first we need to be able to move it)
        if(currentImg !== 1) {
            --currentImg; //Takes one away from it so that the current image in view is actaully the previous image

            imgCount.style.left = imgWidth - (currentImg * imgWidth) + 'px'; //updates the style so we can move the images, here we will change the position of the images container based on the current index and width of the image
        }
        /* Updates the caption */
 /*       caption.innerText = json[currentImg - 1].caption;
    })

    next.addEventListener('click', function(){
        if(currentImg != imgCount) { //cheecks to see if the cureent image is not equal to the number of images we have
            ++currentImg;

            imgCount.style.left = imgWidth - (currentImg * imgWidth) + 'px'; 
        }
        /* Updates the caption */
 /*       caption.innerText = json[currentImg - 1].caption;
    })

    // since we want the caption to update when the page loads we add it here aswell
    caption.innerText = json[currentImg - 1].caption;
}
*/
