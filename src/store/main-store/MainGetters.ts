import { Getters } from 'vuex-smart-module';
import MainState from './MainState';

export default class MainGetters extends Getters<MainState> {
    public get lastReviewed(): string {
        // TODO. Replace this fixed data with dynamic one
        return new Date().toLocaleDateString();
    }
    public get lastVersion(): string {
        // TODO. Replace this fixed data with dynamic one
        return '0.1';
    }
}
