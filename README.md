
# Admin TODO App

Aplicación de administración de tareas construida con Next.js 14, PostgreSQL y Prisma.

## Requisitos previos

- Node.js 18 o superior
- PostgreSQL
- npm o yarn

## Configuración del entorno

1. Clonar el repositorio
2. Copiar el archivo `.env.example` a `.env`
3. Configurar las variables de entorno:

```properties example
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/admintodo?schema=public"
```

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar migraciones de Prisma
npx prisma migrate dev

# Iniciar servidor de desarrollo
npm run dev
```

## Tecnologías principales

- Next.js 14
- PostgreSQL
- Prisma ORM
- TailwindCSS
- Docker (opcional)

## Nota: Usuario de prueba 
__usuario:__ test1@google.com
__password:__ 123456

## Estructura del proyecto

```
├── src/           # Código fuente
├── prisma/        # Esquemas y migraciones de Prisma
├── public/        # Archivos estáticos
└── postgres/      # Configuración de PostgreSQL
```

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm start`: Inicia la aplicación en modo producción

## Docker

La aplicación incluye configuración Docker. Para ejecutar con Docker Compose:

```bash
docker-compose up -d
```