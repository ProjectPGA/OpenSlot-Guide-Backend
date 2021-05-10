import { Mutations } from 'vuex-smart-module';
import MainState from './MainState';

export default class MainMutations extends Mutations<MainState> {
    public changeLanguageToSpanish(): void {
        this.state.currentLanguage = 'es';
    }

    public changeLanguageToEnglish(): void {
        this.state.currentLanguage = 'en';
    }

    public toggleSidebar(): void {
        this.state.isSidebarShown = !this.state.isSidebarShown;
    }

    public closeSidebar(): void {
        this.state.isSidebarShown = false;
    }
}
