import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { cadic: { gold: '#c5a000', ink: '#171717', ivory: '#f7f5ef' } } } }, plugins: [] };
export default config;
