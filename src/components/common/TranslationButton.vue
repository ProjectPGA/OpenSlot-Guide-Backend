<template>
    <vs-button active class="translation-button" @click="toggleLanguage">{{
        currentLanguage
    }}</vs-button>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'Navbar',
})
export default class Navbar extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string | null {
        return this.mainStore.state.currentLanguage;
    }

    private changeLanguageToSpanish(): void {
        this.mainStore.actions.changeLanguageToSpanish();
    }

    private changeLanguageToEnglish(): void {
        this.mainStore.actions.changeLanguageToEnglish();
    }

    private toggleLanguage(): void {
        this.currentLanguage === 'es'
            ? this.changeLanguageToEnglish()
            : this.changeLanguageToSpanish();
    }
}
</script>
<style lang="scss" scoped>
.translation-button {
    text-transform: uppercase;
}
</style>
