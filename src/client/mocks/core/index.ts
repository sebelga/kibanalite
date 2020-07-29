import { i18n } from './i18n';
import { http } from './http_client';
import { chrome } from './chrome'
import { docLinks } from './doc_links'

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
