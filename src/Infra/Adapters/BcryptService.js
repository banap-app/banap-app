import EncryptionService from "../../Application/Adapters/EncryptionService.js";

export default class BcryptService extends EncryptionService {
    encrypt(value) {
        return value;
    }

    verifyPasswords(value) {

    }
}