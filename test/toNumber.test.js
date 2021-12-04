import chai from "chai"
import toNumber from "../src/toNumber.js"
const expect = chai.expect
const NAN = 0 / 0

describe("toNumber",()=>{
    it("converts actual number value to number",()=>{
        expect(toNumber(3.2)).to.equal(3.2)
    });
    it("converts symbol to number and returns NAN",()=>{
        expect(toNumber(Symbol.iterator)).to.equal(NAN)
    });
    it("converts string value to number",()=>{
        expect(toNumber("5.8")).to.equal(5.8)
    });
    it("converts null to number",()=>{
        expect(toNumber(null)).to.equal(0)
    });
    it("converts object to number",()=>{
        expect(toNumber([1, 2, 3])).to.equal(`${[1, 2, 3]}`)
    });
    it("converts 0 to number",()=>{
        expect(toNumber(0)).to.equal(0)
    });
})