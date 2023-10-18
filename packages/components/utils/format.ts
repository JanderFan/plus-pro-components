import dayjs from 'dayjs'
import type { ConfigType } from 'dayjs'

/**
 *
 * @param {string | number | Date | Dayjs | null | undefined} date
 * @param format 默认 YYYY-MM-DD HH:mm:ss
 * @returns YYYY-MM-DD HH:mm:ss
 */
export function formatDate(date?: ConfigType, format = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(date || new Date()).format(format)
}

export function formatMoney(val: string | number, format = '￥', decimal = 2): string {
  return `${format}${Number(val).toFixed(decimal)}`
}
