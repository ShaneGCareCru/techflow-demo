# CLAUDE.md - TechFlow.io Project Guidelines

## Project Overview
TechFlow.io is a demonstration SaaS platform for showcasing claude-tasker capabilities.

## Key Components
- Frontend: React TypeScript application
- Backend: FastAPI Python service
- Database: PostgreSQL with SQLAlchemy ORM
- Testing: Jest for frontend, pytest for backend

## Development Standards
- Use TypeScript for all frontend code
- Follow React best practices and hooks
- API endpoints should be RESTful
- All code must pass linting and type checking
- Write tests for new features

## Common Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run test     # Run tests
npm run lint     # Check code style
```

## Git Workflow
- Feature branches from main
- PR required for all changes
- Run tests before committing
- Semantic commit messages