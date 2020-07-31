import { i18n } from './services/i18n';
import { http } from './services/http_client';
import { chrome } from './services/chrome'
import { docLinks } from './services/doc_links';
import { notifications } from './services/notifications';

const core = {
  docLinks,
  chrome,
  i18n,
  http,
  notifications,
};

export const coreSetup = {
  http,
  i18n,
  getStartServices() {
    return [core]
  }
};
