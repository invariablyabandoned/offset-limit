# Why you shouldn't use offset/limit (visibly)

// TODO link the published blog article here

Code demos accompanying the [Why you shouldn't use offset/limit (visibly)](https://invariablyabandoned.com) blog article

## Contents

### SQL

The `sql` folder contains each of the code snippets used to demonstrate performance.


### JS

The `javascript` folder contains code examples of querying different apis with pagination

```sh
npm ci

# https://pokeapi.co/docs/v2#resource-listspagination-section
node js/1_overt-offset-limit.mjs
node js/2_link-offset-limit.mjs

# https://developers.notion.com/reference/authentication
node --env-file js/.env js/3_cursor.mjs

node js/4_obfuscated-offset-limit.mjs
```

## Slides

A presentation was also created to go along with the blog article and the details can be found in the `presentation` folder
