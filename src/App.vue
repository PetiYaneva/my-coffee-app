<template>
  <div id="app">
    <header class="bg-start">
      <div>
        <h1 class="header-text">Coffee for coffee lovers</h1>
        <nav>
          <ul class="navbar">
            <a class="active">
              <router-link to="/" exact-active-class="active">Home</router-link>
            </a>
            <a>
              <router-link to="/services" exact-active-class="active">Menu</router-link>
            </a>
            <a>
              <router-link to="/contact" exact-active-class="active">Contact Us</router-link>
            </a>
            <a>
              <router-link to="/information" exact-active-class="active">Information</router-link>
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
router-view {
  display: block;
  width: auto;
  height: auto;
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
  width: 100%; /* Takes up full width */
  margin: 0;
  padding: 0;
  border: 0;
} 

.navbar {
  position: relative; 
  top: 500px; 
  overflow: hidden; 
  background-color: #333;
  margin: 0;
  padding: 0;
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
  opacity: 0.8;
  margin: 0;
  border: 0;
  width: 100%;
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
