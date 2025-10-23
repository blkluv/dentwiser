# 🦷 DentWise AI Dental Assistant

<div align="center">
  <img src="public/readme/Banner.png" alt="DentWise Landing Page" width="100%" />
  
  <p align="center">
    <strong>An intelligent dental assistant powered by AI voice technology</strong>
  </p>
  
  <p align="center">
    <a href="https://dentwise-ai-dental-assistan-p3h1i.sevalla.app" target="_blank">
      <img src="https://img.shields.io/badge/🚀_Live_Demo-Visit_App-00D9FF?style=for-the-badge&logoColor=white" alt="Live Demo" />
    </a>
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" />
    <img src="https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql" alt="PostgreSQL" />
  </p>
</div>

## 🌟 Overview

DentWise is a comprehensive AI-powered dental assistant that revolutionizes patient care through intelligent voice interactions, appointment management, and administrative tools. Built with modern web technologies, it provides seamless communication between patients and dental professionals.

## ✨ Features

### 🎤 AI Voice Assistant

- **Real-time voice interactions** with advanced AI
- **Natural language processing** for dental consultations
- **Intelligent responses** to dental health queries
- **Voice-to-text transcription** capabilities

### 📅 Appointment Management

- **Smart booking system** with doctor availability
- **Time slot conflict prevention**
- **Email notifications** for confirmations
- **Multi-step booking wizard**

### 👨‍⚕️ Doctor Management

- **Complete doctor profiles** with specializations
- **Availability scheduling**
- **Performance analytics**
- **Patient assignment system**

### 📊 Admin Dashboard

- **Real-time statistics** and analytics
- **Appointment overview** and management
- **Doctor performance metrics**
- **User management system**

### 💰 Pricing & Subscriptions

- **Flexible pricing tiers**
- **Pro subscription features**
- **Usage tracking**
- **Billing management**

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Accessible component library
- **React Hook Form** - Form management
- **Tanstack Query** - Data fetching and caching

### Backend & Database

- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Primary database
- **Clerk** - Authentication and user management
- **Resend** - Email delivery service

### AI & Voice

- **Vapi AI** - Voice AI integration
- **React Email** - Email template system

### Development Tools

- **Biome** - Linting and formatting
- **Turbopack** - Fast bundler
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Clerk account for authentication
- Vapi AI account for voice features

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/amaan-ur-raheman/dentwise-ai-dental-assistant.git
    cd dentwise-ai-dental-assistant
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    ```bash
    cp .env.example .env
    ```

    Configure the following variables:

    ```env
    DATABASE_URL="your_postgresql_url"
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_key"
    CLERK_SECRET_KEY="your_clerk_secret"
    NEXT_PUBLIC_VAPI_PUBLIC_KEY="your_vapi_key"
    RESEND_API_KEY="your_resend_key"
    ```

4. **Set up the database**

    ```bash
    npx prisma generate
    npx prisma db push
    ```

5. **Run the development server**

    ```bash
    npm run dev
    ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📸 Screenshots

### 🏠 Landing Page

<img src="public/readme/LandingPage.png" alt="Landing Page" width="100%" />

### 📊 Dashboard

<img src="public/readme/DashboardPage.png" alt="Dashboard" width="100%" />

### 🎤 AI Voice Assistant

<img src="public/readme/AIVoiceAssistant.png" alt="AI Voice Assistant" width="100%" />

### 📅 Appointments

<img src="public/readme/AppointmentsPage.png" alt="Appointments Page" width="100%" />

### ⚙️ Admin Panel

<img src="public/readme/AdminPage.png" alt="Admin Panel" width="100%" />

### 💰 Pricing

<img src="public/readme/PricingPage.png" alt="Pricing Page" width="100%" />

## 📁 Project Structure

```
dentwise-ai-dental-assistant/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── admin/             # Admin dashboard
│   │   ├── appointments/      # Appointment booking
│   │   ├── dashboard/         # User dashboard
│   │   ├── voice/            # Voice assistant
│   │   └── api/              # API routes
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── admin/            # Admin-specific components
│   │   ├── appointments/     # Appointment components
│   │   ├── dashboard/        # Dashboard components
│   │   ├── landing/          # Landing page components
│   │   └── voice/            # Voice assistant components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   └── types/                # TypeScript definitions
├── prisma/                   # Database schema
├── public/                   # Static assets
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Manual Deployment

1. Build the application:
    ```bash
    npm run build
    ```
2. Start the production server:
    ```bash
    npm run start
    ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Amaan Ur Raheman**

- GitHub: [@amaan-ur-raheman](https://github.com/amaan-ur-raheman)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Clerk](https://clerk.com/) for authentication services
- [Vapi AI](https://vapi.ai/) for voice AI capabilities
- [Shadcn UI](https://ui.shadcn.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

<div align="center">
  <p>Made with ❤️ for better dental care</p>
</div>
