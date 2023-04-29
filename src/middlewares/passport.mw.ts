import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcryptjs";
import {Express, Request, Response, NextFunction} from "express";
import {User, IUser} from "../models/user"


const LocalStrategy = passportLocal.Strategy

const customFields = {
    usernameField: 'email',
    passwordField: 'password',
}

const verify = async (email: string, password: string, done: any) => {
    try {
        const user = await User.findOne({email})
        console.log(user)
        if (user && await bcrypt.compare(password, user.password)) {
            return done(null, user)
        }
        return done(null, user)
    } catch (e) {
        done(e)
    }
}

passport.use(new LocalStrategy(customFields, verify))

passport.serializeUser((user: any, done) => {
    done(null, user._id);
})

passport.deserializeUser(async (id: string, done: any) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err)
    }
});

export default passport