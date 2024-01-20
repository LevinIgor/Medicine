<script setup>
  import EyeIcon from "@/components/icons/eye.vue";
  import EyeSlashIcon from "@/components/icons/eye-slash.vue";
  import { computed, shallowRef } from "vue";
  const props = defineProps({
    label: String,
    type: String,
    placeholder: String,
    modelValue: String,
    required: Boolean,
    maxlength: Number,
    minlength: Number,
    autocomplete: String,
  });

  const emit = defineEmits(["update:modelValue"]);

  const inputId = `input-${Math.random().toString(36).substring(2, 9)}`;

  function onShowPassword() {
    const input = document.getElementById(inputId);
    input.type = input.type === "password" ? "text" : "password";
    input.focus();
    icon.value = input.type === "password" ? EyeIcon : EyeSlashIcon;
  }

  const icon = shallowRef(EyeIcon);

  const componentId = computed(() => {
    return icon.value;
  });
</script>
<template>
  <div>
    <label class="font-medium md:text-sm" v-if="label" :for="inputId"
      >{{ label }}
      <span class="font-bold text-red" v-if="required">*</span></label
    >
    <div class="relative">
      <input
        :id="inputId"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxlength || 32"
        :minlength="minlength || 3"
        :required="required"
        :value="modelValue"
        :autocomplete="autocomplete"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <component
        class="icon"
        v-if="type === 'password'"
        :is="componentId"
        @click="onShowPassword"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .icon {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray-160);
    cursor: pointer;
  }
</style>
