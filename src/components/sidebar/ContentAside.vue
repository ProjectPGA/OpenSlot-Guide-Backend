<template>
    <aside class="content-aside">
        <ul class="content-aside__list">
            <template v-for="contentAsideItem in contentAsideItems">
                <content-aside-item
                    :AsideContentItem="contentAsideItem"
                    :key="contentAsideItem.id"
                />
            </template>
        </ul>
    </aside>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import ContentAsideItem from '@/components/sidebar/ContentAsideItem.vue';

import { AsideContentItem } from '@/models/aside/AsideContentItem';

@Component({
    name: 'ContentAside',
    components: { ContentAsideItem },
})
export default class ContentAside extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get contentAsideItems(): AsideContentItem[] {
        return this.mainStore.state.AsideContentItems;
    }
}
</script>

<style lang="scss" scoped>
.content-aside {
    position: fixed;
    max-width: 12rem;
    font-size: 0.82rem;
    top: 5rem;
    right: 1rem;
    &__list {
        &-item {
            padding: 0.1rem;
            opacity: 0.7;
            &--is-active {
                opacity: 1;
                font-weight: 600;
                &::marker {
                    content: initial;
                }
            }
            &::marker {
                content: '';
            }
        }
    }
}
</style>
