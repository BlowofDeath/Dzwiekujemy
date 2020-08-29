import { writeFile, readFileSync } from "fs";

export const saveConfig = (data, configName) => {
  data = JSON.stringify(data);

  writeFile(`./configs/${configName}.json`, data, function (err) {
    if (err) {
      console.log("There has been an error saving your configuration data.");
      console.log(err.message);
      return;
    }
    console.log("Configuration saved successfully.");
  });
};

export const loadConfig = (configName) => {
  const data = readFileSync(`./configs/${configName}.json`),
    myObj = JSON.parse(data);
  return myObj;
};
