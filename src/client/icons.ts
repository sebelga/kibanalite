import { appendIconComponentCache } from '@elastic/eui/lib/components/icon/icon';

import { icon as EuiIconHelp } from '@elastic/eui/lib/components/icon/assets/help';
import { icon as EuiIconAppManagement } from '@elastic/eui/lib/components/icon/assets/app_management';
import { icon as EuiIconPlusInCircle } from '@elastic/eui/lib/components/icon/assets/plus_in_circle';
import { icon as EuiIconCross } from '@elastic/eui/lib/components/icon/assets/cross';
import { icon as EuiIconCheck } from '@elastic/eui/lib/components/icon/assets/check';
import { icon as EuiIconArrowLeft } from '@elastic/eui/lib/components/icon/assets/arrow_left';
import { icon as EuiIconArrowRight } from '@elastic/eui/lib/components/icon/assets/arrow_right';
import { icon as EuiIconStorage } from '@elastic/eui/lib/components/icon/assets/storage';
import { icon as EuiIconIinCircle } from '@elastic/eui/lib/components/icon/assets/iInCircle';
import { icon as EuiIconEye } from '@elastic/eui/lib/components/icon/assets/eye';
import { icon as EuiIconAlert } from '@elastic/eui/lib/components/icon/assets/alert';
import { icon as EuiIconSearch } from '@elastic/eui/lib/components/icon/assets/search';
import { icon as EuiIconArrowDown } from '@elastic/eui/lib/components/icon/assets/arrow_down';
import { icon as EuiIconRefresh } from '@elastic/eui/lib/components/icon/assets/refresh';
import { icon as EuiIconSortUp } from '@elastic/eui/lib/components/icon/assets/sort_up';
import { icon as EuiIconPencil } from '@elastic/eui/lib/components/icon/assets/pencil';
import { icon as EuiIconTrash } from '@elastic/eui/lib/components/icon/assets/trash';

appendIconComponentCache({
  help: EuiIconHelp,
  managementApp: EuiIconAppManagement,
  plusInCircle: EuiIconPlusInCircle,
  cross: EuiIconCross,
  check: EuiIconCheck,
  arrowLeft: EuiIconArrowLeft,
  arrowRight: EuiIconArrowRight,
  storage: EuiIconStorage,
  iInCircle: EuiIconIinCircle,
  eye: EuiIconEye,
  alert: EuiIconAlert,
  search: EuiIconSearch,
  arrowDown: EuiIconArrowDown,
  refresh: EuiIconRefresh,
  sortUp: EuiIconSortUp,
  pencil: EuiIconPencil,
  trash: EuiIconTrash
});