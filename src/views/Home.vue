<template>
  <div class="home">
     <BlogPost :post="welcomeScreen" />
     <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost'
export default {
  name: "Home",
  components: {
    BlogPost,

  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
        sampleBlogPost: [
          {
        title: "2nd post title",
        blogHTML:
          "this is a filler blogpost",
     blogCoverPhoto: "beautiful-stories",
      },
           {
        title: "3nd post title",
        blogHTML:
          "this is a filler blogpost2",
     blogCoverPhoto: "beautiful-stories",
      },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-wrapper{
  display: flex;
}

</style>
