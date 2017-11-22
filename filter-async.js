function asyncMethod(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 100);
    })
}

async function main() {
    return Promise.all([1,2,3,4,5].map((value) => asyncMethod(value)));
}

function filterHandler(value) {
    return value.filter((v) => {
        return v % 2 === 0;
    })
}

main()
    .then(value => filterHandler(value))
    .then(value => console.log(value))
    .catch(err => console.error(err));
