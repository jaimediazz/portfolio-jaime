import I18n from 'i18n-js';
import en from './en';
import es from './es';

I18n.locale = 'en';

I18n.fallbacks = true;

I18n.translations = {
    en,
    es,
};

const initTranslations = () => I18n.translations;

const strings = (name, params = {}) => I18n.t(name, params);

export { I18n, getLocale, initTranslations, strings };