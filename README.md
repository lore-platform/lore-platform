<h1 align="center"> Welcome to the LORE website development </h1>

<p align="center">This is the code repo for the LORE website. This file will help guide you on how the structure of the project works.</p>

<p align="center">📆 <b>Last updated:</b> Sat 03 Feb '24</p>

## Table of Contents

- [🍇 Setting Up Project To Local Machine](#🍇-setting-up-project-to-local-machine)
- [🍋 Project's Files/Folder Structure](#🍋-projects-filesfolder-structure)
    - [Diagram of The Folder Structure](#diagram-of-the-folder-structure)
    - [Folders Description Table](#folders-description-table)
    - [Files Description Table](#files-description-table)

## 🍇 Setting Up Project To Local Machine

**1. Clone the repo to a folder in your local machine by using this command:**

```cmd
git clone https://github.com/lore-platform/lore-platform.git
```

**2. Open the folder in you code editor**

**3. Move into the `.\platform` folder by using this command:**

```cmd
cd .\platform\
```

**4. Install the dependancies by using this command:**

```cmd
npm install
```

This will create the `node_modules` folder, `package-lock.json`, and an updated version of the `package.json` in the `./platform` directory.

**5. After the dependencies are installed, start the development server (the website):**

```cmd
npm run dev
```
[⬆️ Back To Top ⬆️](#welcome-to-the-lore-website-development)

## 🍋 Project's Files/Folder Structure
View the current project's folder structure and a description of the folders.

### Diagram of The Folder Structure
```cmd
📂 platform/
|-- 📂 node_modules/
|-- 📂 src/
|   |-- 📂 assets/
|   |-- 📂 components/
|   |-- 📂 lib/
|   |-- 📂 lore_components/
|   |-- 📂 styles/
|   |-- 📄 App.jsx
|   |-- 📄 global-styles.scss
|   |-- 📄 index.css
|   |-- 📄 main.jsx
|-- index.html
|-- ... (the rest of the files here are not too important)
```


### Folders Description Table
| Folder Name | Description |
| ----------- | ----------- |
| platform | Where the main code lives. The LORE website app is ran from here. |
| node_modules |  Contains all the project's dependencies and their dependencies. When you run `npm install`, Node.js installs the necessary packages here. |
| src | Contains the actual source code of the LORE website application. |
| assets | Stores static assets such as images, fonts, etc that are specific to the project. |
| components | This is where reusable components from [Shadcn/ui component library](https://ui.shadcn.com/) are stored.|
| lore_components | This is where the components we build ourselves are stored. |
| styles | This is where the stylesheets for the entire application are stored. |

### Files Description Table
| File Name | Description |
| ----------- | ----------- |
| main.jsx | The entry point for the LORE website application. It typically renders the main component of your application into the root DOM element. |
| App.jsx | The main component of your application. This component is usually responsible for rendering other components and does more. |
| global-styles.scss | Contains the CSS styling (in a SCSS format) for the entire application. |
| index.css | This is just the entry point for TailwindCSS to be used in the application. |
| index.html | The main HTML file that serves as the entry point for the LORE website application. It usually contains a root DOM element where the LORE website application is mounted using JavaScript. |