function asyncMethod(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 100);
    })
}

async function main() {
    return [1,2,3,4,5].reduce(async (acc, value) => {
        return await acc + await asyncMethod(value);
    }, Promise.resolve(0));
}

main().then(value => console.log(value))
    .catch(err => console.error(err));
