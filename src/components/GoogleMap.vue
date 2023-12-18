<script setup>
  import CalendarIcon from "@/components/icons/filled/calendar.vue";
  import PhoneIcon from "@/components/icons/filled/phone.vue";
  import EmailIcon from "@/components/icons/filled/email.vue";
  import MarkerIcon from "@/components/icons/filled/marker.vue";

  const props = defineProps({
    needDetails: {
      type: Boolean,
      required: false,
      default: false,
    },
  });
</script>
<template>
  <GMapMap
    class="relative"
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

    <div
      class="absolute max-w-sm top-1/2 right-10 bg-white w-fit py-10 px-5 rounded-lg shadow-lg flex flex-col gap-4 map-card"
      v-if="needDetails"
    >
      <div class="grid grid-cols-5">
        <CalendarIcon class="col-span-1" />
        <div class="flex flex-col col-span-4">
          <span class="text-gray-200 font-medium">Work schedule</span>
          <span class="text-gray-160">Mn - Sn: 10:00 am - 6:00 pm</span>
        </div>
      </div>
      <div class="grid grid-cols-5">
        <PhoneIcon class="col-span-1" />
        <div class="flex flex-col col-span-4">
          <span class="text-gray-200 font-medium">Phone</span>
          <span class="text-gray-160">+38 (068) 668 88 99</span>
        </div>
      </div>
      <div class="grid grid-cols-5">
        <EmailIcon class="col-span-1" />
        <div class="flex flex-col col-span-4">
          <span class="text-gray-200 font-medium">Email</span>
          <a
            class="text-gray-160 underline font-normal"
            href="mailto:medclinic@gmail.com"
            >medclinic@gmail.com</a
          >
        </div>
      </div>
      <div class="grid grid-cols-5">
        <MarkerIcon class="col-span-1" />
        <div class="flex flex-col col-span-4">
          <span class="text-gray-200 font-medium">Address</span>
          <span class="text-gray-160 break-words"
            >68 Khreschatyk Street, MedClinic Center, Kyiv, Ukraine</span
          >
        </div>
      </div>
    </div>
  </GMapMap>
</template>
<style scoped lang="scss">
  .map-card {
    transform: translateY(-50%);
  }
</style>
