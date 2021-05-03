<template>
    <div id="app"><router-view /></div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'App',
    components: {},
})
export default class App extends Vue {
    private mainStore = mainStore.context(this.$store);

    public created(): void {
        this.$i18n.locale = this.currentLanguage;
    }

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    @Watch('currentLanguage')
    private onChangeLanguage(): void {
        this.$i18n.locale = this.currentLanguage;
    }
}
</script>

<style lang="scss" scoped></style>
