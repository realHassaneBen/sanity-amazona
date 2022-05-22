import jwt from 'jsonwebtoken';

const signToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

const isAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
            if (error) {
                res.status(401).send({ message: 'Token is not valid' });
            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        res.status(401).send({ message: 'Token is not suppiled' });
    }
};

export { signToken, isAuth };
