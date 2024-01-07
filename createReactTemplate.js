const fs = require("fs");
const path = require("path");

const templatePath = path.join(__dirname, "template"); // Adjust this path accordingly

const createReactTemplate = async (destinationPath) => {
  try {
    function copyFolderRecursiveSync(source, target) {
      if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
      }

      const files = fs.readdirSync(source);

      files.forEach((file) => {
        const sourcePath = path.join(source, file);
        const targetPath = path.join(target, file);

        if (fs.lstatSync(sourcePath).isDirectory()) {
          copyFolderRecursiveSync(sourcePath, targetPath);
        } else {
          fs.copyFileSync(sourcePath, targetPath);
        }
      });
    }

    copyFolderRecursiveSync(templatePath, destinationPath);

    console.log("React template created successfully!")
  } catch (error) {
    console.error('Error creating React template:', err);
  }
};

module.exports = createReactTemplate;
