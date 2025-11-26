# Diverso Strapi Schemas

Тази директория съдържа всички Strapi схеми за проекта Diverso, организирани по официалната Strapi структура. Всички схеми имат префикс "diverso/" в displayName за по-добра организация.

## 📁 Структура

```
strapi-schemas/
├── components/
│   └── diverso/
│       ├── company-info.json
│       ├── feature.json
│       ├── gallery-image.json
│       ├── gallery-project.json
│       ├── hero-slide.json
│       ├── organization.json
│       ├── process-step.json
│       ├── process-step-simple.json
│       ├── project.json
│       ├── service-item.json
│       ├── team-image.json
│       └── testimonial.json
└── [collection-name]/
    ├── content-types/
    │   └── [collection-name]/
    │       └── schema.json
    ├── controllers/
    │   └── [collection-name].js
    ├── services/
    │   └── [collection-name].js
    └── routes/
        └── [collection-name].js
```

## 🗂️ Collection Types (10 общо)

### Основни страници:
1. `diverso-home` - diverso/Home - Главна страница (консолидирана с всички секции)
2. `diverso-about` - diverso/About - За нас страница
3. `diverso-contact` - diverso/Contact - Контакти страница
4. `diverso-trading` - diverso/Trading - Търговски услуги

### Services страници:
5. `diverso-binnen-schilderwerk-service` - diverso/Binnen Schilderwerk Service - Вътрешно боядисване
6. `diverso-buiten-schilderwerk-service` - diverso/Buiten Schilderwerk Service - Външно боядисване
7. `diverso-houtrot-reparatie-service` - diverso/Houtrot Reparatie Service - Ремонт на гнила дървесина
8. `diverso-glaszetten-service` - diverso/Glaszetten Service - Поставяне на стъкла
9. `diverso-kunststof-kozijnen-plaatsen-service` - diverso/Kunststof Kozijnen Plaatsen Service - Монтаж на пластмасова дограма
10. `diverso-decoratief-stucwerk-service` - diverso/Decoratief Stucwerk Service - Декоративна мазилка

## 📋 Компоненти (13 общо)

1. `diverso.seo` - diverso/SEO - SEO metadata полета
2. `diverso.feature` - diverso/Feature - Feature списък
3. `diverso.team-image` - diverso/Team Image - Екипни снимки
4. `diverso.company-info` - diverso/Company Info - Информация за компанията
5. `diverso.gallery-image` - diverso/Gallery Image - Галерийни снимки
6. `diverso.process-step` - diverso/Process Step - Процесни стъпки
7. `diverso.organization` - diverso/Organization - Организации
8. `diverso.project` - diverso/Project - Проекти
9. `diverso.hero-slide` - diverso/Hero Slide - Hero слайдове
10. `diverso.service-item` - diverso/Service Item - Услуги
11. `diverso.testimonial` - diverso/Testimonial - Отзиви
12. `diverso.process-step-simple` - diverso/Process Step Simple - Прости процесни стъпки
13. `diverso.gallery-project` - diverso/Gallery Project - Галерийни проекти

## 🎯 Home Page Структура

`diverso-home` collection type съдържа всички данни за главната страница в една схема:

### SEO Полета
- `seo` (component: diverso.seo) - включва `metaTitle`, `metaDescription`, `metaImage`, `metaKeywords`, `metaRobots`, `metaUrl`

### Hero Секция
- `heroSlides` (component: diverso.hero-slide)
- `heroBottomBarText`, `heroPhoneText`, `heroPhoneNumber`, `heroCtaButtonText`

### Services Секция
- `servicesSubtitle`, `servicesTitle`, `servicesDescription`
- `services` (component: diverso.service-item)

### About Секция
- `aboutSubtitle`, `aboutTitle`, `aboutDescription`
- `aboutTeamImage`, `aboutReviewsCardTitle`, `aboutAverageRating`, `aboutRatingStars`
- `aboutReviewsLinkText`, `aboutReviewsLinkUrl`
- `aboutBenefits` (component: diverso.feature)
- `aboutCtaButtonText`, `aboutCtaButtonUrl`

### CTA Секция
- `ctaImages` (component: diverso.gallery-image)
- `ctaMainQuestion`, `ctaPhoneText`, `ctaPhoneNumber`, `ctaOrText`, `ctaButtonText`

### Testimonials Секция
- `testimonialsSubtitle`, `testimonialsTitle`, `testimonialsDescription`
- `testimonialsGoogleReviewsText`, `testimonialsGoogleReviewsUrl`
- `testimonialsTrustpilotReviewsText`, `testimonialsTrustpilotReviewsUrl`
- `testimonials` (component: diverso.testimonial)

### Process Contact Секция
- `processSteps` (component: diverso.process-step-simple)
- `processFormTitle`, `processFormSubtitle`, `processFormDescription`
- `processCtaBoxTitle`, `processSubmitButtonText`, `processNoticeText`

### Gallery Секция
- `gallerySubtitle`, `galleryTitle`, `galleryDescription`
- `galleryShowAllButtonText`, `galleryExteriorButtonText`, `galleryInteriorButtonText`, `galleryLoadMoreButtonText`
- `galleryProjects` (component: diverso.gallery-project)

## 🏷️ SEO Компонент

Всички страници използват единен SEO компонент `diverso.seo` който включва:

- `metaTitle` (string, max 60 chars, required) - Заглавие за търсачки
- `metaDescription` (text, max 160 chars, required) - Описание за търсачки  
- `metaImage` (media, optional) - Изображение за социални мрежи
- `metaKeywords` (string, optional) - Ключови думи
- `metaRobots` (string, default: "index, follow") - Инструкции за robots
- `metaUrl` (string, optional) - Каноничен URL

**Предимства:**
- ✅ Консистентни SEO полета във всички страници
- ✅ По-чист Strapi admin interface
- ✅ Лесна поддръжка и актуализация
- ✅ Групирани SEO полета в отделна секция

## 🚀 Как да използвам схемите

### Стъпка 1: Копиране на collection types
Копирайте всички collection types директории в API папката на Strapi:

```bash
# За всяка схема
cp -r diverso/strapi-schemas/diverso-* /path/to/your/strapi/project/src/api/
```

### Стъпка 2: Копиране на компонентите
Копирайте компонентите в правилната директория:

```bash
cp -r diverso/strapi-schemas/components/* /path/to/your/strapi/project/src/components/
```

### Стъпка 3: Рестартиране на Strapi
```bash
npm run develop
```

**Забележка:** Всяка схема вече включва controller, service и routes файлове, което гарантира пълна функционалност на API endpoints.

## 🔗 API Endpoints

След като схемите са импортирани, ще имате достъп до следните endpoints (пълен CRUD):

### Основни страници:
- `GET /api/diverso-homes` - Главна страница (включва всички секции)
- `GET /api/diverso-abouts` - За нас страница
- `GET /api/diverso-contacts` - Контакти страница
- `GET /api/diverso-tradings` - Търговски услуги

### Service страници:
- `GET /api/diverso-binnen-schilderwerk-services` - Услуги за вътрешно боядисване
- `GET /api/diverso-buiten-schilderwerk-services` - Услуги за външно боядисване
- `GET /api/diverso-houtrot-reparatie-services` - Услуги за ремонт на гнила дървесина
- `GET /api/diverso-glaszetten-services` - Услуги за поставяне на стъкла
- `GET /api/diverso-kunststof-kozijnen-plaatsen-services` - Услуги за монтаж на пластмасова дограма
- `GET /api/diverso-decoratief-stucwerk-services` - Услуги за декоративна мазилка

**Забележка:** Всички endpoints поддържат пълен CRUD (Create, Read, Update, Delete) благодарение на автоматично генерираните controller, service и routes файлове.

## ⚙️ Настройки на Strapi

### Permissions
Не забравяйте да настроите permissions за публичен достъп до API endpoints:

1. Отидете в Strapi Admin → Settings → Users & Permissions plugin → Roles → Public
2. Намерете всички collection types с "diverso/" префикс в имената
3. Активирайте "find" и "findOne" permissions за всички collection types
4. При необходимост активирайте и "create", "update", "delete" за административни функции

### API Token (препоръчително)
За production използване, създайте API Token:

1. Отидете в Settings → API Tokens
2. Създайте нов token с "Read-only" permissions
3. Добавете token-а в environment variables на вашето Next.js приложение

## 📝 Структура на данните

Всички схеми включват стандартни SEO полета:
- `metaTitle` (string, макс 60 символа)
- `metaDescription` (text, макс 160 символа)
- `metaImage` (media)
- `metaKeywords` (string)
- `metaRobots` (string, default: "index, follow")
- `metaUrl` (string)

## 🔄 Актуализации

При актуализации на схемите:

1. Спрете Strapi сървъра
2. Заменете съответните schema.json файлове
3. При необходимост актуализирайте controller, service или routes файлове
4. Рестартирайте сървъра
5. Strapi автоматично ще актуализира базата данни

**Важно:** Всички схеми вече включват готови API файлове, така че няма нужда от ръчно създаване.

## 🐛 Troubleshooting

### Проблем: "Component not found"
**Решение:** Уверете се че сте копирали всички компоненти в `src/components/diverso/`

### Проблем: "Collection type already exists"
**Решение:** Изтрийте съществуващия collection type от Strapi admin преди импорт

### Проблем: API endpoints не работят
**Решение:** 
1. Проверете permissions в Users & Permissions plugin
2. Уверете се че controller, service и routes файловете са копирани правилно
3. Рестартирайте Strapi сървъра

### Проблем: "Cannot find module" при стартиране
**Решение:** Проверете дали всички API файлове (controller, service, routes) са копирани в правилните директории

### Проблем: Home page не зарежда данни
**Решение:** 
1. Уверете се че имате публикувано съдържание в `diverso-homes` collection
2. Проверете дали всички компоненти са правилно попълнени
3. Проверете API permissions за `diverso-homes`

## 📧 Поддръжка

За въпроси относно схемите или Next.js интеграцията, моля свържете се с development екипа.

## 🎉 Новости в тази версия

- ✅ Консолидирана `diverso-home` схема с всички секции
- ✅ Премахнати отделните секционни схеми
- ✅ Опростена архитектура за home page
- ✅ Единично API извикване за цялата home page
- ✅ Подобрена производителност и maintainability
- ✅ **НОВ:** SEO компонент за всички страници - по-чист admin interface