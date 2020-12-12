const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { Strategy, ExtractJwt } = require("passport-jwt");
const { ACCESS_TOKEN_SECRET } = process.env;
const JWTStrategy = Strategy;
const User = require("../models/User");

passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const { name } = req.body;
        if (!email || !password || !name) {
          return done(null, false, {
            error: "Ingrese todos los datos solicitados",
          });
        }
        if (await User.findOne({ email })) {
          return done(null, false, {
            error: "El email ya esta registrado",
          });
        }
        const newUser = new User({ name, email, password });
        await newUser.save();
        return done(null, newUser, {
          message: "Se Registro correctamente ya puede Iniciar Session",
        });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "signin",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, {
            error: "Usuario no encontrado",
          });
        }
        if (!(await user.comparePassword(password))) {
          return done(null, false, {
            error: "Contraseña incorrecta",
          });
        }
        return done(null, user, {
          message: "Se inicio sesiòn correctamente",
        });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: ACCESS_TOKEN_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        const user = await User.findById(token.id);
        return done(null, user);
      } catch (error) {
        return done({ error: error.message });
      }
    }
  )
);
