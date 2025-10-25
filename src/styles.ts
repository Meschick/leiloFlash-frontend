import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      // Mapeia toda a paleta primária para a cor 'orange'
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{orange.700}',
          contrastColor: '#ffffff',
          hoverColor: '{orange.900}',
          activeColor: '{orange.500}'
        },
        highlight: {
          background: '{orange.950}',
          focusBackground: '{orange.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{orange.600}',
          hoverColor: '{orange.100}',
          activeColor: '{orange.100}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
});
