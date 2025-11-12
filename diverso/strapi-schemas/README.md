# Diverso Strapi Schemas

Тази директория съдържа всички Strapi схеми за проекта Diverso, организирани по официалната Strapi структура.

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
    └── content-types/
        └── [collection-name]/
            └── schema.json
```

## 🗂️ Collection Types (16 общо)

### Основни страници:
1. `diverso-home` - Главна страница
2. `diverso-about` - За нас страница
3. `diverso-contact` - Контакти страница
4. `diverso-trading` - Търговски услуги

### Services страници:
5. `diverso-interior-service` - Интериорно боядисване
6. `diverso-exterior-service` - Външно боядисване
7. `diverso-glazing-service` - Остъкляване
8. `diverso-wood-repair-service` - Ремонт на гниеща дървесина
9. `diverso-maintenance-plan-service` - Многогодишен план

### Index компоненти:
10. `diverso-hero` - Hero секция
11. `diverso-services` - Services секция
12. `diverso-about-section` - About секция
13. `diverso-cta-section` - CTA секция
14. `diverso-testimonials` - Testimonials секция
15. `diverso-process-contact` - Process Contact секция
16. `diverso-gallery` - Gallery секция

## 📋 Компоненти (12 общо)

1. `diverso.feature` - Feature списък
2. `diverso.team-image` - Екипни снимки
3. `diverso.company-info` - Информация за компанията
4. `diverso.gallery-image` - Галерийни снимки
5. `diverso.process-step` - Процесни стъпки
6. `diverso.organization` - Организации
7. `diverso.project` - Проекти
8. `diverso.hero-slide` - Hero слайдове
9. `diverso.service-item` - Услуги
10. `diverso.testimonial` - Отзиви
11. `diverso.process-step-simple` - Прости процесни стъпки
12. `diverso.gallery-project` - Галерийни проекти

## 🚀 Как да използвам схемите

### Стъпка 1: Копиране на файловете
Копирайте цялата `strapi-schemas` директория в корена на вашия Strapi проект:

```bash
cp -r diverso/strapi-schemas/* /path/to/your/strapi/project/src/api/
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

## 🔗 API Endpoints

След като схемите са импортирани, ще имате достъп до следните endpoints:

### Основни страници:
- `GET /api/diverso/home`
- `GET /api/diverso/about`
- `GET /api/diverso/contact`
- `GET /api/diverso/trading`

### Services страници:
- `GET /api/diverso/interior-service`
- `GET /api/diverso/exterior-service`
- `GET /api/diverso/glazing-service`
- `GET /api/diverso/wood-repair-service`
- `GET /api/diverso/maintenance-plan-service`

### Index компоненти:
- `GET /api/diverso/hero`
- `GET /api/diverso/services`
- `GET /api/diverso/about-section`
- `GET /api/diverso/cta-section`
- `GET /api/diverso/testimonials`
- `GET /api/diverso/process-contact`
- `GET /api/diverso/gallery`

## ⚙️ Настройки на Strapi

### Permissions
Не забравяйте да настроите permissions за публичен достъп до API endpoints:

1. Отидете в Strapi Admin → Settings → Users & Permissions plugin → Roles → Public
2. Разширете всички "Diverso" секции
3. Активирайте "find" и "findOne" permissions за всички collection types

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
3. Рестартирайте сървъра
4. Strapi автоматично ще актуализира базата данни

## 🐛 Troubleshooting

### Проблем: "Component not found"
**Решение:** Уверете се че сте копирали всички компоненти в `src/components/diverso/`

### Проблем: "Collection type already exists"
**Решение:** Изтрийте съществуващия collection type от Strapi admin преди импорт

### Проблем: API endpoints не работят
**Решение:** Проверете permissions в Users & Permissions plugin

## 📧 Поддръжка

За въпроси относно схемите или Next.js интеграцията, моля свържете се с development екипа.