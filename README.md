# React GitHub Pages
Testing GitHub Pages deploy with React.

## Main steps
1. Create repository
2. Create React app (with yarn + TS)
```
npx create-react-app my-app --template typescript

# or

yarn create react-app my-app --template typescript
```
3. Make first commit
4. Install gh-pages dependency
```
npm install gh-pages

#or

yarn add gh-pages
```
5. Add scripts (predeploy and deploy) to ``package.json``
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
6. Add homepage URL (GitHub.io)
```json
{
  "homepage": "https://user.github.io/my-app"
}
```
7. Run manual deploy
```
npm run deploy

# or

yarn deploy
```
8. Check published page