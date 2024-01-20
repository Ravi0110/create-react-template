const fs = require("fs");
const path = require("path");

const templatePath = path.join(__dirname, "template"); // Adjust this path accordingly

const createReactTemplate = async (destinationPath) => {
  try {
    fs.cpSync(templatePath, destinationPath, {recursive: true});
    console.log("React template created successfully!")
  } catch (error) {
    console.error('Error creating React template:', err);
  }
};

module.exports = createReactTemplate;
