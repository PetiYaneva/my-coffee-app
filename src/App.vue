<template>
  <div>
    <header class="bg-start">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="header-text">Coffee for coffee lovers</h1>
        <nav>
          <ul class="navbar">
            <a class="active">
              <router-link class="active" to="/">Home</router-link>
            </a>
            <a>
              <router-link to="/services">Menu</router-link>
            </a>
            <a>
              <router-link to="/contact">Contact Us</router-link>
            </a>
            <a>
              <router-link to="/information">Information</router-link>
            </a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()"> 
              <i class="fa fa-bars"></i>
            </a>
          </ul>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

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
}

.text-style-main{
  font-style: italic;
  color: #6b4226;
  text-align: center;
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
    min-width: 100%;
    max-height: 100%; 
    opacity: 0.8;
    padding-bottom:25px;
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
  padding: 8px;
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
