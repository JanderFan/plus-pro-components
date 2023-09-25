import type { DefineComponent } from 'vue'

import { PlusDialog } from '@plus-pro-components/components/dialog'
import { PlusPagination } from '@plus-pro-components/components/pagination'
import { PlusTable } from '@plus-pro-components/components/table'
import { PlusRadio } from '@plus-pro-components/components/radio'
import { PlusDatePicker } from '@plus-pro-components/components/date-picker'
import { PlusDescriptions } from '@plus-pro-components/components/descriptions'
import { PlusDisplayItem } from '@plus-pro-components/components/display-item'
import { PlusForm } from '@plus-pro-components/components/form'
import { PlusFormItem } from '@plus-pro-components/components/form-item'
import { PlusPopover } from '@plus-pro-components/components/popover'
import { PlusSearch } from '@plus-pro-components/components/search'
import { PlusDialogForm } from '@plus-pro-components/components/dialog-form'
import { PlusDrawerForm } from '@plus-pro-components/components/drawer-form'
import { PlusPage } from '@plus-pro-components/components/page'
import { PlusStepsForm } from '@plus-pro-components/components/steps-form'
import { PlusInputTag } from '@plus-pro-components/components/input-tag'

const plugins: DefineComponent[] = [
  PlusDialog,
  PlusPagination,
  PlusTable,
  PlusRadio,
  PlusDatePicker,
  PlusDescriptions,
  PlusDisplayItem,
  PlusFormItem,
  PlusForm,
  PlusPopover,
  PlusSearch,
  PlusDialogForm,
  PlusDrawerForm,
  PlusPage,
  PlusStepsForm,
  PlusInputTag
] as unknown as DefineComponent[]

export default plugins
