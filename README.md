
<img width=100% src="https://capsule-render.vercel.app/api?type=venom&height=300&color=5132a9&text=DuckDuckGo&textBg=false&fontColor=De5833"/>

![image](https://user-images.githubusercontent.com/48696451/207077244-9ecdfe81-4704-4d67-8521-bf6c86dc4572.png)

<div align="left" />
<br> </br>

🛠️ **Tech Stack:**

![javascript](https://img.shields.io/badge/-javascript-F7DF1E?style=flat&logo=javascript&labelColor=0D1117)
![cucumber](https://img.shields.io/badge/-cucumber-23D96C?style=flat&logo=cucumber&labelColor=FFFFFF)
![vscode](https://img.shields.io/badge/-VSCode-545454?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIxLjI5IDQuMS00LjEyLTJhMS4zNiAxLjM2IDAgMCAwLS40OC0uMWgtLjA4YTEuMTggMS4xOCAwIDAgMC0uNzIuMjRsLS4xNC4xMi03Ljg4IDcuMTlMNC40NCA3YS44My44MyAwIDAgMC0uNTQtLjE3Ljg4Ljg4IDAgMCAwLS41My4xN2wtMS4xIDFhLjguOCAwIDAgMC0uMjcuNjEuODQuODQgMCAwIDAgLjI3LjYybDMgMi43MS0zIDIuNzJhLjg0Ljg0IDAgMCAwIDAgMS4yM2wxLjEgMWEuODkuODkgMCAwIDAgLjYuMjIuOTMuOTMgMCAwIDAgLjQ3LS4xN2wzLjQzLTIuNjEgNy44OCA3LjE5YTEuMiAxLjIgMCAwIDAgLjc2LjM2aC4xN2ExIDEgMCAwIDAgLjQ5LS4xMmw0LjEyLTJhMS4yNSAxLjI1IDAgMCAwIC43MS0xLjFWNS4yM2ExLjI2IDEuMjYgMCAwIDAtLjcxLTEuMTN6TTE3IDE2LjQ3bC02LTQuNTMgNi00LjUzeiIvPjwvc3ZnPg==&style=flat&labelColor=FFFFFF)
![GitHub](https://img.shields.io/badge/-GitHub-545454?style=flat&logo=github)
![Linux](https://img.shields.io/badge/-Linux-545454?style=flat&logo=linux)

# Objective: 
Conduct a search on DuckDuckGo for the latest Bitcoin news.

## Prerequirements:

Before starting, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (version 12 or higher)
- [npm](https://www.npmjs.com/get-npm) (usually installed alongside Node.js) or [Yarn](https://classic.yarnpkg.com/en/docs/install/ )

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install the project dependencies:

    Using npm:

    ```bash
    npm install
    ```

    Using Yarn:

    ```bash
    yarn install
    ```
    
## Project Structure

The project is organized as follows:<br>
cypress/<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;├── e2e <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;├── fixtures/<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;├── screenshots/<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;└── support/<br>
cypress.json<br>
package.json<br>


- **cypress/e2e/**: Contains test files.
- **cypress/fixtures/**: Contains static data files that can be used in tests.
- **cypress/screenschots/**: Contains test evidences.
- **cypress/support/**: Custom commands and behavior overrides.

## Running Tests

To open the Cypress graphical interface, run:

```bash
npx cypress open
```
or 
```bash
yarn cypress open
```
To run the tests in headless mode (command line), run: 
```bash
npx cypress run
```
or 
```bash
yarn cypress run
```
## Additional Configuration:
You can configure Cypress by editing the cypress.json file. <br>
For example:<br>
{
  "baseUrl": "http://localhost:3000",<br>
  "viewportWidth": 1280,<br>
  "viewportHeight": 720<br>
}

## Useful Commands:
Update Cypress: <br>
To update Cypress to the latest version, run:<br>
```bash
npm install cypress@latest
```
or 
```bash
yarn add cypress@latest
```
Generate Test Report: You can use the mochawesome plugin to generate test reports. Install the plugin and configure Cypress to use mochawesome.

## Additional Resources
[Official Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress) <br>
[Cypress Test Examples](https://github.com/cypress-io/cypress-example-kitchensink) <br>
[Cypress Community](https://www.cypress.io/blog/category/Community)<br>

## Contributing
Contributions are welcome! Feel free to open issues and pull requests.

## Comments:

  - It was used step nomenclature in the Camel Case standard;

  - It was used describe and it nomenclature in a clear and objective way;

  - It was configured the project for low Chrome consumption in e2e settings;

  - It was used commands as a good practice to code the scenarios below.
    
  - The project wiki details the testing strategies used for this project, as well as possible improvements.<br>
  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;👇🏾 👇🏾 👇🏾 <br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://github.com/mrlebass/DuckDuckGo/wiki" target="_blank"><img src="https://img.shields.io/badge/-GitWiki-%23333?&style=flat&logo=github" target="_blank"></a>
