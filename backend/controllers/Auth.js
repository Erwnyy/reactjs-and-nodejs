import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const Register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newUser = new User({
            ...req.body,
            password: hash,
        })

        await newUser.save();
        res.status(200).json("User has been created")
        
    } catch (error) {
        next(error)
        
    }
}

export const Login = async(req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
        return next(createError(400, "Wrong password or username!"));

        const token = jwt.sign(
            {id: user._id , isAdmin: user.isAdmin},
            process.env.JWT)

        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        }).status(200).json({
            details : 'Ciemaungapainsayang eyJhbGccewqiOiJIUzI1NiIsIn' + token,
            isAdmin,
            token
        });
        
    } catch (error) {
        next(error) 
    }
}

export const logout = async (req, res) => {
    // Set token to none and expire after 5 seconds
    res.cookie('token', {
        expires: new Date(Date.now() + 5 * 1000),
        httpOnly: true,
    })
    res
        .status(200)
        .json({ success: true, message: 'User logged out successfully' })
}