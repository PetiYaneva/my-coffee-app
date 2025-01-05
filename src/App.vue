<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-start">
      <div class="container mx-auto flex justify-between items-center px-6">
        <h1 class="header-text">Coffee for coffee lovers</h1>
        <nav>
          <ul class="navbar">
            <a class="active" href="#home">Home</a>
            <a href="#services">Menu</a>
            <a href="#contact">Contact Us</a>
            <a href="#information">Information</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()"> 
              <i class="fa fa-bars"></i>
            </a>
          </ul>
        </nav>
      </div>
    </header>

    <section id="services" class="py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-style">Our Services</h2>
        <table class="table-auto w-full border-collapse border border-gray-200">
          <tbody>
            <tr class="bg-white">
              <td class="border border-gray-300 py-4 px-6">
                <img src="@/assets/001.jpg" alt="Products" class="service-image mb-2">
                <h4 class="text-style">Products</h4>
                <h5 class="text-style">What do we offer?</h5>
                <button class="btn">Read More</button> 
              </td>
              <td class="border border-gray-300 py-4 px-6">
                <img src="@/assets/002.jpg" alt="Information" class="service-image mb-2">
                <h4 class="text-style">Information</h4>
                <h5 class="text-style">Answers to your questions</h5>
                <button class="btn btn-gray">Read More</button>
              </td>
              <td class="border border-gray-300 py-4 px-6">
                <img src="@/assets/003.jpg" alt="Company" class="service-image mb-2">
                <h4 class="text-style">Company</h4>
                <h5 class="text-style">About us</h5>
                <button class="btn">Read More</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="py-12 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-style">Interesting Facts</h2>
        <p class="text-style">The most important question: Tea, coffee, or caffeine-free? Let us help you choose.</p>
        <table class="table-auto w-full border-collapse border border-gray-200">
          <tbody>
            <tr class="bg-white">
              <td class="border border-gray-300 py-4 px-6">
                <img src="@/assets/004.jpg" alt="Coffee" class="service-image">
                <h4 class="text-style">Coffee</h4>
                <p class="text-style">Describe your service here.</p>
                <button class="btn">Read More</button> 
              </td>
              <td class="border border-gray-300 py-4 px-6">
                <img src="@/assets/What_Plants_Can_You_Make_Tea_From_.jpg" alt="Tea" class="service-image">
                <h4 class="text-style">Tea</h4>
                <p class="text-style">Describe your service here.</p>
                <button class="btn btn-gray">Read More</button>
              </td>
              <td class="border border-gray-300 py-4 px-6">
                <img src="@/assets/1.jpg" alt="Caffeine Free" class="service-image">
                <h4 class="text-style">Caffeine Free</h4>
                <p class="text-style">Describe your service here.</p>
                <button class="btn">Read More</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  
    <section class="py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-style">Our Clients Say</h2>
        <div class="flex justify-center">
          <div class="w-1/3 bg-white p-6 rounded shadow-md">
            <img src="@/assets/462240314_2386835081677165_3528890189184200949_n.jpg" alt="Client" class="w-16 h-16 rounded-full mx-auto mb-4">
            <p class="text-style">"Testimonials provide a sense of what it's like to work with you or use your services."</p>
            <p class="text-style">Robert Rose, Product Designer</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.header-text {
  font-style: italic;
  color: bisque;
}

.text-style{
  font-style: italic;
  color: #6b4226;
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
    background-image: url('@/assets/006.jpg');
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
