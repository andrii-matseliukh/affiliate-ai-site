# Setup Instructions for Affiliate AI Site

## Environment Variables
To set up your environment variables, create a `.env` file in the root of your project with the following configuration:

```plaintext
# Example Environment Variables
DATABASE_URL=your_database_url
API_KEY=your_api_key
SECRET_KEY=your_secret_key
``` 

Make sure to replace the placeholders with your actual values.

## Local Testing
1. **Clone the repository**:
   ```bash
   git clone https://github.com/andrii-matseliukh/affiliate-ai-site.git
   cd affiliate-ai-site
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
4. **Run Tests**:
   ```bash
   npm test
   ```

## Deployment Configuration
For deployment, ensure your production environment is set up correctly:
1. Set the environment variables in your production server, similar to how you did for local testing.

2. **Build the project**:
   ```bash
   npm run build
   ```
3. **Start the Server**:
   ```bash
   npm start
   ```
4. Ensure that your application is running in the appropriate environment (development/production).