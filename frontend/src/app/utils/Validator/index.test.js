import * as Validator from '.'

describe('test util validator validateEmail', () => {
    it("should validate empty email", () => {
        expect(Validator.validateEmail("")).toBe(false)
    })
    it("should validate correct email format", () => {
        expect(Validator.validateEmail("test@test.com")).toBe(true)
    })
    it("should validate wrong email format", () => {
        expect(Validator.validateEmail("te@te.c")).toBe(false)
    })
})

describe('test util validator validatePassword', () => {
    it("should validate password with 6 character", () => {
        expect(Validator.validatePassword("123456")).toBe(true)
    })
    it("should validate password with less than 6 character", () => {
        expect(Validator.validatePassword("1234")).toBe(false)
    })
    it("should validate password with empty", () => {
        expect(Validator.validatePassword("")).toBe(false)
    })
})

describe('test util validator validateNumber', () => {
    it("should validate with number charactoer", () => {
        expect(Validator.validateNumber("1")).toBe(true)
    })
    it("should validate number with none number charactoer", () => {
        expect(Validator.validateNumber("aaa")).toBe(false)
    })
    it("should validate number with some number charactoer", () => {
        expect(Validator.validateNumber("aaa1")).toBe(false)
    })
})