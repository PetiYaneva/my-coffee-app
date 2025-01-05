<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-beige py-4 shadow-md" style="background-image: url('@/assets/002.jpg'); background-size: cover; background-position: center;">
      <div class="container mx-auto flex justify-between items-center px-6">
        <h1 class="text-2xl font-bold">Coffee for coffee lovers</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-gray-800 hover:text-brown">Home</a></li>
            <li><a href="#services" class="text-gray-800 hover:text-brown">Menu</a></li>
            <li><a href="#" class="text-gray-800 hover:text-brown">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-cover bg-center h-96 flex items-center justify-center">
      <div class="text-center text-white">
        <h4 class="text-4xl mb-4">Your Go-to Spot for Coffee</h4>
        <div class="space-x-4">
          <button class="btn">Order Online</button>
          <button class="btn btn-gray">Our Menu</button>
        </div>
      </div>
    </section>

    <!-- Our Services Section -->
    <section id="services" class="py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Our Services</h2>
        <table class="table-auto w-full border-collapse border border-gray-200">
          <tbody>
            <tr class="bg-white">
              <td class="border border-gray-300 py-4 px-6">
                <img src="@/assets/001.jpg" alt="Products" class="service-image mb-2">
                <h4 class="text-xl font-bold">Products</h4>
                <h5 class="text">What do we offer?</h5>
                <button class="btn">Read More</button> 
              </td>
              <td class="border border-gray-300 py-4 px-6">
                <img src="@/assets/002.jpg" alt="Information" class="service-image mb-2">
                <h4 class="text-xl font-bold">Information</h4>
                <h5 class="text">Answers to your questions</h5>
                <button class="btn btn-gray">Read More</button>
              </td>
              <td class="border border-gray-300 py-4 px-6">
                <img src="@/assets/003.jpg" alt="Company" class="service-image mb-2">
                <h4 class="text-xl font-bold">Company</h4>
                <h5 class="text">About us</h5>
                <button class="btn">Read More</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>


    <!-- Interesting Facts Section -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-8">Interesting Facts</h3>
        <p class="mb-6">The most important question: Tea, coffee, or caffeine-free? Let us help you choose.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img src="@/assets/004.jpg" alt="Coffee" class="w-24 h-24 mx-auto mb-4">
            <h4 class="text-xl font-bold">Coffee</h4>
            <p class="text-gray-600">Describe your service here.</p>
          </div>
          <div>
            <img src="@/assets/What_Plants_Can_You_Make_Tea_From_.jpg" alt="Tea" class="w-24 h-24 mx-auto mb-4">
            <h4 class="text-xl font-bold">Tea</h4>
            <p class="text-gray-600">Describe your service here.</p>
          </div>
          <div>
            <img src="@/assets/1.jpg" alt="Caffeine Free" class="w-24 h-24 mx-auto mb-4">
            <h4 class="text-xl font-bold">Caffeine Free</h4>
            <p class="text-gray-600">Describe your service here.</p>
          </div>
        </div>
      </div>
    </section>

   
    <section class="py-12">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-8">Our Clients Say</h3>
        <div class="flex justify-center">
          <div class="w-1/3 bg-white p-6 rounded shadow-md">
            <img src="@/assets/462240314_2386835081677165_3528890189184200949_n.jpg" alt="Client" class="w-16 h-16 rounded-full mx-auto mb-4">
            <p class="text-gray-600 italic">"Testimonials provide a sense of what it's like to work with you or use your services."</p>
            <p class="mt-2 font-bold">Robert Rose, Product Designer</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
