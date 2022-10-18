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
        switch (string) {
            case "Śródmieście":
                text = "Welcome to <b>Srodmiescie</b>! &#127750; Here you'll find plenty of access to childcare facilities, an engaging social life, and physically accessible areas. You don't need a car to get around, that's for sure. Health and fitness ranked around average, so you shouldn't have problems getting anything you need. It might not be perfect for pets or for environmentally focused living, though.";
                break;
            case "Mokotów":
                text = "Welcome to <b>Mokotow</b>! &#127970; If you're looking for a place to settle down with kids and have a social life, you've come to the right place. Public transport, access to health and fitness facilities, and eco friendliness are pretty average or better than you'd expect.";
                break;
            case "Ochota":
                text = "Welcome to <b>Ochota</b>! &#127972; We care a lot about your mobility needs and making our dzielnica accessible to everyone. You can take care of your health and fitness needs easily, childcare is taken care of, and you can be as social as you want. Public transport and environmental factors are slightly better than average, though it might not be as accessible for your pet.";
                break;
            case "Wola":
                text = "Welcome to <b>Wola</b>! &#127970; You'll have a great social life here, and you won't have to worry about public transport, childcare, or taking care of your health. We care slightly more than average about mobility needs here. We're around average as far as eco friendliness and pet accessibility goes";
                break;
            case "Żoliborz":
                text = "Welcome to <b>Zoliborz</b>! &#9749; If you're looking for a social area with childcare covered, you've come to the right place. Don't worry about getting stuck or struggling to access multiple locations. Your health and fitness needs will be taken care of, and you probably won't need a car to get around. Pet accessibility could be better, so that's something to consider.";
                break;
            case "Praga_Płd":
                text = "Welcome to <b>Praga Poludnie</b>! &#127881; We mostly care about having a good time, so you'll find an active social scene here. If you're young and plan on driving a car to get around, you'll fit right in. We're not the sportiest, eco friendliest, or the most focused on pet accessibility, so that might be something to consider.";
                break;
            case "Praga_Płn":
                text = "Welcome to <b>Praga Polnoc</b>! &#128056; If you don't have a pet, aren't particularly interested in health and fitness facilities, and plan on getting around by car, this is the place for you. We're not that focused on eco friendliness as the other districts, though.";
                break;
            case "Bemowo":
                text = "Welcome to <b>Bemowo</b>! &#127751; We value having a good social life in this part of town. We're a bit better than average when it comes to childcare, and your pets won't have many problems taking a walk around the bloc. As far as health and fitness, public transport, and our dzielnica being a green space go, we're just above average. It might be harder to get around a few places if you have specific mobility needs, so keep that in mind.";
                break;
            case "Białołęka":
                text = "Welcome to <b>Bialoleka</b>! If you're a childfree, petfree professional, you've come to the right place. Health and fitness facilities are not what we came here for, and we can be social when we want to be. You'll definitely want a car in these parts.";
                break;
            case "Bielany":
                text = "Welcome to <b>Bielany</b>! We're around average as far as most things go, though you might be more likely to come here if you don't need to walk your pet, or if you aren't so concerned about green spaces. Your social life won't be as engaging as Srodmiescie, but there's more going on here than a few other districts.";
                break;
            case "Rembertów":
                text = "Welcome to <b>Rembertow</b>! We're introverted but otherwise pretty average. If we've guessed right, you probably drive a car to get around, and you might care slightly more about environmental factors.";
                break;
            case "Targówek":
                text = "Welcome to <b>Targowek</b>! Are you looking to socialize, but aren't preoccupied with your environment? This is the place for you. You probably drive a car and don't need additional mobility access.";
                break;
            case "Ursus":
                text = "Welcome to <b>Ursus</b>! Are you highly interested in taking public transport most of the time and having access to childcare? We've got you covered. You can take proper care of your health and fitness here, and don't worry about physically accessing areas yourself or with your pet.";
                break;
            case "Ursynów":
                text = "Welcome to <b>Ursynow</b>! We're pretty average when it comes to person and pet accessibility. You won't need a car around here, our public transport is readily available. We're just above average when it comes to our environment, childcare access, and socializing.";
                break;
            case "Wawer":
                text = "Welcome to <b>Wawer</b>! We don't have many places to socialize, and we're more focused on accessing the city with a car. You probably won't struggle to access locations around here, but your pet probably will if you have one. Childcare, health and fitness, and a focus on the environment aren't our main focus here.";
                break;
            case "Wesoła":
                text = "Welcome to <b>Wesola</b>! We're more interested in being alone in our green part of town. Strolls with your pet will be fun, and we're generally pretty average when it comes to mobility access and health. We're slightly below average when it comes to childcare facility access.";
                break;
            case "Wilanów":
                text = "&#128664; Welcome to <b>Wilanow</b>! &#128664; We're not as focused on childcare, health and fitness, or green spaces like some of the other districts. Your social life might be just above average, but you definitely need a car to get around. If you have special mobility needs, there will be a few challenging locations to get to.";
                break;
            case "Włochy":
                text = "Welcome to Wlochy! &#127829; Are you looking for a pet friendly, environmentally focused place where you don't need a car to get around? Yup, that's us. We're slightly better than average when it comes to health and fitness, and we're pretty accessible to those with disabilities. We're not so sociall active, but we're pretty average as far as childcare is concerned.";
                break;
            case 0:
                text = "Today is Sunday";
        }
        document.querySelector(".description").innerHTML = text;
    })
}