import type { DefineComponent } from 'vue'

import { PlusDialog } from '@plus-pro-components/components/dialog'
import { PlusPagination } from '@plus-pro-components/components/pagination'
import { PlusTable } from '@plus-pro-components/components/table'
import { PlusRadio } from '@plus-pro-components/components/radio'
import { PlusDatePicker } from '@plus-pro-components/components/date-picker'
import { PlusDescriptions } from '@plus-pro-components/components/descriptions'
import { PlusDisplayItem } from '@plus-pro-components/components/display-item'
import { PlusForm } from '@plus-pro-components/components/form'
import { PlusFormItem, PlusFormFieldItem } from '@plus-pro-components/components/form-item'
import { PlusSearch } from '@plus-pro-components/components/search'
import { PlusDialogForm } from '@plus-pro-components/components/dialog-form'
import { PlusDrawerForm } from '@plus-pro-components/components/drawer-form'
import { PlusPage } from '@plus-pro-components/components/page'

const plugins: DefineComponent[] = [
  PlusDialog,
  PlusPagination,
  PlusTable,
  PlusRadio,
  PlusDatePicker,
  PlusDescriptions,
  PlusDisplayItem,
  PlusFormItem,
  PlusFormFieldItem,
  PlusForm,
  PlusSearch,
  PlusDialogForm,
  PlusDrawerForm,
  PlusPage
] as unknown as DefineComponent[]

export default plugins
