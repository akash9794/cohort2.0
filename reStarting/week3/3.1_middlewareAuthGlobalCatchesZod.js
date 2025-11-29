// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     let kidneyId = Number(req.query.kidneyId);
//     let userName = req.headers.username;
//     let pass = req.headers.pass;

//     if (userName !== "Akash" || pass !== "pass") {
//         return res.status(403).json({ msg: "Wrong Credentials" });
//     }

//     if (kidneyId !== 1 && kidneyId !== 2) {
//         return res.status(411).json({ msg: "Wrong Input" });
//     }

//     return res.status(200).json({ msg: "Success" });
// });

// app.listen(port, () => {
//     console.log(`App is listening on port ${port}.`);
// });


//some pre checks are needed to be checked for diffrent routes(.get, .put) but we don't want to repeat our code
//use the dry principle, that is why middlewares were introduced


/**Middlewares***************************************/
// req.query.kidneyId will be a string
// const express = require("express");
// const app = express();
// const port = 3000;

// let numberOfRequests = 0;

// function calcRequests(req, res, next) {
//     numberOfRequests++;
//     console.log("Number of Hits " + numberOfRequests);
//     next();
// }

// app.use(calcRequests);  //now no need to call this (calcRequests middleware) it will be called automaticall
// // from now on, below this code calcRequests middleware, will be called every time for every HTTP methods)
// // app.use(express.json());    --> used to extract the body
// // const name = req.body.name; without app.use(express.json()); we will not be able to extract body 

// function userMiddleware(req, res, next) {
//     let userName = req.headers.username;  //Express automatically lowercases all header keys
//     let pass = req.headers.pass;

//     if (userName != "Akash" || pass != "pass") {
//         return res.status(403).json({ msg: "Wrong credentials" });
//     } else {
//         next();
//     }
// }


// function kidneyIdMiddleware(req, res, next) {
//     let num = Number(req.query.kidneyId);

//     if (num != 1 && num != 2) {
//         return res.status(411).json({ msg: "Wrong input" });
//     } else {
//         next();
//     }
// }

// app.get("/Login", userMiddleware, kidneyIdMiddleware, (req, res) => {
//     return res.status(200).json({ msg: "Logged in!!" });
// })

// //app.use(calcRequests);
// app.post("/posting", userMiddleware, kidneyIdMiddleware, (req, res) => {
//     res.status(200).json({ msg: "Post successful!!" });
// })

// //global catches --> is some error occures it will show this msg instead of revealing sensitive data
// app.use((error, req, res, next) => {
//     res.json({
//         "msg": "Something went wrong"
//     })
// })

// app.listen(port, () => {
//     console.log(`App is live on port ${port}`);
// })


/************ Authentication Validator --> Zod ****************************/
const express = require("express");
const { password } = require("pg/lib/defaults");
const zod = require("zod");
const app = express();

const port = 3000;

/** 
 *{
 *  email: --any email @ .com
 *  pass : 8 charecters
 *  country : "IN" OR "US"
 *}
*/

// const schema = zod.Onject({
//     email: zod.string().email(),
//     password: zod.string().min(8),
//     country: zod.literal("IN").or(zod.literal("US")),
// })

const schema = zod.array(zod.number());
app.use(express.json());

app.get("/", (req, res) => {
    const kidneyArr = req.body.kidneyArr;
    const result = schema.safeParse(kidneyArr);
    const kidneyLength = kidneyArr.length;

    if (!result.success) {
        res.json({
            "msg": "Invalid Input"
        })
    } else {
        res.send({
            result
        });
    }
})

app.listen(port, () => {
    console.log("App is listening on port " + port);
})
