import EncryptionService from "../../Application/Adapters/EncryptionService.js";
import {hashSync} from 'bcrypt'

export default class BcryptService extends EncryptionService {
    async encrypt(value) {
        const passwordHash = hashSync(value, 10)
        return passwordHash
    }

    verifyPasswords(value) {

    }
}