import chai from "chai"
import ceil from "../src/ceil.js"
const expect = chai.expect

describe("ceil",()=>{
    it("rounds number up to next largest integer",()=>{
        expect(ceil(2.005)).to.equal(3)
    });
    it("rounds negative number up to next largest integer",()=>{
        expect(ceil(-6.7)).to.equal(-6)
    });
    it("rounds 0 up to next largest integer",()=>{
        expect(ceil(0)).to.equal(0)
    });
    it("rounds number up to next largest number at precision",()=>{
        expect(ceil(4.467,2)).to.equal(4.47)
    });
    it("rounds number up to next largest number at precision",()=>{
        expect(ceil(-7.65432,1)).to.equal(-7.6)
    });
})