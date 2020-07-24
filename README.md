# vue-p5-template

Am besten ihr forkt euch einmal die repo und cloned sie dann über ssh.

Ihr müsst folgende Dateien bearbeiten:

### Notwendig:
* `deploy.sh`: Repo-Clone URL einfügen (Auf den grünen Code Button, dort use SSH. und dann den Link kopieren. Sollte so aussehen: git@github.com:username/vue-p5-template.git)  
* `src/router/index.js`: Repo-Name einfügen  
* `vue.config.js`: Repo-Name einfügen

### Optional:
* `src/components/p5Viz.vue`: Euren p5 Code einfügen  
* `src/assets/sounds/`: Eure Sound-Dateien einfügen  
* `src/lang/translations/`: Eure Text entsprechend anpassen  
* `src/assets/background.png`: Start-Hintergrundbild festlegen  
* `src/App.vue`: Generelle Stylings (z.B. Typo ändern)  

Nach dem ersten fork und clone einmal `npm i`
Zum veröffentlichen auf GitHub-Pages einfach im Terminal: `bash deploy.sh`

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
