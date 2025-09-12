# About Me

Hi, I’m **@letsdeepchat**, a backend developer passionate about building robust and scalable web applications using **Python**, **FastAPI**, and **PostgreSQL**. I enjoy crafting efficient APIs, architecting clean backend services, and working with databases to deliver performant, data-driven solutions.

## What I’m Working On

I’m currently focused on:

- Developing production-ready APIs using FastAPI  
- Implementing secure authentication flows with JWT  
- Integrating third-party services like **Masters India GST APIs**  
- Containerizing applications using **Docker**  
- Managing asynchronous tasks and optimizing database interactions  

## What I Aim to Achieve

| Category           | Example Task                                       |
| ------------------ | -------------------------------------------------- |
| **Feature Design** | Lead design of GSTR1 ingestion & validation engine |
| **API Dev**        | Build secure, paginated invoice search API         |
| **DB**             | Optimize invoice summary query with joins          |
| **Auth**           | Implement OAuth2 flow with refresh tokens          |
| **Testing**        | Set up DB mocks and coverage thresholds            |
| **Deployment**     | Dockerize FastAPI + set up CI on merge             |
| **Observability**  | Add structured logging and Prometheus metrics      |
| **Team**           | Review PRs, write documentation for API usage      |

## Deployment to Firebase App Hosting

This project is configured for deployment to **Firebase App Hosting**. Follow these steps to deploy your application:

### 1. Install Firebase CLI

If you haven't already, install the Firebase Command Line Interface (CLI) on your machine.

```bash
npm install -g firebase-tools
```

### 2. Log in to Firebase

Authenticate with your Google account by running the following command. This will open a browser window for you to log in.

```bash
firebase login
```

### 3. Initialize Firebase in Your Project

From the root directory of your project, run the initialization command:

```bash
firebase init
```

- When prompted "Which Firebase features do you want to set up?", use the arrow keys to select **App Hosting**.
- Press **space** to select it, then **Enter**.
- Follow the prompts to either create a new Firebase project or select an existing one.
- You will be asked to set up a backend. Choose a location for your backend (e.g., `us-central1`).

This will create `.firebaserc` and `firebase.json` files in your project, linking it to your Firebase project.

### 4. Set the Resend API Key as a Secret

Your contact form uses the Resend API. For it to work in production, you must securely provide your `RESEND_API_KEY` to your App Hosting backend.

Run the following command, replacing `your_resend_api_key_here` with your actual key from the `.env` file:

```bash
firebase apphosting:secrets:set RESEND_API_KEY
```

When prompted, paste your Resend API key (`re_...`). This stores the key securely in Google Secret Manager, and your deployed application will have access to it.

### 5. Deploy Your Application

Now you are ready to deploy. Run the following command from your project's root directory:

```bash
firebase deploy --only apphosting
```

The CLI will build your Next.js application and deploy it to Firebase App Hosting. Once finished, it will provide you with the URL to your live portfolio!

## Open to Collaborate

I’m interested in collaborating on:

- FastAPI or Flask-based API systems  
- Projects that require tight database integrations (PostgreSQL or MySQL, MongoDB)  
- Systems involving financial workflows, APIs, and automation  
- Open source contributions in the Python ecosystem  

## How to Reach Me

You can connect via:

- GitHub: [@letsdeepchat](https://github.com/letsdeepchat)  
- Email: deepakchaudhari705@gmail.com - Reach out via issues or project discussions on GitHub  

## My Favourite Quote

> **"The real skill is: knowing what to ask, how to fix, and how to apply."** - Modi Ji 🤪😂
