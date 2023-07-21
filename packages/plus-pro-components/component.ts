import type { DefineComponent } from 'vue'

import { PlusDialog } from '@plus-pro-components/components/dialog'
import { PlusPagination } from '@plus-pro-components/components/pagination'
import { PlusTable } from '@plus-pro-components/components/table'
import { PlusRadio } from '@plus-pro-components/components/radio'
import { PlusDatePicker } from '@plus-pro-components/components/date-picker'
import { PlusDescriptions } from '@plus-pro-components/components/descriptions'
import { PlusForm } from '@plus-pro-components/components/form'
import { PlusSearch } from '@plus-pro-components/components/search'
import { PlusDialogForm } from '@plus-pro-components/components/dialog-form'
import { PlusDrawerForm } from '@plus-pro-components/components/drawer-form'

const plugins: DefineComponent[] = [
  PlusDialog,
  PlusPagination,
  PlusTable,
  PlusRadio,
  PlusDatePicker,
  PlusDescriptions,
  PlusForm,
  PlusSearch,
  PlusDialogForm,
  PlusDrawerForm
] as unknown as DefineComponent[]

export default plugins
