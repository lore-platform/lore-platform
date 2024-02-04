<h1 align="center"> Добро пожаловать на сайт разработки LORE </h1>

<p align="center">Это репозиторий кода для веб-сайта LORE. Этот файл поможет вам понять, как работает структура проекта.</p>

<p align="center">📆 <b>Последнее обновление:</b> 04 фев 2024</p>

<p align="center"><a href="README.md">⬆️ English/Английский ⬆️</a></p>


## Оглавление

- [🍇 Настройка проекта на локальном компьютере](#🍇-настройка-проекта-на-локальном-компьютере)
- [🍋 Файловая/Папковая структура проекта.](#🍋-файловаяпапковая-структура-проекта)
  - [Диаграмма структуры папок](#диаграмма-структуры-папок)
  - [Таблица Описания Папок](#таблица-описания-папок)
  - [Таблица Описания Файлов](#таблица-описания-файлов)
- [🧁 Рекомендуемый Рабочий Процесс](#🧁-рекомендуемый-рабочий-процесс)
  - [Работа Над Определенной Задачей](#работа-над-определенной-задачей)
  - [Как Делать Запросы на Включение](#как-делать-запросы-на-включение)
  - [Branch Naming Conventions](#branch-naming-conventions)

## 🍇 Настройка проекта на локальном компьютере

**1. Клонируйте репозиторий в папку на вашем локальном компьютере, используя эту команду:**

```cmd
git clone https://github.com/lore-platform/lore-platform.git
```

**2. Откройте папку в вашем редакторе кода.**

**3. Перейдите в папку `.\platform` с помощью этой команды:**

```cmd
cd .\platform\
```

**4. Установите зависимости, используя эту команду:**

```cmd
npm install
```

Это создаст папку `node_modules`, файл `package-lock.json` и обновленную версию файла `package.json` в каталоге `./platform`.

**5. После установки зависимостей запустите сервер разработки (веб-сайт):**

```cmd
npm run dev
```

[⬆️ Вернуться Наверх ⬆️](#оглавление)

## 🍋 Файловая/Папковая Структура Проекта

Посмотреть текущую структуру папок проекта, также представлены описания файлов и папок.

### Диаграмма Структуры Папок

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
|-- ... (Остальные файлы здесь не так важны)
```

### Таблица Описания Папок

| Имя Папки       | Описание                                                                                                       |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| platform        | Здесь находится основной код. Из этого места запускается приложение веб-сайта LORE.                            |
| node_modules    | Содержит все зависимости проекта. При выполнении `npm install` Node.js устанавливает необходимые пакеты здесь. |
| src             | Содержит фактический исходный код приложения веб-сайта LORE.                                                   |
| assets          | Содержит статические ресурсы, такие как изображения, шрифты и т. д., которые специфичны для проекта.           |
| components      | Здесь хранятся многоразовые компоненты из [библиотеки компонентов Shadcn/ui](https://ui.shadcn.com/).          |
| lore_components | Здесь хранятся компоненты, которые мы сами создаем.                                                            |
| styles          | Здесь хранятся таблицы стилей для всего приложения.                                                            |

### Таблица Описания Файлов

| Имя Файла          | Описание                                                                                                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| main.jsx           | Точка входа для приложения веб-сайта LORE. Обычно он отображает основной компонент приложения веб-сайта LORE в корневой элемент DOM.                                                           |
| App.jsx            | Основной компонент приложения веб-сайта LORE. Этот компонент обычно отвечает за рендеринг других компонентов и делает больше.                                                                  |
| global-styles.scss | Содержит стили CSS (в формате SCSS) для всего приложения.                                                                                                                                      |
| index.css          | Это всего лишь точка входа для TailwindCSS, которая будет использоваться в приложении.                                                                                                         |
| index.html         | Основной HTML-файл, который служит точкой входа для приложения веб-сайта LORE. Обычно он содержит корневой элемент DOM, к которому приложение веб-сайта LORE монтируется с помощью JavaScript. |

[⬆️ Вернуться Наверх ⬆️](#оглавление)

## 🧁 Рекомендуемый Рабочий Процесс

### Работа Над Определенной Задачей

Если вы работаете над задачей на доске Trello, создаете страницу/часть страницы или создаете группу компонентов — когда вы работаете над новым кодом, следуйте этому рабочему процессу, пожалуйста~!

1. Создайте новую ветку из ветки main (пользуйтесь [соглашениями по именованию веток](#branch-naming-conventions) для названия новой ветки)
2. Напишите свой код
3. Зафиксируйте изменения кода локально в вашей ветке
4. Когда вы считаете, что завершили ваши изменения, вернитесь в [онлайн-репозиторий проекта](https://github.com/lore-platform/lore-platform/tree/main)
5. В навигационной панели нажмите 'Pull Requests'
6. Нажмите 'New pull request'
7. Следуйте инструкциям в разделе '[Как Делать Запросы на Включение](#как-делать-запросы-на-включение)'

### Как Делать Запросы на Включение

Now that you made your changes, you need to make pull requests so other people can check your work before we can push your changes into the `main` branch and into deployment.

Follow these steps in making a pull request:

1. Go to the [project's repo online](https://github.com/lore-platform/lore-platform/tree/main)
2. Click 'New pull request' on the Pull Requests page
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
10. After Izzy approves your code, go back to your pull request page
11. Find the 'Merge pull request' button and click the down arrow on the right
12. Click the 'Squash and merge' option
    - This will turn all of your commits into one big commit
13. Click the button again
14. In the popup, make sure the title is correct
15. Leave the description as it is - it is just a list of the commits you made
16. Well done! It has merged with the main branch! Finally, click the 'Delete branch' button.

### Branch Naming Conventions

We need to keep track of the branches that will merge into the `main` branch. Follow these steps:

- The format should be: LO-{branch code}
  - _For example: LO-0001_
- `LO` stands for LORE
- The number is found from the task on the [Trello Board](https://trello.com/b/H5r3AFI2/main-development-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-p%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B5)
- The branch name is given in the task on the [Trello Board](https://trello.com/b/H5r3AFI2/main-development-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-p%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B5)

[⬆️ Back To Top ⬆️](#welcome-to-the-lore-website-development)
