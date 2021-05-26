<template>
    <vs-navbar
        square
        center-collapsed
        right-collapsed
        shadow
        v-model="active"
        class="navbar"
    >
        <template #left>
            <div class="navbar_left-container">
                <router-link to="/" class="navbar_left-container__logo">
                    <img
                        :src="
                            require(`../../assets/img/open-slot-logo-black.svg`)
                        "
                        alt=""
                        class="navbar_left-container__logo-image"
                    />
                    <div class="navbar_left-container__logo-title">Backend</div>
                </router-link>
            </div>
        </template>
        <vs-navbar-item :active="active == 'intro'" id="intro">
            {{ $t('sections.intro') }}
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'api'" id="api">
            {{ $t('sections.api') }}
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'expressjs'" id="expressjs">
            {{ $t('sections.expressjs') }}
        </vs-navbar-item>
        <template #right>
            <div class="navbar_right-container">
                <last-reviewed />
                <translation-button />
            </div>
        </template>
    </vs-navbar>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import TranslationButton from '@/components/common/TranslationButton.vue';
import LastReviewed from '@/components/common/LastReviewed.vue';

@Component({
    name: 'Navbar',
    components: {
        TranslationButton,
        LastReviewed,
    },
})
export default class Navbar extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string | null {
        return this.mainStore.state.currentLanguage;
    }
    private active: string = 'intro';
}
</script>
<style lang="scss" scoped>
.navbar {
    &_left-container {
        display: flex;
        padding-top: 0.5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

        &__logo {
            display: flex;
            &-image {
                height: 2.25rem;
            }
            &-title {
                align-self: flex-end;
                padding-left: 0.25rem;
            }
        }
    }
    &_right-container {
        display: flex;
        align-items: baseline;

        &__language {
            text-transform: uppercase;
        }

        & * {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    }
}
</style>
