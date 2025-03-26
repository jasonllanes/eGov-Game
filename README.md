# React + TypeScript + Vite + ui.shadcn.com + Tailwind + Routes + Axios + Built-in DarkMode

This template provides a minimal setup to get React working in Vite with more library on pack


# Features
- can be refresh in github Pages and not return 404 page not found
- built in loader but you can change it here https://10015.io/tools/css-loader-generator
- custom not found page
- built in axios,tailwind, dark mode theme and many more kapoy explain kalimot nako


## Installation Steps Process

1. clone this repo
2. cd ./repo name
3. npm install
4. npm run dev

## Deployment Step using github
1. show hidden folder
2. delete the .git folder
3. create a repo in github
5. push everything on github
6. In the vite.config.js file add this line before plugins: [react()],
base: "/YOUR_REPOSITORY_NAME", main.tsx paths to "/YOUR_REPOSITORY_NAME", notFound Link to "/YOUR_REPOSITORY_NAME"
7. In terminal type " npm run deploy"