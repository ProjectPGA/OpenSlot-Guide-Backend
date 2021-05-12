<template>
    <div class="home">
        <intersect
            @enter="changeCurrentSection('default')"
            :threshold="[threshold]"
            :rootMargin="rootMargin"
        >
            <div class="title" id="default">
                <h3>Default <i>#</i></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque finibus metus ac tincidunt pulvinar. Integer
                    sit amet sem non mauris pharetra efficitur. Proin porttitor,
                    nisi sed sodales ornare, lectus justo posuere orci, ac
                    laoreet mi lacus in tellus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Nam
                    eget sollicitudin nisl. Phasellus suscipit non nisl nec
                    tempor. Etiam vitae semper dui. Nullam nunc sem, ultrices in
                    venenatis auctor, convallis sed urna. Sed non tortor lorem.
                    In hac habitasse platea dictumst. Vivamus vulputate nisl sed
                    enim ornare vestibulum. Donec a erat enim. Donec consectetur
                    accumsan lacus non facilisis. Cras molestie arcu tortor,
                    quis accumsan ante tincidunt non. Donec vulputate finibus
                </p>
            </div>
        </intersect>
        <intersect
            @enter="changeCurrentSection('group')"
            :threshold="[threshold]"
            :rootMargin="rootMargin"
        >
            <div class="title" id="group">
                <h3>Group <i>#</i></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque finibus metus ac tincidunt pulvinar. Integer
                    sit amet sem non mauris pharetra efficitur. Proin porttitor,
                    nisi sed sodales ornare, lectus justo posuere orci, ac
                    laoreet mi lacus in tellus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Nam
                    eget sollicitudin nisl. Phasellus suscipit non nisl nec
                    tempor. Etiam vitae semper dui. Nullam nunc sem, ultrices in
                    venenatis auctor, convallis sed urna. Sed non tortor lorem.
                </p>
            </div>
        </intersect>
        <intersect
            @enter="changeCurrentSection('reduce')"
            :threshold="[threshold]"
            :rootMargin="rootMargin"
        >
            <div class="title" id="reduce">
                <h3>Reduce <i>#</i></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque finibus metus ac tincidunt pulvinar. Integer
                    sit amet sem non mauris pharetra efficitur. Proin porttitor,
                    nisi sed sodales ornare, lectus justo posuere orci, ac
                    laoreet mi lacus in tellus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Nam
                    eget sollicitudin nisl. Phasellus suscipit non nisl nec
                    tempor. Etiam vitae semper dui. Nullam nunc sem, ultrices in
                    venenatis auctor, convallis sed urna. Sed non tortor lorem.
                    In hac habitasse platea dictumst. Vivamus vulputate nisl sed
                    enim ornare vestibulum. Donec a erat enim. Donec consectetur
                </p>
            </div>
        </intersect>
        <intersect
            @enter="changeCurrentSection('hoverExpand')"
            :threshold="[threshold]"
            :rootMargin="rootMargin"
        >
            <div class="title" id="hoverExpand">
                <h3>Hover expand <i>#</i></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque finibus metus ac tincidunt pulvinar. Integer
                    sit amet sem non mauris pharetra efficitur. Proin porttitor,
                    nisi sed sodales ornare, lectus justo posuere orci, ac
                    laoreet mi lacus in tellus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Nam
                    eget sollicitudin nisl. Phasellus suscipit non nisl nec
                    tempor. Etiam vitae semper dui. Nullam nunc sem, ultrices in
                    venenatis auctor, convallis sed urna. Sed non tortor lorem.
                    In hac habitasse platea dictumst. Vivamus vulputate nisl sed
                    enim ornare vestibulum. Donec a erat enim. Donec consectetur
                </p>
            </div>
        </intersect>
        <intersect
            @enter="changeCurrentSection('querysNomenclature')"
            :threshold="[threshold]"
            :rootMargin="rootMargin"
        >
            <div class="title" id="querysNomenclature">
                <h3>Querys nomenclature examples <i>#</i></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque finibus metus ac tincidunt pulvinar. Integer
                    sit amet sem non mauris pharetra efficitur. Proin porttitor,
                    nisi sed sodales ornare, lectus justo posuere orci, ac
                    laoreet mi lacus in tellus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Nam
                    eget sollicitudin nisl. Phasellus suscipit non nisl nec
                    tempor. Etiam vitae semper dui. Nullam nunc sem, ultrices in
                    venenatis auctor, convallis sed urna. Sed non tortor lorem.
                    In hac habitasse platea dictumst. Vivamus vulputate nisl sed
                    enim ornare vestibulum. Donec a erat enim. Donec consectetur
                </p>
            </div>
        </intersect>
        <intersect
            @enter="changeCurrentSection('open')"
            :threshold="[threshold]"
            :rootMargin="rootMargin"
        >
            <div class="title" id="open">
                <h3>Open <i>#</i></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque finibus metus ac tincidunt pulvinar. Integer
                    sit amet sem non mauris pharetra efficitur. Proin porttitor,
                    nisi sed sodales ornare, lectus justo posuere orci, ac
                    laoreet mi lacus in tellus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Nam
                    eget sollicitudin nisl. Phasellus suscipit non nisl nec
                    tempor. Etiam vitae semper dui. Nullam nunc sem, ultrices in
                    venenatis auctor, convallis sed urna. Sed non tortor lorem.
                    In hac habitasse platea dictumst. Vivamus vulputate nisl sed
                    enim ornare vestibulum. Donec a erat enim. Donec consectetur
                </p>
            </div>
        </intersect>
        <intersect
            @enter="changeCurrentSection('positionRight')"
            :threshold="[threshold]"
            :rootMargin="rootMargin"
        >
            <div class="title" id="positionRight">
                <h3>Position Right <i>#</i></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque finibus metus ac tincidunt pulvinar. Integer
                    sit amet sem non mauris pharetra efficitur. Proin porttitor,
                    nisi sed sodales ornare, lectus justo posuere orci, ac
                    laoreet mi lacus in tellus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Nam
                    eget sollicitudin nisl. Phasellus suscipit non nisl nec
                    tempor. Etiam vitae semper dui. Nullam nunc sem, ultrices in
                    venenatis auctor, convallis sed urna. Sed non tortor lorem.
                    In hac habitasse platea dictumst. Vivamus vulputate nisl sed
                    enim ornare vestibulum. Donec a erat enim. Donec consectetur
                </p>
            </div>
        </intersect>
        <intersect
            @enter="changeCurrentSection('api')"
            :threshold="[threshold]"
            :rootMargin="rootMargin"
        >
            <div class="title" id="api">
                <h3>API <i>#</i></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque finibus metus ac tincidunt pulvinar. Integer
                    sit amet sem non mauris pharetra efficitur. Proin porttitor,
                    nisi sed sodales ornare, lectus justo posuere orci, ac
                    laoreet mi lacus in tellus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Nam
                    eget sollicitudin nisl. Phasellus suscipit non nisl nec
                    tempor. Etiam vitae semper dui. Nullam nunc sem, ultrices in
                    venenatis auctor, convallis sed urna. Sed non tortor lorem.
                    In hac habitasse platea dictumst. Vivamus vulputate nisl sed
                    enim ornare vestibulum. Donec a erat enim. Donec consectetur
                </p>
            </div>
        </intersect>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Intersect from 'vue-intersect';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'Home',
    components: {
        Intersect,
    },
})
export default class Home extends Vue {
    private mainStore = mainStore.context(this.$store);

    private threshold: Array<number> = [1];
    private rootMargin: string = '0px 0px -50px 0px';

    private changeCurrentSection(currentSection: string) {
        this.mainStore.actions.changeCurrentSection(currentSection);
    }
}
</script>

<style lang="scss" scoped>
.title {
    padding: 2.5rem 0 2.5rem 0;

    & i {
        display: none;
    }
    & h3:hover {
        & i {
            display: inline-block;
        }
    }
}
</style>
