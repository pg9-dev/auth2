import * as dotenv from "dotenv";
import {resolve} from "path";

dotenv.config({path: resolve(__dirname, "../.env")});


export const JWT_SECRET = process.env.JWT_SECRET;