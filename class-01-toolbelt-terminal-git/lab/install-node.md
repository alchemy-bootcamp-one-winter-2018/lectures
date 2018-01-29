# Install Party

## Node and NPM

Node is a JS run time environment that also comes with a package manager, NPM. NPM allows us to install and use various tools for development, such as `eslint`.
Don't worry too much about what Node is and does-we explore it more in Bootcamp: Part 2.

Note: If you get an error while installing these packages such as "try again as root/administrator", you may need to use the sudo command to get administrator access. For example `sudo apt-get install nodejs`.

---

### Linux instructions

- To install Node, open your Terminal, type the following line, then hit Enter:

    - `sudo apt-get install nodejs`

- Afterwards, you'll want to install Node Package Manager (NPM).

    - `sudo apt-get install npm`

If you run into issues trying to install Node from these steps, please contact your instructor.

---

### Mac instructions
- If you don't have `homebrew` installed, install it by following the instructions [here](./install-homebrew.md).

- Then to install Node, open your Terminal, and enter:

    - `brew update && brew install node`

---
### Windows instructions

- To install Node, go [here](https://nodejs.org/en/download/) to download the Windows Installer. 
- Run the installer and make sure you do not deselect any of the Node components such as NPM during the installation.

### Verify the Node installation
Now let's verify that it is installed. Enter the following into your terminal:

- `node -v`

You should get version number like `v8.2.1` as a response. If not, try reinstalling Node again. If you are still having issues, please contact your instructor.

----


## EsLint

Eslint is a linter that evaluates your JavaScript for potential issues with style or syntax. We provide it with a set of rules to check for.

### In VS Code

Go to the `Extensions` panel and search for `ESlint`. Follow the instructions to install.

### On your computer, using NPM

In your terminal enter the following command: 

`npm install -g eslint`

This will install the eslint CLI (command line interface) allowing us to run a command and check our files. To make sure it install correctly, enter `eslint -v`. You should see a version number as a response.