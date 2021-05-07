<template>
    <vs-navbar square fixed center-collapsed shadow class="navbar">
        <template #left>
            <div class="navbar_left-container">
                <vs-button transparent flat icon @click="toggleSidebar">
                    <box-icon
                        v-if="$mq === 'sm' || $mq === 'md'"
                        name="menu"
                        size="sm"
                    ></box-icon>
                </vs-button>
                <router-link to="/" class="navbar_left-container__logo">
                    <img
                        :src="
                            require(`../../assets/img/open-slot-logo-black.svg`)
                        "
                        alt=""
                        class="navbar_left-container__logo-image"
                    />
                    <div class="navbar_left-container__logo-title">Rules</div>
                </router-link>
            </div>
        </template>
        <div>{{ $t('titles.backendStandars') }}</div>
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

import LastReviewed from '@/components/common/LastReviewed.vue';
import TranslationButton from '@/components/common/TranslationButton.vue';

@Component({
    name: 'Navbar',
    components: {
        LastReviewed,
        TranslationButton,
    },
})
export default class Navbar extends Vue {
    private mainStore = mainStore.context(this.$store);

    private toggleSidebar(): void {
        this.mainStore.actions.toggleSidebar();
    }
    private get currentLanguage(): string | null {
        return this.mainStore.state.currentLanguage;
    }
}
</script>
<style lang="scss" scoped>
.navbar {
    &_left-container {
        display: flex;
        align-items: center;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

        &__logo {
            margin: 0 1rem 0 1rem;
            @include touch {
                margin: 0 0.75rem 0 0.75rem;
            }

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
