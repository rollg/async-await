// This:
function asyncTask () {
    return functionA()
        .then((valueA) => functionB(valueA))
        .then((valueB) => functionC(valueB))
        .then((valueC) => functionD(valueC))
        .catch((err) => logger.error(err))
}
// becomes that:
async function asyncTask () {
    try {
        const valueA = await functionA();
        const valueB = await functionB(valueA);
        const valueC = await functionC(valueB);
        return await functionD(valueC)
    } catch (err) {
        logger.error(err)
    }
}
