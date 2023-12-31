// src/plugins/vuetify.js
import '@/styles/main.scss';
import 'vuetify/styles'; // Importa os estilos padrão do Vuetify

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/lib/components';
import * as directives from 'vuetify/lib/directives';

const vuetify = createVuetify({
  components,
  directives,
});

export default vuetify;
