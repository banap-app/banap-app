import DomainException from "../Exceptions/DomainException.js";

export default class DomainValidator {
    static str_validate_length(domain, str_max){
        if (typeof(str_max) !== "number") throw new DomainException("Must be a number")
        
        if (domain.length > 156) throw new DomainException("Domain is too long");
        
    }

    static str_is_not_empty(domain){
        if (domain.length === 0) throw new DomainException("Domain is required");
    }
}
