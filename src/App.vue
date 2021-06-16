<template>
    <div id="app">
        <navbar navbarToggleButtonId="navbarToggleButtonId" />
        <sidebar navbarToggleButtonId="navbarToggleButtonId" />
        <router-view class="main-info-container" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import Navbar from '@/components/navbar/Navbar.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';

@Component({
    name: 'App',
    components: {
        Navbar,
        Sidebar,
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

<style lang="scss" scoped>
.main-info-container {
    margin-left: 16rem;
    background-color: white;
    padding: 1.5rem 14rem 1.5rem 1.5rem;
    height: 100vh;

    @include touch {
        margin-left: 0;
        height: initial;
        padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    }
}
</style>
