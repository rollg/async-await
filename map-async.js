function asyncMethod(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 100)
    })
}

async function main() {
    return [1,2,3,4,5].map(async (value) => {
        const v = await asyncMethod(value);
        return v * 2;
    })
}

main()
    .then(v => Promise.all(v))
    .then(value => console.log(value))
    .catch(err => console.error(err));
