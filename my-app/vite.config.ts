import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(({ mode, command}) => {
	const env = loadEnv(mode, process.cwd(), '')
	const { SSL_CERT, SSL_KEY } = env

	return {
		server: SSL_CERT && SSL_KEY ? {
			port: 443,
			https: {
				hostname: "ethanbehrends.com",
				port: 443,
				key: SSL_KEY,
				cert: SSL_CERT,
			}
		} : undefined,
		plugins: [
			sveltekit(),
		]
	}
});
