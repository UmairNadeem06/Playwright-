import dotenv from "dotenv";
import { FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {

    if (process.env.test_env) {
        dotenv.config({
            path: `.env.${process.env.test_env}`,
            override: true
        })
    }
}
export default globalSetup;