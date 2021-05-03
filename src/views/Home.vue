<template>
    <div class="home">Home test</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'Home',
})
export default class Home extends Vue {
    private mainStore = mainStore.context(this.$store);
}
</script>

<style lang="scss" scoped></style>
