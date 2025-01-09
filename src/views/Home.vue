<template>
  <div>
    <section>
      <div>
        <h1 class="text-style-main">Our Services</h1>
        <table>
          <tbody>
            <tr class="bg-white">
              <td>
                <img src="@/assets/001.jpg" alt="Products" class="service-image mb-2">
                <h4 class="text-style-behind">Products</h4>
                <p class="text-style-behind">What do we offer?</p>
                <button class="btn">Read More</button> 
              </td>
              <td>
                <img src="@/assets/002.jpg" alt="Information" class="service-image mb-2">
                <h4 class="text-style-behind">Information</h4>
                <p class="text-style-behind">Answers to your questions</p>
                <button class="btn btn-gray">Read More</button>
              </td>
              <td>
                <img src="@/assets/003.jpg" alt="Company" class="service-image mb-2">
                <h4 class="text-style-behind">Company</h4>
                <p class="text-style-behind">About us</p>
                <button class="btn">Read More</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <div>
        <h1 class="text-style-main">Interesting Facts</h1>
        <p class="text-style">The most important question: Tea, coffee, or caffeine-free? Let us help you choose.</p>
        <table>
          <tbody>
            <tr class="bg-white">
              <td>
                <img src="@/assets/004.jpg" alt="Coffee" class="service-image">
                <h4 class="text-style-behind">Coffee</h4>
                <p class="text-style-behind">Describe your service here.</p>
                <button class="btn">Read More</button> 
              </td>
              <td>
                <img src="@/assets/What_Plants_Can_You_Make_Tea_From_.jpg" alt="Tea" class="service-image">
                <h4 class="text-style-behind">Tea</h4>
                <p class="text-style-behind">Describe your service here.</p>
                <button class="btn btn-gray">Read More</button>
              </td>
              <td>
                <img src="@/assets/1.jpg" alt="Caffeine Free" class="service-image">
                <h4 class="text-style-behind">Caffeine Free</h4>
                <p class="text-style-behind">Describe your service here.</p>
                <button class="btn">Read More</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    
  <section>
    <div>
      <h1 class="text-style-main">Our Clients Say</h1>
      <div>
        <div>
          <div class="slideshow">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              v-show="currentSlideIndex === index"
              class="slide"
            >
              <img
                :src="slide.image" 
                alt="Client"
                class="image-slide"
              />
              <div class="testimonial">
                <p class="text-style">"{{ slide.text }}"</p>
                <p class="text-style">{{ slide.name }}, {{ slide.role }}</p>
              </div>
            </div>

            <button class="prev" @click="prevSlide">&#10094;</button>
            <button class="next" @click="nextSlide">&#10095;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      currentSlideIndex: 0,
      slides: [
        {
          image: require('@/assets/22.jpg'), // Replace with the path to your image
          text: "Testimonials provide a sense of what it's like to work with you, or what it's like to use your products and services.",
          name: "Robert Rose",
          role: "Product Designer",
        },
        {
          image: require('@/assets/33.jpg'),
          text: "This service exceeded my expectations and was truly transformative. I highly recommend it to others.",
          name: "Emma Smith",
          role: "Software Engineer",
        },
        {
          image: require('@/assets/44.jpg'),
          text: "A game-changing experience. The team is highly professional and delivers exactly what they promise.",
          name: "John Doe",
          role: "Marketing Specialist",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>

<style scoped>
.slideshow {
  position: relative;
  max-width: 50%;
  margin: auto;
  text-align: center;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial {
  margin-top: 10px;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  font-size: 1.5em;
  border: none;
  background: transparent;
  color: #555;
}

.prev:hover,
.next:hover {
  color: #333;
}

.prev {
  left: -20px;
}

.next {
  right: -20px;
}

.image-slide{
  height: max-content;
  max-width: 40%;
  border-radius: 10px;
}

.header-text {
  font-style: italic;
  color: bisque;
}

.text-style{
  font-style: italic;
  color: #6b4226;
  text-align: center;
  font-size:25px;
}

.text-style-behind{
  font-style: italic;
  color: #6b4226;
  font-size:20px;
  padding: 3px;
}

.text-style-main{
  font-style: italic;
  color: #6b4226;
  text-align: center;
  font-size:40px;
  padding: 15px;
  padding-top: 15px;
}

header { 
  position: relative; 
  height: 600px;
 } 

 .navbar {
   position: relative; 
   top: 500px; 
   overflow: hidden; 
   background-color: #333; 
  } 
  
  .navbar a { 
    float: left; 
    display: block; 
    color: #f2f2f2; 
    text-align: center; 
    padding: 14px 16px; 
    text-decoration: none; 
    font-size: 17px; 
  } 
  
  .navbar a:hover { 
    background-color: #ddd; 
    color: black; 
  } 
  
  .navbar a.active { 
    background-color: #04AA6D; 
    color: white; 
  } 
  
  .content { 
    padding: 16px; 
  }

  .bg-start {
    background-image: url('@/assets/12.jpg');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    max-width: 100%;
    max-height: 100%; 
    opacity: 0.8;
  }

  .service-image {
    width: 350px !important;
    height: 200px !important;
    object-fit: cover !important;
    margin: 0 auto !important;
    border-radius: 8px !important;
  }

.btn {
  background-color: #38a169; 
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem; 
  border-radius: 0.25rem; 
  transition: background-color 0.3s ease; 
}

.btn:hover {
  background-color: #2f855a; 
}

.btn-gray {
  background-color: #2d3748;
}

.btn-gray:hover {
  background-color: #1a202c; 
}

.bg-beige {
  background-color: #f5f5dc;
}
.text-brown {
  color: #6b4226;
}
section.bg-cover {
  background-size: cover;
  background-position: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

th, td {
  background-color: #f5f5dc;
  padding: 30px;
}
th {
  background-color: #648069;
  font-weight: bold;
}
tr:nth-child(even) {
  background-color: #265b3145;
}
tr:hover {
  background-color: #9da79f;
}
</style>