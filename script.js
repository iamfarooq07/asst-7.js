var products = [
    {
        id: 101,
        title: "Sony LED 40 inch",
        variations: [
            { id: 1, color: "green", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 4.5,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
            {
                id: 3,
                user: "Ali",
                rating: 5.0,
                title: "bad Product",
                comments: "ali It is a very good product ....",
                date: "04-02-2021",
                status: true,
            },
        ],
    },
    {
        id: 102,
        title: "Mobile",
        variations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 4.5,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
            {
                id: 3,
                user: "Ali",
                rating: 5.0,
                title: "bad Product",
                comments: "ali It is a very good product ....",
                date: "04-02-2021",
                status: true,
            },
        ],
    },
    {
        id: 103,
        title: "Bike",
        variations: [
            { id: 1, color: "black", price: 55000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 3.0,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
        ],
    },
];

// Q1 Use map to get an array of product titles    .

// let titleProducts = products.map((m) => m.title);
// console.log(titleProducts);

// Q2 Use filter to get all products that have variations in black color.

let color = products.filter((m) => m.variations.find((n) => n.color === "green").length)
console.log(color);

// Q5 Use filter to get products that have at least one review with a rating of 5.0.

// let rating = products.filter((m) => m.reviews.filter((n) => n.rating == 5.0).length);
// console.log(rating);

// Q6 Use map to format variations with product name.

// let product = products.map(m => m.variations.map(n => m.title).length);
// console.log(product);

// Q8 Use filter to get all products that have more than 5 items in any variation

// let quantity = products.filter(m => m.variations.filter(n => n.quantity > 5 ).length);
// console.log(quantity);

// Q9 Use map to get a summary of each product with total variations and total reviews

// let eachProduct = products.map(m => {
//     return {
//         title: m.title,
//         totalVariations: m.variations.length,
//         totalReviews: m.reviews.length
//     }
// })
// console.log(eachProduct);
