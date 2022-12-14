[< К содержанию](./readme.md)
***
## Рекомендации по быстрой загрузке HTML и CS

1. **box-shadow**
> Чем больше радиус, чем больше тень, тем больше вычислительных мощностей требуется и тем дольше грузится, особенно это заметно при скролл

2. **масштабирование изображений** 
> Необходимо подбирать изображения под размер!

3. **Сжимать изображения**
> Максимально допустимо сжимать изображения. Можно воспользоваться online сервисами. Например: [tinypng.com](https://tinypng.com)

4. **Использовать сокращённые варианты CSS**
>  Например записывать `padding: 2px 0 34px 40px` вместо набора `padding-top + padding-right + padding-bottom + padding-left`

5. Селектор **`*`** использовать в исключительных случаях

6. **Минимизировать CSS файлы**
> Использовать сервисы для сжатия css:
1. [CSS Minifier](https://css-minifier.com/)
2. [CSS Compressor](https://csscompressor.com/)

7. Использовать импорт в `head`
> Использовать импорт типа `<link href="/styles.css" rel="stylesheet">` **НЕ ИСПОЛЬЗОВАТЬ** `<style>@import url("/styles.css");</style>`

8. > Уменьшать количество HTTP запросов (скрипты, фотографии грузить с отдельной своей папки)

**Дополнительные моменты**

9. Использование CSS-спрайтов - специальный графический файл с иконками *ускоряет работу* (соцсети, иконки)

10. Подключать JavaScript желательно в конце страницы

11. ![РАбота с изображениями](/img/image.gif)

12. Использовать возможности HTML и CSS вместо JS

13. Пользоваться CDN

14. Версии для мобильных делать проще