<template>
    <div id="app">
        <navbar />
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import Navbar from '@/components/navbar/Navbar.vue';

@Component({
    name: 'App',
    components: {
        Navbar,
    },
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
