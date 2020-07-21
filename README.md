# Test task

_v0.0.1_

## Инструменты:
- HTML
- CSS
- БЭМ
- JS
- Webpack

**_О проекте:_**
  - проект без использования JavaScript фреймворков
  - при клике на аватарку, пользователь может загружать свою фотографию в браузер, аватарка подменяется загруженной картинкой
  - вкладка друзья:
    - высота подстраивается под контент, скролла нет, внизу пагинация
    - динамическая фильтрация друзей по всем полям (имя, почта)
  - вкладка записи: фиксированная высота (подстраивается под высоту экрана), появляется скролл контента
  - макет адаптирован под мобильные устройства

# Установка:
_для работы с проектом должены быть установлены node.js и npm_

Скопируйте проект на компьютер:

```
git clone https://github.com/Manhetn/test-task.git
```

Установите зависимости:

```
npm install
```

# Работа с проектом:

**_Режим development:_**: Сборка для разработки с запуском сервера

```
npm run dev
```

**_Режим production:_**:  Готовая сборка для production

```
npm run build
```

**_Режим GitHub Pages:_**:  Проект соберется в production и зальется в ветку gh-pages

```
npm run deploy
```

## Дополнительная информация:

  - В проекте используется normalize.css
  - Для тестирования верстки pixel perfect (в разрешении 1440 х 900) перейдите в ветку page-proofs
    - для просмотра страницы с статьями введите в консоль:
      ```
      document.querySelector('.friends').classList.add('friends_hidden');
      document.querySelector('.posts').classList.remove('posts_hidden');
      ```
  - Для тестирования JS перейдите в ветку master или develop

## Комментарии:
  Для обработки и преобразования номера телефона в соответсвии с локализацией пользователя, в реальном проекте, скорей всего использовал бы libphonenumber-js, с правильным форматированием номеров в привычном для страны формате. Но так как данные номера телефона с сервера, это рандомное чилса решил просто выводить их на старницу в неизмененном виде.
