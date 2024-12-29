| **Step**                  | **Description**                                                                               | **Technologies/Details**                                                    | **Estimated Duration** |
|---------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|-------------------------|
| **1. Initial Planning**   | Define scope, user stories, and required resources.                                           | Review this plan and align priorities.                                      | 1 day                  |
| **2. Screen Design**      | Create wireframes and prototypes in Figma for all screens: operation registration, listing, summary, and login (if multi-user). | Tool: Figma or free alternative (e.g., Adobe XD, Canva).                    | 2 days                 |
| **3. Environment Setup**  | Set up the development environment: configure Vue.js, PostgreSQL, and .NET/C#.                | Install PostgreSQL (confirm free license). Set up IDEs (e.g., Visual Studio, VS Code). | 1 day                  |
| **4. Database**           | Create the database with necessary tables: users, operations, and auxiliary ones.             | PostgreSQL. Structure tables with UUIDs, primary keys, and foreign keys.    | 1 day                  |
| **5. Back-end Development** | Implement functionalities in C# for database communication and business logic.               | .NET Framework with REST API.                                               | 4 days                 |
| **5.1. Operation Registration** | Create endpoint to register operations (buy/sell) with validations.                       | POST method for /operations.                                                |                         |
| **5.2. Operation Listing** | Endpoint to return all user operations with filters by date/type.                             | GET method for /operations.                                                 |                         |
| **5.3. Value Summary**     | Endpoint to calculate and return total invested, received, and net balance.                   | GET method for /summary.                                                    |                         |
| **5.4. Authentication (Optional)** | Implement endpoints for user registration/login with password hashing.                  | POST methods for /users/register and /users/login.                          |                         |
| **6. Front-end Development** | Implement screens to interact with the created endpoints.                                    | Vue.js, HTML, CSS, Bootstrap for styling.                                   | 5 days                 |
| **6.1. Operation Registration** | Screen with a form to register buy and sell operations.                                   | Communication with the /operations endpoint. Front-end and back-end validations. |                         |
| **6.2. Operation Listing** | Screen displaying operation history with visual distinction (e.g., icons or colors).          | Communication with the /operations endpoint.                                |                         |
| **6.3. Value Summary**     | Screen showing total invested, received, and net balance.                                     | Communication with the /summary endpoint.                                   |                         |
| **6.4. Login and Registration (Optional)** | Login and registration screens for multi-users with secure authentication.        | Communication with /users/register and /users/login endpoints.              |                         |
| **7. Testing**            | Test functionality of each screen and endpoint, fixing bugs and improving UX.                 | Unit and manual testing. Tools like Postman for API.                        | 3 days                 |
| **8. Hosting**            | Set up back-end and front-end hosting for public access.                                      | Heroku, AWS, Vercel, or similar. Configure HTTPS.                           | 2 days                 |
| **9. Final Review and Delivery** | Review features, documentation, and user experience.                                    | Checklist of completed features and code review.                            | 1 day                  |


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
