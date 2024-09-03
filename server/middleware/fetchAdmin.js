const jwt = require('jsonwebtoken');

fetchAdmin = (req, res, next) => {
    // Get the student from jwt token and add id to req object.
    console.log(req.headers)
    const token = req.header('auth-token');
    if (!token) {
        console.log("no token")
        res.status(401).send({ error: "Please Authenticate using a valid toka" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = data.admin;
        next();
    } catch (error) {
        console.log("token but not verified")
        res.status(401).send({ error: "Please Authenticate using a valid tokaa" });
    }
}

module.exports = fetchAdmin;