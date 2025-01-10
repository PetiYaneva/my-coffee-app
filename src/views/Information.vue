<template>
      <button class="accordion">Section 1</button>
    <div class="panel">
      <div class="upperContainer">
            <ul class="ingredients"> Coffee
                <li class="things">"Flour tortillas - You'll need big ones! I find 12-inch tortillas<br>to be the easiest to roll</li>
                <li class="things">Scrambled eggs - A breakfast burrito essential. They add yummy<br>creamy texture and lots of protein
                    to keep you full till lunchtime.<br>For a vegan variation, check out this vegan breakfast burrito recipe!</li>
                <li class="things">Spicy potatoes - I roast them with smoked paprika to add bold, smoky<br>flavor to the filling</li>
                <li class="things">Avocado - For creamy richness</li>
                <li class="things">Pico de gallo - For bright, zesty flavor</li>
                <li class="things">fresh fixings - shredded cabbage, roasted red peppers, black beans, cilantro,<br>and spinach</li>
            </ul>
            <img class="ingredientsImg" src="@/assets/coffee.jpg"/>
        </div>
    </div>

    <button class="accordion">Section 2</button>
    <div class="panel">
      <div class="lowerContainer">
        <img id="img2" class="ingredientsImg" src="@/assets/Tea.jpg"/>
        <ol class="ingredients"> Tea
          <li  id="makeit" class="things">Make sure you have big tortillas! In the store, look for 12-inch<br>or larger tortillas.
                          Often, they'll be labeled as “Burrito-Size.” These<br>tortillas are the easiest to tuck and 
                          roll around all the yummy fillings.</li>
          <li id="makeit" class="things">Lay your fillings in a (relatively) narrow strip on the tortilla. 
              If you<br>spread the ingredients out too much, you won't be able to get the<br>tortilla over and around them. 
              I start by making a thin layer of<br>spinach on the bottom and then spread the other 
              fillings in narrow<br>rows on top</li>
          <li id="makeit" class="things">Tuck in the sides first. Then, fold the tortilla over the fillings and<br>roll it closed. 
              I've found this “tuck & roll” method to be the most<br>effective for tightly packing the filling
              into the tortilla.</li>
          <li id="makeit" class="things">Have an extra pair of hands nearby. Before I roll the tortilla closed, 
              <br>I like to have Jack gently press the fillings toward my hands in<br>order to pack them together tightly.
                That way, my burrito<br>turns out nice and compact. He usually helps out during this step:</li>
          </ol>
        </div>
    </div>

    <button class="accordion">Section 3</button>
    <div class="panel">
      <div class="upperContainer2">
            <ul class="ingredients"> Caffeine-free coffee
                <li class="things">"Flour tortillas - You'll need big ones! I find 12-inch tortillas<br>to be the easiest to roll</li>
                <li class="things">Scrambled eggs - A breakfast burrito essential. They add yummy<br>creamy texture and lots of protein
                    to keep you full till lunchtime.<br>For a vegan variation, check out this vegan breakfast burrito recipe!</li>
                <li class="things">Spicy potatoes - I roast them with smoked paprika to add bold, smoky<br>flavor to the filling</li>
                <li class="things">Avocado - For creamy richness</li>
                <li class="things">Pico de gallo - For bright, zesty flavor</li>
                <li class="things">fresh fixings - shredded cabbage, roasted red peppers, black beans, cilantro,<br>and spinach</li>
            </ul>
            <img class="ingredientsImg" src="@/assets/coffee.jpg"/>
        </div>
    </div>
</template>

<script>
export default {
  name: "InformationPage", // Use a multi-word component name
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
</script>

<style>
body {
  margin: 0em;
}

.ingredients {
  text-align: center;
  font-size: 5rem;
  font-family: 'Amatic SC', cursive;
}

.things {
  font-size: 2rem;
  margin-right: 2em;
  text-align: left;
  color: black;
}

.ingredientsImg {
  width: 25em;
  border: 2px solid black;
}

a {
  text-decoration: none; 
}

#img2 {
  width: 30em;
  margin-left: 6em;
}


#makeit{
  font-size: 1.85rem;
}

.upperContainer {
  width: auto;
  background-color: #faedcd;
  margin: 0em;
  display: flex;
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
  flex-wrap: wrap;
  top: 0em;
  left: 0em;
  margin-top: 0em;
}

.upperContainer2 {
  width: auto;
  background-color: #e9edc9;
  margin: 0em;
  display: flex;
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
  flex-wrap: wrap;
  top: 0em;
  left: 0em;
  margin-top: 0em;
}

.lowerContainer {
  width: auto;
  height: 60em;
  background-color: #fefae0;
  margin: 0em;
  display: flex;
  flex-direction: row; 
  justify-content: space-around; 
  align-items: center;
  flex-wrap: wrap;
  top: 0em;
  left: 0em;
}

.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc;
}

.accordion:after {
  content: '\002B';
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

</style>
