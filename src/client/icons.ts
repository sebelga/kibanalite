import { appendIconComponentCache } from '@elastic/eui/lib/components/icon/icon';

import { icon as EuiIconHelp } from '@elastic/eui/lib/components/icon/assets/help';
import { icon as EuiIconAppManagement } from '@elastic/eui/lib/components/icon/assets/app_management';
import { icon as EuiIconPlusInCircle } from '@elastic/eui/lib/components/icon/assets/plus_in_circle';

appendIconComponentCache({
  help: EuiIconHelp,
  managementApp: EuiIconAppManagement,
  plusInCircle: EuiIconPlusInCircle
});