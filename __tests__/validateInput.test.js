import { validateInput } from "../src/client/js/validateInput"

describe('testing the validateInput fucntionality', () => {
    test('testing validate module is present & fucntioning', () => {
        expect(validateInput).toBeDefined()
    })
})