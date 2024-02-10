<script setup>
  import StarIcon from "@/components/icon/star.vue";
  import StarFilledIcon from "@/components/icon/filled/star.vue";
  import CommentIcon from "@/components/icon/comment.vue";
  import useStore from "@/store";
  import { ref, computed } from "vue";
  import { fetchComments, createComment } from "@/supabase/comments";

  const store = useStore();
  const comment = ref("");
  const stars = ref(5);
  const isAuth = computed(() => store.getUser !== null);
  const comments = ref([]);

  const props = defineProps({
    object: {
      type: String,
      required: true,
      default: "",
    },
  });

  function turnOffBtn() {
    document.getElementById("btn-action").disabled = true;
  }

  function turnOnBtn() {
    document.getElementById("btn-action").disabled = false;
  }

  function fetchData() {
    fetchComments(props.object).then(data => {
      comments.value = data;
    });
  }

  const onSendComment = async () => {
    if (!isAuth.value || comment.value.length <= 3) return;

    turnOffBtn();
    const data = {
      text: comment.value,
      rating: stars.value,
      author: store.getUser.id,
      object: props.object,
    };

    const isSuccessful = await createComment(data);

    turnOnBtn();

    if (isSuccessful) {
      comment.value = "";
      fetchData();
    }
  };

  fetchData();
</script>
<template>
  <div
    class="bg-gray rounded-xl py-14 md:py-8 px-10 md:px-4 grid md:block grid-cols-2 gap-10"
  >
    <div class="">
      <span class="text-gray-200 text-lg font-medium">Your assessment</span>
      <div class="flex items-center">
        <star-filled-icon
          class="cursor-pointer"
          v-for="(_, i) in stars"
          :key="i"
          @click="stars = i + 1"
        ></star-filled-icon>
        <star-icon
          class="cursor-pointer"
          v-for="(_, i) in 5 - stars"
          :key="i"
          @click="stars = stars + i + 1"
        ></star-icon>
      </div>
      <form @submit.prevent="onSendComment">
        <textarea
          class="mt-5"
          id="comment"
          rows="10"
          placeholder="Write your review in as much detail as possible. This way you will help other users make a choice."
          minlength="3"
          maxlength="350"
          required
          v-model="comment"
        />
        <div class="flex items-center gap-5 mt-5">
          <button id="btn-action">Send a review</button>
        </div>
      </form>
      <span
        class="text-sm md:text-xs text-gray-200 block mt-5 max-w-md"
        v-if="!isAuth"
        >You cannot leave a review because you are not logged in to your
        account</span
      >
    </div>
    <div class="flex flex-col gap-24 mt-20">
      <div class="" v-for="(comment, index) in comments" :key="index">
        <div class="flex">
          <img
            class="w-10 h-10 object-cover object-center rounded-full"
            :src="comment.author.avatar_url"
            alt=""
          />
          <div class="flex flex-col ml-4">
            <span class="text-sm font-semibold">{{ comment.author.name }}</span>
            <span class="text-sm">Patient</span>
          </div>
          <div class="flex items-center gap-1 ml-auto mb-auto">
            <star-filled-icon
              class="cursor-pointer"
              v-for="(_, i) in comment.rating"
              :key="i"
              @click="stars = i + 1"
            ></star-filled-icon>
            <star-icon
              class="cursor-pointer"
              v-for="(_, i) in 5 - comment.rating"
              :key="i"
              @click="stars = stars + i + 1"
            ></star-icon>
          </div>
        </div>

        <p class="mt-3 text-sm text-black font-normal">
          {{ comment.text }}
        </p>
      </div>
      <div class="flex flex-col items-center" v-if="comments.length == 0">
        <comment-icon class="w-32 h-32" />
        <span>No reviews yet </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
