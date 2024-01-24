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
    pattern: String,
    incorrect: Boolean,
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
  <div :class="{ incorrect: incorrect }">
    <label class="font-medium md:text-sm" v-if="label" :for="inputId"
      >{{ label }}
      <span class="font-bold text-red" v-if="required">*</span></label
    >
    <div class="relative">
      <input
        :id="inputId"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxlength || 50"
        :minlength="minlength || 2"
        :required="required"
        :value="modelValue"
        :autocomplete="autocomplete"
        :pattern="pattern"
        @input="$emit('update:modelValue', $event.target.value.trim())"
      />

      <component
        class="icon"
        v-if="type === 'password'"
        :is="componentId"
        @click="onShowPassword"
      />
    </div>
    <span class="text-xs font-thin" v-show="incorrect"
      >Please enter a valid data</span
    >
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

  .incorrect {
    input {
      border: 1px solid red;
      background-image: linear-gradient(#ffffff, #ff000009);

      &:focus {
        outline: 1px solid #ff3f3f;
      }
    }

    span {
      color: red;
    }
  }
</style>
