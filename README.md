# Laravel Practice App

Aplicación de práctica Laravel con ejemplos de modelos, controladores, middleware y migraciones.

## 📋 Descripción

Esta es una aplicación Laravel de aprendizaje que demuestra conceptos básicos del framework, incluyendo:
- Modelos Eloquent (Car, Book, User)
- Controladores de recursos
- Middleware personalizado para verificación de administrador
- Migraciones y seeders
- Rutas con protección middleware

## 🚀 Características Implementadas

### Modelos
- **Car**: Modelo de automóviles con atributos: make, model, year, color
- **Book**: Modelo de libros con atributos: title, author, published_at
- **User**: Modelo de usuarios estándar de Laravel

### Controladores
- **CarController**: Gestiona la visualización de automóviles
  - `index()`: Muestra todos los automóviles
- **BookController**: Gestiona libros (en desarrollo)
- **UserController**: Gestiona usuarios

### Middleware
- **AdminCheckMiddleware**: Verifica si el usuario autenticado tiene permisos de administrador
  - Protege rutas que requieren acceso administrativo
  - Redirige a `/home` si el usuario no es admin

### Rutas Principales
- `/` - Página de bienvenida
- `/autos` - Lista de automóviles (requiere autenticación de admin)
- `/libros` - Lista de libros

### Base de Datos

#### Tabla Cars
```sql
- id: bigint (primary key)
- make: string (marca del auto)
- model: string (modelo)
- year: year (año)
- color: string (color)
- timestamps: created_at, updated_at
```

#### Datos Iniciales (Seeder)
La tabla `cars` incluye tres automóviles de ejemplo:
- Toyota Camry 2020 (Blue)
- Honda Civic 2019 (Red)
- Ford Mustang 2021 (Black)

## 🛠️ Configuración

### Prerrequisitos
- PHP >= 8.1
- Composer
- MySQL/MariaDB
- Laravel Sail (Docker)

### Instalación

1. Clonar el repositorio:
```bash
cd laravel-app
```

2. Instalar dependencias:
```bash
composer install
```

3. Copiar archivo de entorno:
```bash
cp .env.example .env
```

4. Generar clave de aplicación:
```bash
php artisan key:generate
```

5. Configurar base de datos en `.env`

6. Ejecutar migraciones:
```bash
php artisan migrate
```

### Uso con Laravel Sail

```bash
# Iniciar contenedores
./vendor/bin/sail up -d

# Ejecutar migraciones
./vendor/bin/sail artisan migrate

# Detener contenedores
./vendor/bin/sail down
```

## 📁 Estructura del Proyecto

```
laravel-app/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── BookController.php
│   │   │   ├── CarController.php
│   │   │   └── UserController.php
│   │   └── Middleware/
│   │       └── AdminCheckMiddleware.php
│   └── Models/
│       ├── Book.php
│       ├── Car.php
│       └── User.php
├── database/
│   ├── migrations/
│   │   └── 2025_12_05_011650_create_cars_table.php
│   └── seeders/
│       └── CarSeeder.php
└── resources/
    └── views/
        ├── car/
        │   └── index.blade.php
        ├── index.blade.php
        ├── nuevavista.blade.php
        └── welcome.blade.php
```

## 🔧 Comandos Útiles

```bash
# Ver rutas registradas
php artisan route:list

# Limpiar caché
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Crear nuevo controlador
php artisan make:controller NombreController

# Crear nuevo modelo con migración
php artisan make:model NombreModelo -m

# Ejecutar seeders
php artisan db:seed --class=CarSeeder
```

## 📚 Recursos de Aprendizaje

- [Documentación oficial de Laravel](https://laravel.com/docs)
- [Laravel Sail Documentation](https://laravel.com/docs/sail)
- [Eloquent ORM](https://laravel.com/docs/eloquent)
- [Blade Templates](https://laravel.com/docs/blade)

## 📝 Notas de Desarrollo

- El middleware `AdminCheckMiddleware` requiere que el modelo User tenga un método `isAdmin()`
- La ruta `/autos` está protegida por el middleware de administrador
- Los datos de prueba de automóviles se insertan directamente en la migración
- BookController tiene un error: usa `Books::all()` en lugar de `Book::all()`

## 🎯 Próximas Mejoras

- [ ] Corregir BookController para usar el modelo correcto
- [ ] Implementar CRUD completo para Cars y Books
- [ ] Añadir validación de formularios
- [ ] Implementar autenticación completa
- [ ] Añadir método `isAdmin()` al modelo User
- [ ] Crear vistas para la gestión de libros
- [ ] Añadir tests unitarios y de integración

## 📄 Licencia

Este es un proyecto educativo de práctica.