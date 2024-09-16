# SML NextJS Template

**Content:**
1. [Source structure](#1-source-structure)
2. [Rules](#2---rules)
2. [Setup & run on local](#3---setup--run-on-local)


## 1 - Source structure

- General
```
|-- .husky
|-- public
|-- src
|   |-- app
|   |   |-- layout.tsx // Define layout for routing "/"
|   |   |-- page.tsx // Contain rendering code for routing "/"
|   |   |-- [global-error.tsx] // Define global error rendering
|   |   |-- [error.tsx] // Define error rendering
|   |   |-- [styles.sass] // Define styles
|   |   |-- [_components] // Internal components which is just used by routing "/"
|   |   |   |-- [<ComponentFolder>]* // See ComponentFolder structure below
|   |   |-- [<routing-folder>]* // See routing-folder structure below
|   |-- configs
|   |   |-- index.ts // Export public configs
|   |   |-- [<config-file>.config.ts] // Config file
|   |-- constants
|   |   |-- index.ts // Export constants
|   |   |-- [<constants-file>.constant.ts]* // Constant file
|   |-- types
|   |   |-- index.ts // Export types
|   |   |-- [<type-file>.type.ts]* // Type file
|   |-- enums
|   |   |-- index.ts // Export enums
|   |   |-- [<enum-file>.enum.ts]* // Enum file
|   |-- contexts
|   |   |-- index.ts // Export contexts
|   |   |-- [<ContextFolder>] // Define a context
|   |   |   |-- context.tsx // Define context type & default value
|   |   |   |-- provider.tsx // Define provider component for context
|   |   |   |-- hook.ts // Define hook to use context
|   |   |   |-- index.ts // Export context
|   |-- core // Core components
|   |   |-- index.js
|   |   |-- index.d.ts
|   |-- utils
|   |   |-- index.ts // Export helpers
|   |   |-- [<util-file>.util.ts]* // Helper file
|   |-- hooks
|   |   |-- index.ts // Export hooks
|   |   |-- [<useHookName>.ts]* // Define hook
|   |-- layouts // Contains code of layouts
|   |   |-- index.ts // Export layouts
|   |   |-- [<LayoutFolder>]* Define a layout
|   |   |   |-- index.ts // Export layout
|   |   |   |-- impl.tsx // Contains rendering code of layout
|   |   |   |-- [types.ts] // Define types used in layout
|   |   |   |-- [styles.sass] // Define styles of layout
|   |   |   |-- [<ComponentFolder>]* // See ComponentFolder structure below
|   |-- models // Define data model of objects used in source
|   |   |-- index.ts // Export models
|   |   |-- [<model-file>.model.ts]* // Data model file
|   |-- services // Define services, like: API Client, Cookies, Encrypt-Decrypt, ...
|   |   |-- index.ts // Export services
|   |   |-- apis // API services
|   |   |   |-- index.ts // Export API services
|   |   |   |-- [<api-service-file>.api.ts]* // API service file
|   |   |-- [<service-file>.service.ts]* // Define a service
|   |-- shared-components // Define common components which is used in source
|   |   |-- [<ComponentFolder>]* // See ComponentFolder structure below
|   |-- styles
|   |   |-- globals.sass // Define global styles
|   |   |-- mixins
|   |   |   |-- mixins.sass // Export mixins
|   |   |   |-- [<mixin-file>.mixin.sass]* // Define minxins
```

- `routing-folder`
```
|-- <routing-folder> // Define a routing
|   |-- page.tsx // Contain rendering code of routing
|   |-- [layout.tsx] // Define layout of routing
|   |-- [error.tsx] // Define error rendering
|   |-- [styles.sass] // Define styles of routing
|   |-- [<routing-folder>]* // Define sub-routings
|   |-- [_components] // Internal components which is just used in routing
|   |   |-- [<ComponentFolder>]* // See ComponentFolder structure below

```

- `ComponentFolder`
```
|-- <ComponentFolder> // Define a component
|   |-- index.ts // Export component
|   |-- impl.tsx // Contain rendering code of component
|   |-- [styles.sass] // Define styles of component
|   |-- [types.ts] // Define custom types used in component
|   |-- [<ComponentFolder>]* // Define child components just used in component
```

## 2 - Rules

- Follow React Coding Conventions
- Các component luôn dùng `use client`

## 3 - Setup & run on local

- Step 1: Create file `.env` in root folder & fill content
- Step 2: Install modules, run command:\
  `yarn install` or `npm install`
- Step 2: Run command start on local:\
  `yarn dev` or `npm run dev`

