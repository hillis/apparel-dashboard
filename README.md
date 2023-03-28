# Apparel Dashboard

# Apparel **Dashboard**

This project is an Angular application that provides a dashboard for Printavo orders. Users can search, sort, and paginate through orders fetched from the Printavo GraphQL API. Additionally, a chat component is integrated with OpenAI's GPT-4 to provide an interactive chat experience.

## **Features**

- Search for orders using the search bar
- Sort orders by different properties
- Choose the number of results to display per page
- Pagination support for displaying more results
- Interactive chat component using OpenAI's GPT-3.5 or GPT-4

## **Prerequisites**

- Node.js (v14.x or later)
- Angular CLI (v12.x or later)
- API access to Printavo and OpenAI

## **Dependencies**

- **`@angular/animations`**: version 15.2.0 or higher
- **`@angular/common`**: version 15.2.0 or higher
- **`@angular/compiler`**: version 15.2.0 or higher
- **`@angular/core`**: version 15.2.0 or higher
- **`@angular/forms`**: version 15.2.0 or higher
- **`@angular/platform-browser`**: version 15.2.0 or higher
- **`@angular/platform-browser-dynamic`**: version 15.2.0 or higher
- **`@angular/router`**: version 15.2.0 or higher
- **`@apollo/client`**: version 3.0.0 or higher
- **`@ng-bootstrap/ng-bootstrap`**: version 14.0.1 or higher
- **`@popperjs/core`**: version 2.11.6 or higher
- **`apexcharts`**: version 3.37.2 or higher
- **`apollo-angular`**: version 4.2.1 or higher
- **`bootstrap`**: version 5.2.3 or higher
- **`graphql`**: version 16 or higher
- **`jquery`**: version 3.6.4 or higher
- **`ng-apexcharts`**: version 1.7.4 or higher
- **`openai`**: version 3.2.1 or higher
- **`popper.js`**: version 1.16.1 or higher
- **`rxjs`**: version 7.8.0
- **`tslib`**: version 2.3.0 or higher
- **`zone.js`**: version 0.12.0 or higher


## **Installation**

1. Clone the repository:

```bash

git clone https://github.com/yourusername/printavo-dashboard.git
cd printavo-dashboard

```

1. Install dependencies:

```bash

npm install

```

1. Create a **`src/environments/environment.ts`** file with the following content:

```tsx

export const environment = {
  production: false,
  clientType: 'YOUR_CLIENT_TYPE',
  clientToken: 'YOUR_CLIENT_TOKEN',
  token: 'YOUR_PRINTAVO_API_TOKEN',
  email: 'YOUR_EMAIL',
  openaiApiEndpoint: 'YOUR_API_ENDPOINT',
};

```

Replace the placeholders with your actual Printavo and OpenAI API credentials. 

1. Run the development server:

```bash

ng serve

```

Navigate to **`http://localhost:4200/`** to see the application running.

## **Deployment**

To build the project for production, run the following command:

```bash

ng build --prod

```

This will create a **`dist/`** directory with the compiled assets. Deploy the contents of the **`dist/`** directory to your preferred hosting provider.

## **Usage**

1. Open the Apparel Dashboard application in your browser.
2. Use the search bar to search for orders. The table will display the results based on your query.
3. Sort the results by clicking on the table headers.
4. Choose the number of results to display per page using the dropdown.
5. Navigate through the pages using the "Next" button.

For the chat component:

1. Navigate to the chat component page in the application.
2. Type your message into the input box and press "Send" to interact with the GPT-4 powered chatbot.

## **Contributing**

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## **License**

**[MIT](https://choosealicense.com/licenses/mit/)**
