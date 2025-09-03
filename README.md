# CV Application

A simple React CV builder where users can input and edit their general information, education, and work experience.

## Features

- **General Information**: Add/edit name and email
- **Education Section**: Add/edit school name, study program, and dates
- **Work Experience**: Add/edit company, job title, description, and dates
- **Edit/Display Toggle**: Switch between editing and viewing modes for each section
- **Form Validation**: Basic form handling with controlled inputs

## Technologies Used

- React (useState hook)
- Vite (build tool)
- Tailwind CSS (styling)

## How It Works

Each section has two modes:
1. **Edit Mode**: Form with input fields and Save button
2. **Display Mode**: Shows saved information with Edit button

Data is managed using React state - no persistence between browser refreshes.

## Key React Concepts Demonstrated

- State management with `useState`
- Controlled form components
- Event handling (onSubmit, onChange)
- Conditional rendering
- Component organization

## Setup

```bash
npm install
npm run dev