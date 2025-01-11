<template>
<div class="about-container">
    <div class="image-section">
      <img src="@/assets/java.jpeg" alt="Person Image" />
    </div>
    <div class="text-section">
      <h1>Welcome!</h1>
      <p>
        We are a small Bulgarian coffee brand, founded in 2024 in Brussels, Belgium,
        after a visit to the Java cafe. We love drinking coffee and we believe that it
        is not just a drink, but a way to show someone you love them and to feel warmth
        inside yourself. We created the brand to help more people feel this "warmth"
        more easily.
      </p>
      <button class="learn-more-btn">LEARN MORE</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "AboutPage" // Use a multi-word component name
  };
</script>

<style scoped>
.about-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
}

.image-section img {
  width: 600px;
  border-radius: 10px;
  margin-right: 20px;
}

.text-section {
  max-width: 1000px;
}

.text-section h1 {
  font-size: 8rem;
  color: #4f2f24;
}

.text-section p {
  font-size: 2rem;
  line-height: 1.6;
  color: #333;
  margin: 20px 0;
}

.learn-more-btn {
  background-color: #795548;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #5d4037;
}
</style>