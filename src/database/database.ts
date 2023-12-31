// Exemplo de um "banco de dados" simples
export const database = [
    { position: 1, description: 'Mateus' },
    { position: 2, description: 'Marcos' },
    { position: 3, description: 'Lucas' },
    { position: 4, description: 'João' },
    { position: 5, description: 'Atos' },
    { position: 6, description: 'Romanos' },
    { position: 7, description: '1 Coríntios' },
    { position: 8, description: '2 Coríntios' },
    { position: 9, description: 'Gálatas' },
    { position: 10, description: 'Efésios' },
    { position: 11, description: 'Filipenses' },
    { position: 12, description: 'Colossenses' },
    { position: 13, description: '1 Tessalonicenses' },
    { position: 14, description: '2 Tessalonicenses' },
    { position: 15, description: '1 Timóteo' },
    { position: 16, description: '2 Timóteo' },
    { position: 17, description: 'Tito' },
    { position: 18, description: 'Filemom' },
    { position: 19, description: 'Hebreus' },
    { position: 20, description: 'Tiago' },
    { position: 21, description: '1 Pedro' },
    { position: 22, description: '2 Pedro' },
    { position: 23, description: '1 João' },
    { position: 24, description: '2 João' },
    { position: 25, description: '3 João' },
    { position: 26, description: 'Judas' },
    { position: 27, description: 'Apocalipse' },
  ];
  
  // Exemplo de consulta por posição
  function getItemByPosition(position: number) {
    const item = database.find((entry) => entry.position === position);
    return item ? item.description : 'Item não encontrado';
  }
  
  // Uso da função de consulta
  const itemDescription = getItemByPosition(2);
  console.log(itemDescription); // Saída: 'Item 2'
  