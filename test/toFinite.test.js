import chai from "chai"
import toFinite from "../src/toFinite.js"
const expect = chai.expect
const INFINITY = 1 / 0
const MAX_INTEGER = 1.7976931348623157e+308
describe("toFinite",()=>{
    it("converts already finite value to finite",()=>{
        expect(toFinite(3.2)).to.equal(3.2)
    });
    it("converts false to finite",()=>{
        expect(toFinite(false)).to.equal(0)
    });
    it("converts 0 to finite",()=>{
        expect(toFinite(0)).to.equal(0)
    });
    it("converts negative infinity to finite",()=>{
        expect(toFinite(-INFINITY)).to.equal(-1 * MAX_INTEGER)
    });
    it("converts infinity to finite",()=>{
        expect(toFinite(INFINITY)).to.equal(1 * MAX_INTEGER)
    });
    it("converts string to finite",()=>{
        expect(toFinite("test")).to.equal(0)
    });
})