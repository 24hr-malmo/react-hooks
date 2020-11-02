# @24hr/react-hooks
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
![Build](https://github.com/24hr-malmo/react-hooks/workflows/24HR%20React%20Hooks/badge.svg?branch=master&style=flat-square&label=build)

React hooks library

## Documentation

### useBeforeMount
A hook that runs before mount and is suitable for SSR.
```js
useBeforeMount(() =>
    console.log('Runs only once before component mounts. Works on the server!')
)
```

### useLocalStorage
A hook that syncs state with localstorage
```js
/**
 * @typedef Options
 * @property {boolean} [clearOnUnmount] - Whether or not to clear the localstorage value on unmount.
 */

/**
 * A hook that syncs the state with a property in the localstorage.
 * @param {string} defaultVal - The initial value
 * @param {string} key - Mandatory key to use to store the data in localstorage.
 * @param {Options} options - Options object
 * @return {[any, function, function]} - Return the current state, a set state function and a function to clear the storage.
 */
const [state, setState, clear] = useLocalStorage('default value', 'key', { clearOnUnmount: false });
```

# Want to contribute?

It's easy to contribute!

1. Clone the repo and create a new branch from master.

2. Make your changes.

3. Run `./bump.sh` and choose if your changes are major, minor och patch.

4. Commit and push.

5. Make a merge request to master. The CI pipeline will publish your new version to NPM!

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.marcusthelin.com"><img src="https://avatars1.githubusercontent.com/u/22647302?v=4" width="100px;" alt=""/><br /><sub><b>Marcus Thelin</b></sub></a><br /><a href="https://github.com/24hr-malmo/react-hooks/commits?author=marcusthelin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/schmolie"><img src="https://avatars0.githubusercontent.com/u/17004998?v=4" width="100px;" alt=""/><br /><sub><b>schmolie</b></sub></a><br /><a href="https://github.com/24hr-malmo/react-hooks/commits?author=schmolie" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!