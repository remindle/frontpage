# frontpage
![Release](https://github.com/remindle/design-system/actions/workflows/release.yml/badge.svg)

## Tech used
Building components
- ⚛️ [React](https://reactjs.org/) declarative component-centric UI
- ⚛️ [NextJS](https://nextjs.org/) react framework for production
- ⚛️ [Remindle Design System](https://github.com/remindle/design-system) single source of truth which groups all the elements to design, realize and develop Remindle

Maintaining the package
- 🚥 [GitHub Actions](https://github.com/remindle/frontpage/actions) Continuous integration

## Installing dependencies

All dependencies are publicly available.

**Remindle** uses GitHub's package registry to publish packages, and this project uses both `@remindle/design-tokens` and `@remindle/design-system` packages.
The benefit of this approach is that the code, and the published package are all at one place instead of keeping code and published package separately.

To install dependencies from ***GitHub*** registry you'll have to configure `.npmrc` with the following content
(you are safe to create `.npmrc` in project folder since it's ignored in `.gitignore`):
```
//npm.pkg.github.com/:_authToken=<auth_token>
@remindle:registry=https://npm.pkg.github.com
```

Note that you'll have to replace `<auth-token>` with your personal token, for more info [see the docs](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).
