<template>
  <video :src-object.prop.camel="stream" :muted="muted" playsinline autoplay/>
</template>

<script>
export default {
  name: "VideoContainer",
  props: ['stream', 'muted']
}
</script>  