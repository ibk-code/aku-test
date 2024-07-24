The frontend folder structure is bootstrapted from nextjs (This uses the app router feature allowing RSC and streaming feature). It is working with a DDD (Domain driven design) folder structure.

Api - This folder contain all api instance configuration and connection

Assets - This folder contain all necessary asset for the projects found in the public folder (images, icons)

Components - This folder contain overview components that is used at high level in the whole project. All specific components should be colocated closer to the page which uses them.

Css - Styled component is used in this project(You can inject styled components and setup the css of your choice) and written along in each screen or component folder. The css global folder house global css configuration.

Hooks - This contain hook helpers used at high level, local hooks are colocated within the pages folder.

Utils - This house the utility and helper functions for the general codebase.

stores - This house the folder for managing the state-manager or context for the app
