<img src="./logo.png" alt="logo" width="100">

# Earth View Crawler

This repository contains a detailed list of landscape images provided by [Earth View](https://earthview.withgoogle.com/).

## Guide

[`earth-views.json`](./earth-views.json) file contains all the available metadata associated with each image in Earth View. (2023 Jul)

[`src/index.ts`](./src/index.ts) file is the crawler which generated the [`earth-views.json`](./earth-views.json) file.

## Sample Data

```json
[
    {
        "id": "11566",
        "name": "Nor Lípez, Bolivia",
        "slug": "nor-lipez-bolivia-11566",
        "title": "Nor Lípez, Bolivia – Earth View from Google",
        "primaryColor": [
            178,
            111,
            68,
            255
        ],
        "hue": 23,
        "lat": -20.50752,
        "lng": -66.997611,
        "country": "Bolivia",
        "region": "Nor Lípez",
        "attribution": "©2019 CNES / Airbus, Maxar Technologies",
        "photoUrl": "https://www.gstatic.com/prettyearth/assets/full/11566.jpg",
        "thumbUrl": "https://www.gstatic.com/prettyearth/assets/preview/11566.jpg",
        "mapsLink": "https://www.google.com/maps/@-20.50752,-66.997611,17.7z/data=!3m1!1e3",
        "mapsLinkTitle": "View Nor Lípez, Bolivia in Google Maps",
        "earthLink": "https://earth.google.com/web/@-20.50752,-66.997611,3659a,561d,30y,270h,30t,0r/data=KAI?utm_source=referral&utm_campaign=earthview&utm_term=gallery",
        "earthLinkTitle": "View Nor Lípez, Bolivia in Google Earth",
        "shareUrl": "https://g.co/ev/11566",
        "nextSlug": "polanczyk-poland-5487",
        "prevSlug": "jepara-regency-indonesia-12857"
    }
]
```

## Note

Thanks to [Earth View Team](https://earthview.withgoogle.com/) for providing such a amazing collection of images.

Data gathered from [Earth View](https://earthview.withgoogle.com/) falls under Google's copyright. Images are subject to the copyright of their respective owners.

Please respect these copyrights when using this content.
