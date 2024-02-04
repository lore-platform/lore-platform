<h1 align="center"> Welcome to the LORE website development </h1>

<p align="center">This is the code repo for the LORE website. This file will help guide you on how the structure of the project works.</p>

<p align="center">📆 <b>Last updated:</b> Sat 03 Feb '24</p>

## Table of Contents

- [🍇 Setting Up Project To Local Machine](#🍇-setting-up-project-to-local-machine)
- [🍋 Project's Files/Folder Structure](#🍋-projects-filesfolder-structure)
  - [Diagram of The Folder Structure](#diagram-of-the-folder-structure)
  - [Folders Description Table](#folders-description-table)
  - [Files Description Table](#files-description-table)
- [🧁 Recommended Worflow](#🧁-recommended-worflow)
  - [Working On A Specfic Task](#working-on-a-specfic-task)
  - [How To Make Pull Requests](#how-to-make-pull-requests)
  - [Branch Naming Conventions](#branch-naming-conventions)

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

| Folder Name     | Description                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| platform        | Where the main code lives. The LORE website app is ran from here.                                                                         |
| node_modules    | Contains all the project's dependencies and their dependencies. When you run `npm install`, Node.js installs the necessary packages here. |
| src             | Contains the actual source code of the LORE website application.                                                                          |
| assets          | Stores static assets such as images, fonts, etc that are specific to the project.                                                         |
| components      | This is where reusable components from [Shadcn/ui component library](https://ui.shadcn.com/) are stored.                                  |
| lore_components | This is where the components we build ourselves are stored.                                                                               |
| styles          | This is where the stylesheets for the entire application are stored.                                                                      |

### Files Description Table

| File Name          | Description                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| main.jsx           | The entry point for the LORE website application. It typically renders the main component of your application into the root DOM element.                                                   |
| App.jsx            | The main component of your application. This component is usually responsible for rendering other components and does more.                                                                |
| global-styles.scss | Contains the CSS styling (in a SCSS format) for the entire application.                                                                                                                    |
| index.css          | This is just the entry point for TailwindCSS to be used in the application.                                                                                                                |
| index.html         | The main HTML file that serves as the entry point for the LORE website application. It usually contains a root DOM element where the LORE website application is mounted using JavaScript. |

[⬆️ Back To Top ⬆️](#welcome-to-the-lore-website-development)

## 🧁 Recommended Worflow

### Working On A Specfic Task

If you are working on a task from the Trello board, creating a page / part of a page, creating a bunch of components - when you are working on new code, follow this workflow please~!

1. Create a new branch from the `main` branch (follow the [Branch Naming Conventions](#branch-naming-conventions) on how to name the new branch)
2. Write your code
3. Commit your code change to your branch locally
4. When you think you are done with your changes, go back to the [project's repo online](https://github.com/lore-platform/lore-platform/tree/main)
5. In the Navgivation bar, click 'Pull Requests'
6. Click 'New pull request'
7. Follow the steps in the '[How To Make Pull Requests](#how-to-make-pull-requests)'

### How To Make Pull Requests

Now that you made your changes, you need to make pull requests so other people can check your work before we can push your changes into the `main` branch and into deployment.

Follow these steps in making a pull request:

1. Go to to the [project's repo online](https://github.com/lore-platform/lore-platform/tree/main)
2. Click 'New pull request' in the Pull Requests page
3. Compare changes: the `base` should be **'main'**, and `compare` should be **the name of your branch**
4. Click **'Create Pull Request'**
5. The Title of the Pull Request should be {branch name} - {the title of the task from the Trello board}
   - _For example: LO-0001 - Create the navigation bar component_
6. You do not need to add a description. You can if you want.
7. Look on the right side navigation bar:
   - Assignes: Assign yourself
   - Reviewers: Assign izicodes (Izzy Zennah)
8. Click the 'Create Pull Request' button
9. Wait for Izzy to review you code
   - You might need to make changes if she asks for some
10. After Izzy approves you code, go back to your pull request page
11. Find the 'Merge pull request' button and click the down arrow on the right
12. Click the 'Squash and merge' option
    - This will turn all of you commits into one big commit
13. Click the button again
14. In the popup, make sure the title is correct - delete the '(#)' and a number next it
15. Leave the description as it is - it is just a list of the commits you made

### Branch Naming Conventions

We need to keep track of the branches that will merge into the `main` branch. Follow these steps:

- The format should be: LO-{branch code}
  - _For example: LO-0001_
- `LO` stands for LORE
- The number is found from the task on the [Trello Board](https://trello.com/b/H5r3AFI2/main-development-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-p%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B5)
- The branch name is given in the task on the [Trello Board](https://trello.com/b/H5r3AFI2/main-development-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-p%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B5)

[⬆️ Back To Top ⬆️](#welcome-to-the-lore-website-development)
