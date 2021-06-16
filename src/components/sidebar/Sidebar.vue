<template>
    <vs-sidebar
        square
        v-model="active"
        v-click-outside="closeSidebar"
        :open="desktopMediaQuerys ? desktopMediaQuerys : isSidebarShown"
    >
        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>
                    {{ $t('sections.intro') }}
                </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram"> Instagram </vs-sidebar-item>
            <vs-sidebar-item id="twitter"> Twitter </vs-sidebar-item>
            <vs-sidebar-item id="Facebook"> Facebook </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>
                    {{ $t('sections.api') }}
                </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github"> Github </vs-sidebar-item>
            <vs-sidebar-item id="codepen"> Codepen </vs-sidebar-item>
            <vs-sidebar-item id="discord"> Discord </vs-sidebar-item>
            <vs-sidebar-item id="Javascript"> Javascript </vs-sidebar-item>
            <vs-sidebar-item id="git"> Git </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>{{
                    $t('sections.expressjs')
                }}</vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github"> Github </vs-sidebar-item>
            <vs-sidebar-item id="codepen"> Codepen </vs-sidebar-item>
            <vs-sidebar-item id="discord"> Discord </vs-sidebar-item>
            <vs-sidebar-item id="Javascript"> Javascript </vs-sidebar-item>
            <vs-sidebar-item id="git"> Git </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>{{
                    $t('sections.mongoosejs')
                }}</vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github"> Github </vs-sidebar-item>
            <vs-sidebar-item id="codepen"> Codepen </vs-sidebar-item>
            <vs-sidebar-item id="discord"> Discord </vs-sidebar-item>
            <vs-sidebar-item id="Javascript"> Javascript </vs-sidebar-item>
            <vs-sidebar-item id="git"> Git </vs-sidebar-item>
        </vs-sidebar-group>
    </vs-sidebar>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'Sidebar',
    components: {},
})
export default class Sidebar extends Vue {
    @Prop(String) private navbarToggleButtonId: string;

    private active: string = 'home';

    private mainStore = mainStore.context(this.$store);

    private get isSidebarShown(): boolean {
        return this.mainStore.state.isSidebarShown;
    }

    private get currentMediaQuery(): string {
        // @ts-ignore
        return this.$mq;
    }

    private get desktopMediaQuerys(): boolean {
        return (
            this.currentMediaQuery === 'xl' || this.currentMediaQuery === 'lg'
        );
    }

    private closeSidebar(event: any): void {
        event.target.id === this.navbarToggleButtonId || this.desktopMediaQuerys
            ? null
            : this.mainStore.actions.closeSidebar();
    }
}
</script>
<style lang="scss" scoped></style>
