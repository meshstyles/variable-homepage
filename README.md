# variable-homepage

Vue.js v2.6.14 based dynamic webpage that show what services run on home server.

![Screenshot](https://i.imgur.com/wfJ4xaI.png)

Tested with apache2 should work with anything but no guarantees for that.
The used version of vue.js and bootstrap CSS are both very old these might be fine to use on home server that isn't used to host anything externally.
In case you use your home server for external purposes, please do not use this project.
The code quality on this is likely not that good.
It's my intro to frontend frameworks and I've used some very outdated tutorials and probably not the intended way to use either of these.
Regardless this might still be helpful to some people since it should be relatively light weight server side.

This version includes some assets for illustration purposes.
Please adjust the services.json to your hearts content and read the recommended changes.

# recomended changes

## adjusting services or using an api

The JSON used should be self-explanatory.
If you use logos for services like Gitea please download the image and reference them.

```json
{
    "server": {
        "title": "Pi Zero 2 W",
        "services": [
            {
                "link": "/git/",
                "linkText": "Gitea",
                "img": "https://gitea.io/images/gitea.png",
                "imgAlt": "gitea logo"
            }
        ]
    }
}
```

## downloads of external references

I would recommend pulling these files and replacing them for local usage to reduce dependency on external services.  
I do not want to include them in the git myself since I’m not sure about some of the licenses and they aren't subject to change.

| description                 | url                                                                     | referenced in file |
| --------------------------- | ----------------------------------------------------------------------- | ------------------ |
| bootstrap 3 css dark theme  | https://bootswatch.com/3/cyborg/bootstrap.min.css                       | js/themeswitch.js  |
| bootstrap 3 css light theme | https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css | js/themeswitch.js  |
| vue.js 2                    | https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js                          | index.html         |
| axios                       | https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js                    | index.html         |
