// Function to create a delayed fetch for each element
function delayedFetch(dataArray) {
    return dataArray.map((data, index) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 2000); // Delay of 2 seconds for each item
        });
    });
}

// Function to execute fetch and log resolved data
async function executeFetch(promisesArray) {
    for (const promise of promisesArray) {
        const data = await promise;
        console.log(data);
    }
}
