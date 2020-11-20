# Orphan Connect
Website that connects generous benefactors and Ambazonians in need.

Team Ambazonia (JIC 0124) - Andrew von Hillebrandt, Sam Jang, Jacob Gorman, Carson Duerr, Noah Hammond

## Release Notes

TODO: Finish up release Notes

## Development / Installation Guide

### Pre-requisites
The following must be installed in order to run the appication:
- NodeJS and NPM/NPX
  - https://nodejs.org/en/download/
- git (optional)
  - https://git-scm.com/downloads
  
### Download Instructions

- #### Using git and command line
Open the comannd line and run:

    git clone https://github.com/akvh3/projectAmbazonia.git
    
inside the directory you want the project in. This will clone the repository.
- #### Using Github interface
Go to the github repository: https://github.com/akvh3/projectAmbazonia/tree/react-db

Under '<>Code' section, click on '&#8595;Code' and select Download Zip.

Extract the Zip file under the directory you want the project in.

### Dependencies
Depencies are required for the project to run successfully.
To install them, run:

    npm install
    
inside the root project directory.

### Running the Project
After all dependencies are installed, you can finally run the project locally.

In the project directory, run:

    npm run dev
    npx next dev
    
Both commands runs the website in the development mode.

Open http://localhost:3000 or https://localhost:3000 (depending on if https is being run) to interact with the website.

### Build
To build the project, run:

    npx next build
    
This command builds the app for production to `.next` folder.

It correctly bundles all the web pages in production mode and optimizes it for best performance.

After the project is built, there is no specific installation process needed because the build contains all the necessary directory structure and files.

### Running the Build
To run the builded project, run:

    npx next start
    
Similar to running the project in development mode, this fires up a local server on http://localhost:3000 or https://localhost:3000.

However, this is running the production build which mirrors what it would look like when deployed. Also, it is much faster because the performace is optimized.

### Troubleshooting
- To make sure that NPM, NPX, and Nodejs is installed, run :

      node -v #Returns the version of NodeJS
      npm -v  #Returns the version of NPM
      npx -v  #Returns the version of NPX
    
    - If any of those fail to give the version number, most likely, it's the problem with environment path. Ensure that all of those are added to the environment path. Look into ([How to add Node to Path](https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10#:~:text=Search%20for%20Environment%20Variables%20in,nodejs%5Cnode_modules%5Cnpm%5Cbin))
    
- To make sure the git is installed, run:

      git --version #Returns the version of git

    - If git fails to give the version number, most likely, it's the same problem as above. ([Adding git to Path](https://stackoverflow.com/questions/26620312/git-installing-git-in-path-with-github-client-for-windows))

