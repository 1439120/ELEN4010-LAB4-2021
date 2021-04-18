let classList = require("./../classList")

describe("Adding students in class list", () => {
    test("Adding a student increase the number of students in class", () => {
        let initState = classList.size()
        classList.add("Nkosana")
        let finSate = classList.size()
        expect(finSate).toBeGreaterThan(initState)
    })
    test("Correct student is added in class", () => {
        let stud = "Thembelihle"
        classList.add(stud)
        expect(stud).toEqual(classList.get(classList.size()-1))
    })

})

describe("Edit students in class list", () => {
    test("The new name of the student should be updated", () => {
        let stud = "Thembelihle"
        classList.add(stud)
        let newname = "Sindisiwe"
        classList.edit(newname, classList.size()-1)
        expect(newname).toEqual(classList.get(classList.size()-1))
    })
})

describe("Delete students in class list", () => {
    test("The size decreases by one if a student is deleted", () => {
        let stud = "Thembelihle"
        classList.add(stud)
        let initState = classList.size()
        classList.delete(0)
        expect(initState - 1).toEqual(classList.size())
    })
})