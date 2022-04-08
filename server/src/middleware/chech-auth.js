const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try {

        const token = req.headers.authorization.split(" ")[1];
        console.log("token: : :" + token);
        const decodeToken = jwt.verify(token, "key");
        req.userData = { name: decodeToken.name};
        console.log(req.userData.name);
        next();
    } catch (error) {
        res.status(401).json({ message: "auth failed" });
    }
}