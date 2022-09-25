//Get values from input
eel.expose(collectData);
function collectData() {
    const features = [];
    features[0] = document.getElementById('childcare').value;
    features[1] = document.getElementById('health').value;
    features[2] = document.getElementById('social-life').value;
    features[3] = document.getElementById('public-transport').value;
    features[4] = document.getElementById('eco-friendly').value;
    features[5] = document.getElementById('mobility').value;
    features[6] = document.getElementById('pet-friendly').value;
    return features;
}

// Onclick of the button
document.querySelector("button").onclick = function () {
    // Call python's random_python function
    eel.get_result()(function (string) {
        // Update the div with a random number returned by python
        document.querySelector(".district").innerHTML = string;
    })
}