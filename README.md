# Solara Studios Design System

## Storybook

### Rodar storybook localmente
```bash
npm run storybook
```

Porta: [http://localhost:6006](http://localhost:6006) 

## Pacote

### Criar pasta dist (que o pacote vai usar):
```bash
npm run build
```

### Testar pacote localmente:
```bash
npm pack #ou npm pack --dry-run #para checar se os arquivos certos foram criados
```

### Publicar pacote no github packages:
```bash
dotenv npm publish
```
