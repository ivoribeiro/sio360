<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <md-icon v-if="icon" class="md-size-4x">{{ icon }}</md-icon>
      <img v-if="!icon" class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">{{ this.label }}</h6>
      <h4 class="card-title">{{ this.title }}</h4>
      <p class="card-description">
        <slot></slot>
      </p>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "company-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/company.png")
    },
    description: {
      type: String,
      default: "Card description"
    },
    title: {
      type: String,
      default: "Cherry Computer is a new company that provides expertise in computer sells and support. We aim the higher education market, including colleges, universities, and professional educational institutions."
    },
    icon: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: "Cherry Computer, Inc."
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
