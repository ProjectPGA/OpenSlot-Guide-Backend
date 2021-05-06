<template>
    <div id="app">
        <navbar />
        <sidebar />
        <div class="main-info-container">
            <router-view />
        </div>
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
    @include touch {
        margin-left: 0;
    }
}
</style>
