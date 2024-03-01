const jwt = require('jsonwebtoken');

fetchOrganisation = (req, res, next) => {
    // Get the organisation from jwt token and add id to req object.
    const token = req.header('auth-token-organisation');
    if(!token) {
        res.status(401).send({error: "Please Authenticate using a valid token"});
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.organisation = data.organisation; 
        next();
    } catch (error) {
        res.status(401).send({error: "Please Authenticate using a valid token"});
    }
}

module.exports = fetchOrganisation;