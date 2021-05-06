<template>
    <vs-sidebar square v-model="active" :open="$mq === 'xl' || $mq === 'lg'">
        <vs-sidebar-item id="home"> Home </vs-sidebar-item>
        <vs-sidebar-item id="market"> Market Overview </vs-sidebar-item>
        <vs-sidebar-item id="Music"> Music </vs-sidebar-item>
        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow> Social media </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram"> Instagram </vs-sidebar-item>
            <vs-sidebar-item id="twitter"> Twitter </vs-sidebar-item>
            <vs-sidebar-item id="Facebook"> Facebook </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow> Coding </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github"> Github </vs-sidebar-item>
            <vs-sidebar-item id="codepen"> Codepen </vs-sidebar-item>
            <vs-sidebar-item id="discord"> Discord </vs-sidebar-item>
            <vs-sidebar-item id="Javascript"> Javascript </vs-sidebar-item>
            <vs-sidebar-item id="git"> Git </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item id="donate"> Donate </vs-sidebar-item>
        <vs-sidebar-item id="drink"> Drink </vs-sidebar-item>
        <vs-sidebar-item id="shopping"> Shopping </vs-sidebar-item>
        <vs-sidebar-item id="chat"> Chat </vs-sidebar-item>
    </vs-sidebar>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'Sidebar',
    components: {},
})
export default class Sidebar extends Vue {
    private mainStore = mainStore.context(this.$store);

    private active: string = 'home';
}
</script>
<style lang="scss" scoped></style>
