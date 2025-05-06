# 旺财记账 React

## 环境

- `node@16.20.2` (`node 18` 会报错) 每次都需要切换 `nvm use 16`
- `yarn 1.22.22`
- 保持 `react`、`react-dom`、`"@types/react`、`@types/react` 版本一致
  - 在 `package.json` 中还需要添加配置
    `"resolutions": {"@types/react": "17.0.2"},`

---

## 旧版本环境

- `node 12、 14 或 16` (`node 18` 会报错) 每次都需要切换 `nvm use 16`
- `yarn 1.22.19`
- 使用 `react@^16.9.0`、`react-dom@^16.9.0`、 保持版本一致
- 使用 `@types/react@^16.9.0`、`@types/react-dom@^16.9.0`
  - 在 `package.json` 中还需要添加配置
    `"resolutions": {"@types/react": "@^16.9.0"},`
- 路由使用 `react-router-dom@5.3.4`、`@types/react-router-dom@5.3.3`

---

# Getting Started with Create React App

This project was bootstrapped
with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section
about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the
best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section
about [deployment](https://facebook.github.io/create-react-app/docs/deployment)
for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
