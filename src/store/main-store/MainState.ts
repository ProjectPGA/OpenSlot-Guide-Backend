import { AsideContentItem } from '@/models/aside/AsideContentItem';

export default class MainState {
    public currentLanguage: string = 'en';
    public isSidebarShown: boolean = true;
    public activeAsideContentItem: string = '';
    public AsideContentItems: AsideContentItem[] = [
        {
            id: 'default',
            translationText: 'Default',
        },
        {
            id: 'group',
            translationText: 'Group',
        },
        {
            id: 'reduce',
            translationText: 'Reduce',
        },
        {
            id: 'hoverExpand',
            translationText: 'Hover expand',
        },
        {
            id: 'querysNomenclature',
            translationText: 'Querys nomenclature examples',
        },
        {
            id: 'open',
            translationText: 'Open',
        },
        {
            id: 'positionRight',
            translationText: 'Position Right',
        },
        {
            id: 'api',
            translationText: 'API',
        },
    ];
}
