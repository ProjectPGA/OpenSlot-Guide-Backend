<template>
    <li
        class="content-aside__list-item"
        :class="{
            'content-aside__list-item--is-active':
                AsideContentItem.id === activeAsideContentItem,
        }"
    >
        <a href="" :title="AsideContentItem.translationText">{{
            AsideContentItem.translationText
        }}</a>
    </li>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import { AsideContentItem } from '@/models/aside/AsideContentItem';

@Component({
    name: 'ContentAsideItem',
    components: {},
})
export default class ContentAsideItem extends Vue {
    @Prop(Object) private AsideContentItem: AsideContentItem;

    private mainStore = mainStore.context(this.$store);

    private get activeAsideContentItem(): string {
        return this.mainStore.state.activeAsideContentItem;
    }
}
</script>

<style lang="scss" scoped>
.content-aside {
    &__list-item {
        padding: 0.1rem;
        opacity: 0.7;
        &--is-active {
            opacity: 1;
            font-weight: 600;
            &::marker {
                content: initial !important;
            }
        }
        &::marker {
            content: '';
        }
    }
}
</style>
