const getData = require('./getDataForTesting.js');

test('Test 1. Height: 139', async () => {
    const data = await getData(139)

    expect(data).toStrictEqual([
        ['Brevin Knight', 'Nate Robinson'],
        ['Nate Robinson', 'Mike Wilks']
    ]);

})

test('Test 2. Height: ABC', async () => {
    const data = await getData("ABC")

    expect(data).toStrictEqual("Please provide a valid height");

})

test('Test 3. Height: 0', async () => {
    const data = await getData(0)
    expect(data).toStrictEqual([]);
})


test('Test 4. Height: 175', async () => {
    const data = await getData(175)
    expect(data).toStrictEqual([
        ["Tyson Chandler", "Yao Ming"],
        ["Kyrylo Fesenko", "Yao Ming"],
        ["Marc Gasol", "Yao Ming"],
        ["Jerome James", "Yao Ming"],
        ["Shaquille O'Neal", "Yao Ming"],
        ["Joel Przybilla", "Yao Ming"],
        ["Cheikh Samb", "Yao Ming"],
        ["Robert Swift", "Yao Ming"]
    ]);
})


test('Test name here', async () => {
    const heightForTesting = 0
    const data = await getData(heightForTesting)

    const expectedResult = []
    expect(data).toStrictEqual(expectedResult);

})