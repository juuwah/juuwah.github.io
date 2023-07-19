const canvas = document.querySelector("confetti");
var span = document.querySelector("pleaseWork")

const jsConfetti = new JSConfetti({
    canvas
});

span.addEventListener("mouseover", add.JSConfetti());{
    jsConfetti.addConfetti()
}