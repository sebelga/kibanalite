import { i18n } from './services/i18n';
import { http } from './services/http_client';
import { chrome } from './services/chrome'
import { docLinks } from './services/doc_links'

const core = {
  docLinks,
  chrome,
  i18n,
  http,
};

export const coreSetup = {
  http,
  i18n,
  getStartServices() {
    return [core]
  }
};
