import { appendIconComponentCache } from '@elastic/eui/lib/components/icon/icon';

import { icon as EuiIconHelp } from '@elastic/eui/lib/components/icon/assets/help';
import { icon as EuiIconAppManagement } from '@elastic/eui/lib/components/icon/assets/app_management';
import { icon as EuiIconPlusInCircle } from '@elastic/eui/lib/components/icon/assets/plus_in_circle';
import { icon as EuiIconCross } from '@elastic/eui/lib/components/icon/assets/cross';
import { icon as EuiIconCheck } from '@elastic/eui/lib/components/icon/assets/check';
import { icon as EuiIconArrowRight } from '@elastic/eui/lib/components/icon/assets/arrow_right';
import { icon as EuiIconStorage } from '@elastic/eui/lib/components/icon/assets/storage';
import { icon as EuiIconIinCircle } from '@elastic/eui/lib/components/icon/assets/iInCircle';
import { icon as EuiIconEye } from '@elastic/eui/lib/components/icon/assets/eye';

appendIconComponentCache({
  help: EuiIconHelp,
  managementApp: EuiIconAppManagement,
  plusInCircle: EuiIconPlusInCircle,
  cross: EuiIconCross,
  check: EuiIconCheck,
  arrowRight: EuiIconArrowRight,
  storage: EuiIconStorage,
  iInCircle: EuiIconIinCircle,
  eye: EuiIconEye,
});