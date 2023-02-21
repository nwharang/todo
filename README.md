```
/
├── public/
├── src/
│   └── controller/
|           └── auth.controller.js
|           └── team.controller.js
|           └── todo.controller.js
│   └── model/
|           └── todo.csv
|           └── team.csv
|           └── user.csv
│   └── routes/
|           └── index.js
│   └── views/
|       └── pages/
│           └── index.astro
│           └── 404.astro
│           └── dashboard.astro
│           └── team.astro
│           └── todo.astro
│       └── /...
└── package.json
```

User models :

```
| id | email | password | img | created_time | update_time |
|----|-------|----------|-----|--------------|-------------|

```

Team models :

```
| id | userid | member | img | created_time | update_time |
|----|--------|--------|-----|--------------|-------------|

```

Todos models :

```
| id | userid | assigned_user | status | create_time | update_time |
|----|--------|---------------|--------|-------------|-------------|

```
