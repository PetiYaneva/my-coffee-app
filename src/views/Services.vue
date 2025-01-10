<template>
  <section>
    <div>
      <h1 class="text-style-main">Our menu</h1>
      <h1 class="text-style-main">Coffee</h1>
      <table>
        <tbody>
          <tr class="bg-white">
            <td>
              <div class="card">
                <img src="@/assets/gurmet.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Gourmet coffee</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/beans-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Coffee beans</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/ground-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Ground coffee</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/Doses-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>In capsules</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/InstantCoffee-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Instant</b></h4> 
                </div>
              </div>
            </td>
          </tr>
          <tr class="bg-white">
            <td>
              <div class="card">
                <img src="@/assets/AromaCoffee-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Flavored</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/decaf-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Caffeine-free</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/HighClassCoffee-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>High class</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/MidClassCoffee-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Mid class</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/Doses-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Dose</b></h4> 
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section>
    <div>
      <h1 class="text-style-main">Тее</h1>
      <table>
        <tbody>
          <tr class="bg-white">
            <td>
              <div class="card">
                <img src="@/assets/GreenTea-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Green tea</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/Ginger-175x175.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Natural ginger tea</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/BlackTea-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Black tea</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/WhiteTea-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>White tea</b></h4> 
                </div>
              </div>
            </td>
            <td>
              <div class="card">
                <img src="@/assets/MintNettelCamomileTea-175x175.png" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Other tea</b></h4> 
                </div>
              </div>
            </td>
            </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section>
    <div>
      <h1 class="text-style-main">The products</h1>
      <table>
        <tbody>
          <tr class="bg-white">
            <td>
              <img src="@/assets/1.png" alt="Products" class="service-image mb-2">
              <h4 class="text-style-behind">Coffee beans</h4>
            </td>
            <td>
              <img src="@/assets/2.png" alt="Information" class="service-image mb-2">
              <h4 class="text-style-behind">Ground coffee</h4>
            </td>
            <td>
              <img src="@/assets/3.png" alt="Company" class="service-image mb-2">
              <h4 class="text-style-behind">Caffeine-free</h4>
            </td>
          </tr>
          <tr class="bg-white">
            <td>
              <img src="@/assets/4.png" alt="Products" class="service-image mb-2">
              <h4 class="text-style-behind">Green tea</h4>
            </td>
            <td>
              <img src="@/assets/5.png" alt="Information" class="service-image mb-2">
              <h4 class="text-style-behind">Black tea</h4>
            </td>
            <td>
              <img src="@/assets/6.png" alt="Company" class="service-image mb-2">
              <h4 class="text-style-behind">Ginger tea</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesPage", // Use a multi-word component name
};
</script>

<style scoped>
#gurmet{
max-width: 50%;
max-height: 50%
}

.container{
text-align: center;
}

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

.card {
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;

}

.card:hover {
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
padding: 2px 16px;
}

</style>