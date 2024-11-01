#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { Command } = require("commander")
const program = new Command()
const packageJson = require("../package.json")

program
  .version(packageJson.version)
  .argument("<project-directory>", "Directory to create the project in")
  .action((projectDir) => {
    const targetPath = path.resolve(process.cwd(), projectDir)

    // Copy template files to targetPath
    fs.mkdirSync(targetPath, { recursive: true })
    fs.cpSync(path.join(__dirname, "template"), targetPath, { recursive: true })

    console.log(`Project created at ${targetPath}`)
    console.log(`cd ${targetPath}`)
    console.log(`npm install`)
    console.log(`npm run dev`)
  })

program.parse(process.argv)
