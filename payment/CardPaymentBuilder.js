class CardPaymentBuilder {
    constructor() {
        this.id = 0;
        this.ccv = 0;
        this.expiration = "";
        this.beneficiary = "";
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setCcv(ccv) {
        this.ccv = ccv;
        return this;
    }

    setExpiration(expiration) {
        this.expiration = expiration;
        return this;
    }

    setBeneficiary(beneficiary) {
        this.beneficiary = beneficiary;
        return this;
    }

    pay() {
        return this.id !== 0 && this.ccv !== 0 && this.expiration !== "" && 
        this.beneficiary !== "" ? true : new Error("Missing payment details");
    }
}

module.exports = {CardPaymentBuilder}