<template>
    <vs-tooltip bottom>
        {{ lastVersion }}
        <template #tooltip
            >{{ $t('common.components.lastReviewed')
            }}{{ lastReviewed }}</template
        >
    </vs-tooltip>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'LastReviewed',
})
export default class LastReviewed extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get lastReviewed(): string | null {
        return this.mainStore.getters.lastReviewed;
    }
    private get lastVersion(): string | null {
        return this.mainStore.getters.lastVersion;
    }
}
</script>
<style lang="scss" scoped></style>
