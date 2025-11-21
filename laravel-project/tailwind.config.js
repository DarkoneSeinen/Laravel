import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                /* Light Theme */
                surface: 'var(--color-surface, hsl(0 0% 95%))',
                'surface-alt': 'var(--color-surface-alt, hsl(0 0% 90%))',
                'on-surface': 'var(--color-on-surface, hsl(0 0% 25%))',
                'on-surface-strong': 'var(--color-on-surface-strong, hsl(0 0% 0%))',
                primary: 'var(--color-primary, hsl(270 100% 55%))',
                'on-primary': 'var(--color-on-primary, hsl(0 0% 100%))',
                secondary: 'var(--color-secondary, hsl(215 100% 50%))',
                'on-secondary': 'var(--color-on-secondary, hsl(0 0% 100%))',
                outline: 'var(--color-outline, hsl(0 0% 87%))',
                'outline-strong': 'var(--color-outline-strong, hsl(0 0% 25%))',

                /* Dark Theme */
                'surface-dark': 'var(--color-surface-dark, hsl(0 0% 25%))',
                'surface-dark-alt': 'var(--color-surface-dark-alt, hsl(0 0% 15%))',
                'on-surface-dark': 'var(--color-on-surface-dark, hsl(0 0% 87%))',
                'on-surface-dark-strong': 'var(--color-on-surface-dark-strong, hsl(0 0% 93%))',
                'primary-dark': 'var(--color-primary-dark, hsl(270 100% 65%))',
                'on-primary-dark': 'var(--color-on-primary-dark, hsl(0 0% 0%))',
                'secondary-dark': 'var(--color-secondary-dark, hsl(215 100% 60%))',
                'on-secondary-dark': 'var(--color-on-secondary-dark, hsl(0 0% 0%))',
                'outline-dark': 'var(--color-outline-dark, hsl(0 0% 30%))',
                'outline-dark-strong': 'var(--color-outline-dark-strong, hsl(0 0% 87%))',

                /* Shared Colors */
                info: 'var(--color-info, hsl(188 100% 50%))',
                'on-info': 'var(--color-on-info, hsl(0 0% 0%))',
                success: 'var(--color-success, hsl(174 100% 40%))',
                'on-success': 'var(--color-on-success, hsl(0 0% 0%))',
                warning: 'var(--color-warning, hsl(49 100% 60%))',
                'on-warning': 'var(--color-on-warning, hsl(0 0% 0%))',
                danger: 'var(--color-danger, hsl(330 100% 55%))',
                'on-danger': 'var(--color-on-danger, hsl(0 0% 0%))',
            },
            borderRadius: {
                radius: 'var(--radius-radius, var(--radius-xl))',
            },
        },
    },

    plugins: [forms],
};
