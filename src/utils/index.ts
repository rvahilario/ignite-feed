import moment from 'moment'

export function formatTimestampToDateTime(
	timestamp: number,
	formatMask?: string
): string {
	const timestampInMilliseconds = timestamp * 1000

	return moment(timestampInMilliseconds).format(formatMask)
}
