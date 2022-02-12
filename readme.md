# SvelteKit and friends, for Gitpod

This is a [SvelteKit](https://kit.svelte.dev) template configured for development on [Gitpod](https://www.gitpod.io). Click the button!

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nberlette/gitpod-sveltekit)


> It also comes with some other opinionated enhancements:

- [x] Uses [`WindiCSS`](https://windicss.org) instead of Tailwind
- [x] Written completely in [`TypeScript`](https://typescriptlang.org)
- [x] Adds paths `$lib/actions` and `$lib/components`
- [x] Direct component import: `import { Header } from '$lib/components';`
- [x] Adds `html-minifier` hook to minify output in production (**disabled in dev**)
- [x] Custom `.gitpod.yml` configuration for cloud editing with [`gitpod-enhanced`](https://git.io/gitpod)

---  

## Getting Started 

Click the above "Open in Gitpod" button to start a new workspace. Once you're ready to push your first code changes, Gitpod will guide you to fork this project so you own it.

### ...or add to an Existing Project

To get started with SvelteKit on Gitpod, add a [`.gitpod.yml`](./.gitpod.yml) file which contains the configuration to improve the developer experience on Gitpod. To learn more, please see the [Getting Started](https://www.gitpod.io/docs/getting-started) documentation from Gitpod.

> I've published [`gitpod-enhanced`](https://git.io/gitpod), a custom Docker image for Gitpod.io environments, and personally use it on all of my projects at the time of writing. It automates adding some packages and features that a lot of us use in our daily development setups, and makes the terminal prettier too.

## License

[MIT](https://mit-license.org) © [Nicholas Berlette](https://github.com/nberlette)
