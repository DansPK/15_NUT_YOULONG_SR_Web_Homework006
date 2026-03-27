import { loadEnvConfig } from '@next/env'
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const projectDir = process.cwd()
loadEnvConfig(projectDir);