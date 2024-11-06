# 🎮 **Console Oscar for Kluer** 🖥️

## 🚀 **Activar la Consola Personalizada** 

Para activar la consola personalizada de **Oscar**, sigue estos pasos:

1. **Importa las extensiones de la consola:**

```ts
// 🌟 Importa las extensiones del paquete 'console' de OscarDev
import { consoleExtensions } from '@oscardev/console';
```

2. **Habilita las extensiones de la consola:**

```ts
// 🔧 Habilita las extensiones personalizadas de la consola
consoleExtensions.enable();
```

3. **Declara el módulo para la tipificación:**

```ts
// 📚 Declarar la extensión en el módulo de 'console' para asegurar que 'extensionsEnabled' esté correctamente tipado
declare module '@oscardev/console' {
  // ✅ Marca 'extensionsEnabled' como verdadero para indicar que las extensiones están habilitadas
  type extensionsEnabled = true;
}
```

### ✨ **Resultado final**:
Este código habilita las extensiones personalizadas de la consola y asegura que las configuraciones estén correctamente tipadas, ¡listo para usar en tu proyecto!

¡Disfruta de la experiencia de desarrollo mejorada! 🎉


