<template>
 <div>
    <div v-for="(section, index) in sections" :key="index">
      <button class="accordion" id="yasha" @click="toggleAccordion(index)">
        {{ section.title }}
      </button>
      <div
        class="panel"
        :style="{ maxHeight: activeIndex === index ? panelHeight + 'px' : '0' }"
      >
        <div v-html="section.content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationPage",
  data() {
    return {
      activeIndex: null,
      sections: [
      {
          title: "Coffee",
          content: `
            <div class="upperContainer">
              <ul class="ingredients">
                <li>Coffee is made from roasted coffee beans.</li>  
                <li>It contains caffeine, which boosts energy.</li>  
                <li>Popular types include espresso, latte, and black coffee.</li>  
                <li>Coffee is grown in tropical regions.</li>  
                <li>It’s one of the most widely consumed drinks worldwide.</li>  
                <li>Coffee originated in Ethiopia.</li>  
                <li>Brazil is the largest coffee producer.</li>  
                <li>The coffee plant grows best in warm climates.</li>  
                <li>Coffee was first brewed in the 15th century.</li>  
                <li>Over 2 billion cups of coffee are consumed daily worldwide.</li>               
                </ul>
              <img class="ingredientsImg" src="src/assets/coffee.jpg" />
            </div>
          `
        },
        { title: "Tea", content: `
        <div class="lowerContainer">
        <img id="img2" class="ingredientsImg" src="@/assets/Tea.jpg"/>
        <ul class="ingredients">
          <ul class="ingredients">
            <li>Tea is made from the leaves of the Camellia sinensis plant.</li>  
            <li>It is the second most consumed beverage in the world, after water.</li>  
            <li>There are four main types of tea: black, green, white, and oolong.</li>  
            <li>Tea originated in China over 5,000 years ago.</li>  
            <li>India is the largest producer of black tea.</li>  
            <li>Green tea is rich in antioxidants and has numerous health benefits.</li>  
            <li>Herbal teas, like chamomile and peppermint, contain no caffeine.</li>  
            <li>Matcha is a powdered form of green tea, popular in Japan.</li>  
            <li>Tea can be served hot or iced, depending on preference.</li>  
            <li>Over 3 billion cups of tea are consumed daily worldwide.</li>
          </ul>
        </div>
        ` 
      },
        { title: "Caffeine-free coffee", content: `<div class="upperContainer2">
            <ul class="ingredients">
              <li>Decaffeinated coffee is made by removing most of the caffeine from regular coffee beans.</li>  
              <li>It still retains the flavor of coffee but with significantly less caffeine.</li>  
              <li>Common methods of decaffeination include water processing and chemical solvents.</li>  
              <li>Decaf coffee contains about 97% less caffeine than regular coffee.</li>  
              <li>It’s a great option for those sensitive to caffeine.</li>  
              <li>Decaf coffee can be brewed just like regular coffee.</li>  
              <li>The first decaffeination process was developed in the early 1900s.</li>  
              <li>Decaf espresso is commonly used in caffeine-free lattes and cappuccinos.</li>  
              <li>Decaf still provides antioxidants and similar health benefits to regular coffee.</li>  
              <li>Some coffee lovers drink decaf in the evening to avoid disrupting sleep.</li> 
            </ul>
            <img class="ingredientsImg" src="../assets/coffee.jpg"/>
        </div>` }
      ]
    };
  },
  computed: {
    panelHeight() {
      return 800; // Adjust based on content or dynamically calculate
    }
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style>
 #yasha {
  background-color: rgb(186, 250, 186);
  color: #444;
  cursor: pointer;
  padding: 50px;
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  font-size: 30px;
  transition: 0.4s;
  border:#444;
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

body {
  margin: 0em;
}

.ingredients {
  text-align: center;
  font-size: 2rem;
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
  background-color: #fefae0;
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
