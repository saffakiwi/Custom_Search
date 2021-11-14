const modifyText=require("./modifyText")


//test to run with different expressions
test("to test regex expressions", () => {
    expect(modifyText("car insurance")).toBe("car insurance")
});

test("to test regex expressions", () => {
    expect(modifyText("car%insurance")).toBe("car insurance")
});

test("to test regex expressions", () => {
    expect(modifyText("!car insurance")).toBe(" car insurance")
});

test("to test regex expressions", () => {
    expect(modifyText(";car?insurance!")).toBe(" car insurance ")
});

test("to test regex expressions", () => {
    expect(modifyText("car;insurance")).toBe("car insurance")
});