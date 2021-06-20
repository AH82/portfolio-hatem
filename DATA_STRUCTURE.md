
---
* Go to the [README](./README.md).
* Go to the [changelog](./CHANGELOG.md).
---
<br/>
<br/>
<br/>

Portfolio-App's Data-Structure
===

The following are the data structure used in this app. 


# General Information

Due to this App being limited to Front-End (No Back-End Database): Data has been placed as follows: 

* **Sensitive** or **Personal** Data are in `.json` files in the **`.gitignored`**  directory "`db`" (located at "`./src/db/*.json`")
  * This applies to *About*, *Skills*, *Projects*, *Social-Media links*.

* Other **insensitive** Data are within their respective components.
  * This applies to *Home* (welcome Screen), *contact*, *sublogo messages*.

* Data that represent ***labels*** are in `.json` files, located under `./src/locale/*.json` ([here](./src/locale/)). They act as *"Settings"* files to support **multilingualism**. 
  * This applies to *Navigation buttons* & *Pages' Headers/titles*.

* All Data which are in `.json` files are imported into [useAppData](./src/hooks/useAppData.js) custom-Hook, located at [./src/hooks/useAppData.js](./src/hooks/useAppData.js) and passed to components through props.

* To support **multilingualism**, a common pattern of data-structure is an *`Object`* containing [ISO_639-1](https://en.wikipedia.org/wiki/ISO_639-1) Language abrreviation as *`object-keys`*, itself containing the data in various structures and data-types.


# Data Structures per component  :
## Navigation Bar (vertical Header)

### Logo msg
> Data passed to components as prop.\
> Data-Location : `./src/components/Header/index.js` ([here](./src/components/Header/index.js)) in the `jsx`.
```js
{true && <LogoMsg 
          message1='beta' 
          message2={
            lang === 'fr' 
            ? 'Travail en cours' 
            : 'Work in progress'
            }
          // message3={null}
          />}
```

### Navigation tabs' labels
> Data included in `.git`.\
> Data is in `.json` file.\
> Data-Location : `./src/locale/localeNavBtns.json`\
```json
{
  "en": {
    "home": "home",
    "about": "about",
    "skills": "skills",
    "work": "my work",
    "projects": "projects",
    "contact": "contact"
  },
  "fr": {
    "home": "accueil",
    "about": "à propos",
    "skills": "compétence / comp'ce",
    "work": "mon travail",
    "projects": "",
    "contact": "contact"

  },
  "es": {
    "home": "inicio",
    "about": "acerca de",
    "skills": "habilidades",
    "work": "mi trabajo",
    "projects": "proyectos",
    "contact": "contacto"
  }
}
  
```


### Pages' Headers
> Data included in `.git`.\
> Data is in `.json` file.\
> Data-Location : `./src/locale/localeNavBtns.json`
```json
{
  "en": {
    "home": null,
    "about": "About",
    "skills": "Skills & Experience",
    "work": "My Work",
    "projects": "projects",
    "contact": "Contact me"
  },
  "fr": {
    "home": null,
    "about": "À Propos",
    "skills": "Compétence et Expérience",
    "work": "Mon Travail",
    "projects": "Projets",
    "contact": "Me Contacter"

  },
  "es": {
    "home": null,
    "about": "acerca de mi",
    "skills": "habilidades",
    "work": "mi trabajo",
    "projects": "proyectos",
    "contact": "contáctame"
  }
}
```


### Social-Network Links
> Data `.gitignored`.\
> Data-Location : `./src/db/socialMedia.json`

an *array* of *objects* with keys: `name` and `url`.
```json
[
  { "name": "linkedIn", "url": "<string URL>" },
  { "name": "gitHub", "url": "<string URL>" }
]
```
---


## Pages
### Home | Acceuil 
> Data within component.\
> Data-Location: `./src/components/Home/index.js`. ([here](./src/components/Home/index.js))

```JS
const homeMessage = {
    en: {
      greeting: `Bonjour–Hi !`,
      welcome: `Welcome to my Portfolio App!`,
      intro: `I am`,
      name: `Hatem`,
      jobTitle: `A Full-Stack \nWeb-Developer.`,
      tagline: `Junior, Fresh, Entry-Level.`
    },
    fr: {
      greeting: `Bonjour–Hi !`,
      welcome: `Bienvenue à mon App Portfolio`,
      intro: `Je m'appelle`,
      name: `Hatem`,
      jobTitle: `Un développeur Web Full-Stack`,
      tagline: `Junior, Frais, Débutant.` // or Premier Échelon
    },
}
```

### "About | À Propos" -&-  "Skills | Compétence"
> Data are `.gitignored`. \
> Data-Location : `./src/db/about.json` -&- `./src/db/skills.json`.

An *`Object`* containing *[ISO_639-1](https://en.wikipedia.org/wiki/ISO_639-1)* Language abrreviation as *`object-keys`*, containing an *`array`* of *`string`* paragraphs as *`object-values`*.

```json
{
  "en": [
    "Paragraph one",
    "Paragraph two",
    "Paragraph three",
    "...more"
    ],
  "fr": [
    "Paragraphe un",
    "Paragraphe deux",
    "Paragraphe trois",
    "...de plus"
    ],
    "es": null
}
```

### Contact | Contact
> Data are within the component. \
> Data-Location : `./src/components/Contacts/index.js`. ([here](./src/components/Contacts/index.js))

```js
  const content = {
    fr: {
      message: `Pour le moment, vous pouvez me contacter sur mon compte de LinkedIn.`
    },
    en: {
      message: `For the time being, you can contact me on my LinkedIn account.`
    }
  }
```
### My Work | Mon Travail (portfolio)
> Data are `.gitignored` \
> Data-Location : `./src/db/projectsData.json`

an *`Array`* of *`Objects`*, each *`Object`* represents a *project*, in the below structure.

* Object-keys description:
  * "`description`" & "`role`" are **Objects** containing *[ISO_639-1](https://en.wikipedia.org/wiki/ISO_639-1)* Language abrreviation as *object-keys*, containing an *array* of *string* paragraphs as *object-values*. "`title`" & "`subTitle`" may or may not follow suite in the future.
    * currently limited to English.
  * "`stack`" will map to an [`iconSelector(<stack-value>)` function](./src/helpers/iconSelector.js) to show their icons on the project card footer.

```json
[
  {
    "title": "project's title",
    "subTitle": "Project's subtitle or tagline",
    "endDate": "YYYY-MM",
    "startDate": "YYYY-MM",
    "stack": [
      "html",
      "css",
      "JS",
      "someframeWork",
      "someDataBase",
      "...more"
    ],
    "libraries": [
      "someLibrary1",
      "someLibrary2",
      "...more"
    ],
    "website_url": "https://www.example.com/",
    "img_url": [
      "image/path/1",
      "image/path/2",
      "image/path/3",
      "...more"
    ],
    "repo_url": "https://github.com/username/project-name",
    "description": {
      "en": "some description paragraph in English."
    },
    "role": {
      "en":"some role description paragraph in English"
    }
  }//,
  // ...more projects..
]
```

---
* Go to the [README](./README.md).
* Go to the [changelog](./CHANGELOG.md).
---