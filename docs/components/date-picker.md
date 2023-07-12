# date-picker

## 简介

PlusDatePicker 是由两个 el-date-picker （属性 type 不包含 range）组件组成，核心功能点是两个选择可以独立开来。

## 基础用法

:::demo

date-picker/basic

:::

## DatePicker API

### DatePicker Attributes

| 名称                    | 说明                                      | 类型                                             | 默认值                                                              | 是否必须 |
| ----------------------- | ----------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------- | -------- |
| `model-value / v-model` | 绑定值                                    | `string[]`                                       | `false`                                                             | 否       |
| `type`                  | el-date-picker 的类型                     | `year/month/date/dates/datetime/week`            | `datetime`                                                          | 否       |
| `format`                | 显示在输入框中的格式                      | `string`                                         | `YYYY-MM-DD HH:mm:ss`                                               | 否       |
| `valueFormat`           | 绑定值的格式。 不指定则绑定值为 Date 对象 | `string`                                         | `YYYY-MM-DD HH:mm:ss`                                               | 否       |
| `rangeSeparator`        | 开始时间和结束时间中间的分隔符            | `string`                                         | `/`                                                                 | 否       |
| `startProps`            | 开始的`el-date-picker` 的 props           | `object`                                         | `{}`                                                                | 否       |
| `endProps`              | 结束的`el-date-picker` 的 props           | `object`                                         | `{}`                                                                | 否       |
| `startDisabledDate`     | 开始的`el-date-picker` 的 disabledDate    | `(startTime: Date, endValue: string) => boolean` | [startDisabledDate](/components/date-picker.html#startdisableddate) | 否       |
| `endDisabledDate`       | 结束的`el-date-picker` 的 disabledDate    | `(endTime: Date, startValue: string) => boolean` | [endDisabledDate](/components/date-picker.html#enddisableddate)`    | 否       |

#### startDisabledDate

默认值

```js
const startDisabledDate = (startTime, endValue) => {
  if (!endValue) return false
  return startTime.getTime() > new Date(endValue).getTime()
}
```

#### endDisabledDate

默认值

```js
const endDisabledDate = (endTime, startValue) => {
  if (!startValue) return false
  return endTime.getTime() < new Date(startValue).getTime()
}
```

### DatePicker Events

| 名称     | 说明           | 类型                                  |
| -------- | -------------- | ------------------------------------- |
| `change` | 用户选值时触发 | [Function] `(value:string[]) => void` |

::: tip 提示
el-date-picker 的其他事件的支持写法 如 blur

```html
<PlusDatePicker :start-props="{onBlur:()=>{ } }" :end-props="{onBlur:()=>{ } }" />
```

:::

### Exposes

| 名称                  | 说明                   | 类型                                |
| --------------------- | ---------------------- | ----------------------------------- |
| `startPickerInstance` | 开始的`el-date-picker` | `InstanceType<typeof ElDatePicker>` |
| `endPickerInstance`   | 结束的`el-date-picker` | `InstanceType<typeof ElDatePicker>` |
