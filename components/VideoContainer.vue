<template>
  <video :src-object.prop.camel="stream" :muted="muted" autoplay/>
</template>

<script>
export default {
  name: "VideoContainer",
  props: ['stream', 'muted']
}
</script>