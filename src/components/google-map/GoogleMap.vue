<script setup>
  import CalendarIcon from "@/components/icon/filled/calendar.vue";
  import PhoneIcon from "@/components/icon/filled/phone.vue";
  import EmailIcon from "@/components/icon/filled/email.vue";
  import MarkerIcon from "@/components/icon/filled/marker.vue";

  const props = defineProps({
    needDetails: {
      type: Boolean,
      required: false,
      default: false,
    },
  });
</script>
<template>
  <div class="relative shadow-md">
    <GMapMap
      :center="{ lat: 50.44736273671434, lng: 30.522804673895084 }"
      :zoom="15"
      map-type-id="terrain"
      style="width: 100%; height: 40rem"
      :options="{
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
      }"
    >
      <GMapMarker
        :position="{ lat: 50.44736273671434, lng: 30.522804673895084 }"
        :clickable="true"
        :draggable="false"
        title="MedClinic"
      />
    </GMapMap>
    <div
      class="absolute md:block md:relative max-w-sm md:w-full top-1/2 md:top-0 right-10 md:right-0 bg-white w-fit py-10 px-5 rounded-lg md:rounded-t-none shadow-lg flex flex-col gap-4 map-card"
      v-if="needDetails"
    >
      <div class="grid grid-cols-5 gap-2 items-center">
        <calendar-icon class="col-span-1 w-full"></calendar-icon>
        <div class="flex flex-col col-span-4">
          <span class="text-gray-200 font-medium text-base">Work schedule</span>
          <span class="text-gray-160">Mn - Sn: 10:00 am - 6:00 pm</span>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-2 items-center">
        <phone-icon class="col-span-1 w-full"></phone-icon>
        <div class="flex flex-col col-span-4">
          <span class="text-gray-200 font-medium text-base">Phone</span>
          <span class="text-gray-160">+38 (068) 668 88 99</span>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-2 items-center">
        <email-icon class="col-span-1 w-full"></email-icon>
        <div class="flex flex-col col-span-4">
          <span class="text-gray-200 font-medium text-base">Email</span>
          <a
            class="text-gray-160 underline font-normal"
            href="mailto:medclinic@gmail.com"
            >medclinic@gmail.com</a
          >
        </div>
      </div>
      <div class="grid grid-cols-5 gap-2 items-center">
        <marker-icon class="col-span-1 w-full"></marker-icon>
        <div class="flex flex-col col-span-4">
          <span class="text-gray-200 font-medium text-base">Address</span>
          <span class="text-gray-160 break-words"
            >68 Khreschatyk Street, MedClinic Center, Kyiv, Ukraine</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .map-card {
    transform: translateY(-50%);

    @media (max-width: 600px) {
      transform: none;
    }
  }
</style>
