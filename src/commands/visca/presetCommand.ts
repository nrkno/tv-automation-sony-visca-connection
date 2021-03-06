import { ViscaCommand } from '../abstractCommand'
import { PresetOperation } from '../../enums'

export class PresetCommand extends ViscaCommand {
	operation: PresetOperation
	memoryNumber: number

	serialize () {
		return Buffer.from([
			0x80, 0x01, 0x04, 0x3f,
			this.operation, this.memoryNumber,
			0xff ])
	}
}
