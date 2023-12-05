new Vue({
    el: '#app',
    data: {
      ingredientes: ["pan superior", "lechuga", "tomate", "mortadela", "salsa secreta", "pan inferior"],
      ingredientesSeleccionados: [],
      esHamburguesa: false,
      mostrarResultado: false
    },
    methods: {
      toggleIngrediente(ingrediente) {
        if (this.ingredientesSeleccionados.includes(ingrediente)) {
          this.ingredientesSeleccionados = this.ingredientesSeleccionados.filter(i => i !== ingrediente);
        } else {
          this.ingredientesSeleccionados.push(ingrediente);
        }
      },
      confirmarCocinar() {
        const confirmacion = confirm('¿Estás seguro de cocinar la hamburguesa?');
        if (confirmacion) {
          this.cocinar();
        }
      },
      cocinar() {
        if (JSON.stringify(this.ingredientesSeleccionados) === JSON.stringify(this.ingredientes)) {
          this.esHamburguesa = true;
        } else {
          this.esHamburguesa = false;
        }
        this.mostrarResultado = true;
      }
    }
  });