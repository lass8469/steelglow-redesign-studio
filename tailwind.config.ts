 import type { Config } from "tailwindcss";
 
 export default {
   darkMode: ["class"],
   content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
   prefix: "",
   theme: {
     container: {
       center: true,
       padding: "2rem",
       screens: {
         "2xl": "1400px",
       },
     },
     extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
       colors: {
         border: "hsl(var(--border))",
         input: "hsl(var(--input))",
         ring: "hsl(var(--ring))",
         background: "hsl(var(--background))",
         foreground: "hsl(var(--foreground))",
         primary: {
           DEFAULT: "hsl(var(--primary))",
           foreground: "hsl(var(--primary-foreground))",
         },
         secondary: {
           DEFAULT: "hsl(var(--secondary))",
           foreground: "hsl(var(--secondary-foreground))",
         },
         destructive: {
           DEFAULT: "hsl(var(--destructive))",
           foreground: "hsl(var(--destructive-foreground))",
         },
         muted: {
           DEFAULT: "hsl(var(--muted))",
           foreground: "hsl(var(--muted-foreground))",
         },
         accent: {
           DEFAULT: "hsl(var(--accent))",
           foreground: "hsl(var(--accent-foreground))",
         },
         popover: {
           DEFAULT: "hsl(var(--popover))",
           foreground: "hsl(var(--popover-foreground))",
         },
         card: {
           DEFAULT: "hsl(var(--card))",
           foreground: "hsl(var(--card-foreground))",
         },
         sidebar: {
           DEFAULT: "hsl(var(--sidebar-background))",
           foreground: "hsl(var(--sidebar-foreground))",
           primary: "hsl(var(--sidebar-primary))",
           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
           accent: "hsl(var(--sidebar-accent))",
           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
           border: "hsl(var(--sidebar-border))",
           ring: "hsl(var(--sidebar-ring))",
         },
         // Custom brand colors
         steel: {
           50: "hsl(0 0% 98%)",
           100: "hsl(0 0% 90%)",
           200: "hsl(0 0% 80%)",
           300: "hsl(0 0% 65%)",
           400: "hsl(0 0% 45%)",
           500: "hsl(0 0% 30%)",
           600: "hsl(0 0% 20%)",
           700: "hsl(0 0% 15%)",
           800: "hsl(0 0% 10%)",
           900: "hsl(0 0% 5%)",
           950: "hsl(0 0% 2%)",
         },
          orange: {
            DEFAULT: "hsl(25 74% 59%)",
            50: "hsl(25 60% 95%)",
            100: "hsl(25 65% 85%)",
            200: "hsl(25 70% 75%)",
            300: "hsl(25 72% 67%)",
            400: "hsl(25 74% 63%)",
            500: "hsl(25 74% 59%)",
            600: "hsl(22 68% 52%)",
            700: "hsl(20 62% 45%)",
            800: "hsl(18 58% 38%)",
            900: "hsl(15 52% 28%)",
          },
       },
       borderRadius: {
         lg: "var(--radius)",
         md: "calc(var(--radius) - 2px)",
         sm: "calc(var(--radius) - 4px)",
       },
       keyframes: {
         "accordion-down": {
           from: { height: "0" },
           to: { height: "var(--radix-accordion-content-height)" },
         },
         "accordion-up": {
           from: { height: "var(--radix-accordion-content-height)" },
           to: { height: "0" },
         },
         "fade-in": {
           from: { opacity: "0" },
           to: { opacity: "1" },
         },
         "fade-in-up": {
           from: { opacity: "0", transform: "translateY(30px)" },
           to: { opacity: "1", transform: "translateY(0)" },
         },
         "slide-in-left": {
           from: { opacity: "0", transform: "translateX(-40px)" },
           to: { opacity: "1", transform: "translateX(0)" },
         },
          "pulse-glow": {
            "0%, 100%": { boxShadow: "0 0 20px hsla(25, 74%, 59%, 0.25)" },
            "50%": { boxShadow: "0 0 40px hsla(25, 74%, 59%, 0.4)" },
         },
       },
       animation: {
         "accordion-down": "accordion-down 0.2s ease-out",
         "accordion-up": "accordion-up 0.2s ease-out",
         "fade-in": "fade-in 0.6s ease-out forwards",
         "fade-in-up": "fade-in-up 0.6s ease-out forwards",
         "slide-in-left": "slide-in-left 0.8s ease-out forwards",
         "pulse-glow": "pulse-glow 2s ease-in-out infinite",
       },
       backgroundImage: {
          "gradient-dark": "linear-gradient(135deg, hsl(0 0% 0%) 0%, hsl(0 0% 8%) 100%)",
          "gradient-orange": "linear-gradient(135deg, hsl(25 74% 59%) 0%, hsl(20 68% 52%) 100%)",
         "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
       },
     },
   },
   plugins: [require("tailwindcss-animate")],
 } satisfies Config;
