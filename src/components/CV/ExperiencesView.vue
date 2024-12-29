<template>
  <div class="experience">
    <h1>Experiences</h1>
    <ul v-if="filteredExperiences.length">
      
      <li v-for="experience in filteredExperiences" :key="experience.id" class="experience-item">
        <div class="experience-body">

          <div class="experience-image">
            <img 
              :src="experience.image_url"
              :alt="experience.title"
              class="experience-image"
            />

          </div>
  
          <div class="experience-content">

            <div class="experience-header">
              <h2>{{ experience.title }} - {{ experience.company }}</h2>
              <p>
                <span class="location">{{ experience.location }}</span> - 
                {{ experience.start_date }} - {{ experience.end_date || 'Present' }}
              </p>
            </div>

            <ul>
              <li v-for="(description, index) in experience.descriptions" :key="index" v-html="description.description"></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <p v-else>No experiences available.</p>
    <button v-if="!showAll && experiences.length > 3" @click="showAll = true">Show All</button>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      experiences: [],
      showAll: false,
    };
  },
  created() {
    this.fetchExperiences();
  },
  computed: {
    filteredExperiences() {
      return this.showAll ? this.experiences : this.experiences.slice(0, 3);
    }
  },
  methods: {
    getImageUrl(imagePath) {
      const baseUrl = 'https://storage.googleapis.com/tommella-website-storage/cv/experience_images'; 
      return `${baseUrl}/${imagePath}`;
    },
    async fetchExperiences() {
      try {
        const response = await axios.get('https://tommella-cv-prod-ee14d9b8bb74.herokuapp.com/experience/');
        console.log(response.data);
        this.experiences = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.experience {
  margin: 0 10%;
  padding: 1em;
}

/* Add this style for each experience item */
.experience-item {
  display: flex; /* Create a flex container */
  align-items: flex-start; /* Align items at the start (top-aligned) */
  margin-bottom: 1em;
}

/* Flex container for image and content */
.experience-body {
  display: flex; /* Horizontal alignment of child elements */
  align-items: flex-start; /* Align items to the top */
  gap: 1em; /* Space between the image and text */
  margin-bottom: 1em; /* Space between experience items */
  width: 100%; /* Ensure the container takes the full width */
}

.experience-image {
  width: 150px; /* Set a fixed width for the image */
  height: 150px; /* Set a fixed height for the image box */
  object-fit: cover; /* Crop the image to fit the box while maintaining aspect ratio */
  border-radius: 4px; /* Optional: rounded corners */
  border: 1px solid #ddd; /* Optional: border around the image */
  flex-shrink: 0; /* Prevent the image from shrinking */
}

/* Text Content Styling */
.experience-content {
  flex-grow: 1; /* Allow the text content to take remaining space */
  display: flex;
  flex-direction: column; /* Stack the content vertically */
  justify-content: flex-start; /* Align content to the top */
}

/* Header Styling */
.experience-header {
  margin-bottom: 0.5em; /* Space below the header */
}

/* Ensure the location and date align properly */
.location {
  font-weight: bold;
}

/* Add list styles for descriptions */
ul {
  list-style-type: disc;
  margin-left: 1em;
}

/* List item styling for experience entries */
li {
  margin-bottom: 0.5em;
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: left;
}

/* Sub-list styling for descriptions */
li ul {
  list-style-type: disc;
  margin-left: 1em;
  padding: 0;
}

li ul li {
  margin-bottom: 0.25em;
  border: none;
  padding: 0;
}

/* Sub-title styling */
h2 {
  font-size: 1.4em;
  margin-bottom: 0.25em;
  text-align: left;
}

/* Paragraph styling */
p {
  margin: 0.25em 0;
  text-align: left;
}

/* Button styling */
button {
  margin-top: 0.5em;
  padding: 0.5em 1em;
  background-color: #ced9e6;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}

button:hover {
  background-color: #fbfbfb;
}
</style>
