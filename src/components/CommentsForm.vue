<script setup>
  import StarIcon from "@/components/icons/star.vue";
  import StarFilledIcon from "@/components/icons/filled/star.vue";
</script>
<template>
  <div
    class="bg-gray rounded-xl py-14 md:py-8 px-10 md:px-4 grid md:block grid-cols-2 gap-10"
  >
    <div class="">
      <span class="text-gray-200 text-lg font-medium">Your assessment</span>
      <div class="flex items-center gap-3 mt-3">
        <star-icon class="md:w-4" />
        <star-icon class="md:w-4" />
        <star-icon class="md:w-4" />
        <star-icon class="md:w-4" />
        <star-icon class="md:w-4" />
      </div>
      <form @submit.prevent="">
        <textarea
          class="mt-10"
          id="comment"
          rows="10"
          placeholder="Write your review in as much detail as possible. This way you will help other users make a choice."
          minlength="10"
          maxlength="900"
          required
        />
        <div class="flex items-center gap-5 mt-5">
          <button>Send a review</button>
          <button class="btn-secondary">Cancel</button>
        </div>
      </form>
      <span class="text-sm text-gray-200 block mt-5 max-w-md"
        >You cannot leave a review because you are not logged in to your
        account</span
      >
    </div>
    <div class="flex flex-col gap-24 mt-10">
      <div class="">
        <div class="flex">
          <img
            class="w-10 h-10 object-cover object-center rounded-full"
            src="../assets/photo/person1.jpg"
            alt=""
          />
          <div class="flex flex-col ml-4">
            <span class="text-sm font-semibold">Robert Garcia</span>
            <span class="text-sm">Patient</span>
          </div>
          <div class="flex items-center gap-1 ml-auto mb-auto">
            <star-filled-icon class="md:w-4"></star-filled-icon>
            <star-filled-icon class="md:w-4"></star-filled-icon>
            <star-filled-icon class="md:w-4"></star-filled-icon>
            <star-filled-icon class="md:w-4"></star-filled-icon>
            <star-filled-icon class="md:w-4"></star-filled-icon>
          </div>
        </div>
        <p class="mt-3 text-sm text-black font-normal">
          For me, doctor visits were always stressful, but not here. The clinic
          provides a relaxing atmosphere, and their friendly team always goes
          the extra mile to ensure comfort and safety
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
