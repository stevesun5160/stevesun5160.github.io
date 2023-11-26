<template>
  <div>
{{ data }}
  </div>
</template>

<script setup>
const { data } = useLazyAsyncData(
  'count', () => $fetch('https://script.google.com/macros/s/AKfycbzVzkkHdzBXQLllcaNm-cH6kDMKu8Bba3L-YdXZ1l0qQa14ryAkKDbrzBdNs1m2rnVxmQ/exec?stockID=tse_006208.tw'), {
  default: () => '-'
});
</script>
