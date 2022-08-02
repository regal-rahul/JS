const names = ["Google", "Instagram", "Youtube", "Microsoft", "Amazon"];

// for (const n of names) {
//     console.log(n);
// }

const symbols = {
    gg: "Google",
    ig: "Instagram",
    yt: "Youtube",
    ms: "Microsoft",
    az: "Amazon"
};

for (const n in symbols) {
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}