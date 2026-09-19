Estrutura extraída do HTML original.

index.html: marcação da página
styles.css: CSS extraído dos blocos <style>
script.js: código principal extraído do bloco data-dc-script
assets/: imagens, fontes e bibliotecas JavaScript do bundle

Observação: o index.html mantém uma cópia inline do script principal porque o runtime x-dc original lê o código via textContent. O arquivo script.js foi separado para edição/manutenção. Remover a cópia inline exigiria adaptar o runtime original.
