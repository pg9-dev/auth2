import { User } from "./entity/User";
import { sign } from "jsonwebtoken";

export const createAccessToken = (user: User) => {
    return sign({ userId: user.id }, "a secret", { expiresIn: "15m" });
}

export const createRefreshToken = (user: User) => {
    return sign({ userId: user.id }, "a different secret", { expiresIn: "7d" });
}