import fs from "fs";
import axios from "axios";
import * as cheerio from "cheerio";

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const goodManner = new Promise((resolve) =>
  setTimeout(resolve, random(100, 300))
);

const parsed: any[] = [];

const url = "https://earthview.withgoogle.com/";

async function parse(start: number, end: number) {
  for (let index = start; index <= end; index++) {
    await goodManner;

    try {
      const response = await axios.get(url + index);
      console.log(index, "has data, will parse it now");

      const html = response.data;
      const $ = cheerio.load(html);
      const dataPhoto = $("body").attr("data-photo");
      const photoData = JSON.parse(dataPhoto || "{}");

      parsed.push(photoData);
    } catch (error) {
      console.log(index, "does not exist, skipped");
    }
  }
}

parse(1, 17000).then(() => {
  const folder = "./parsed";
  const timestamp = new Date().toISOString().replace(/:/g, "-");
  const filePath = `${folder}/${timestamp}.json`;

  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(parsed));

  console.log("Done");
});
