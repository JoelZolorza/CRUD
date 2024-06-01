class Cliente {
    constructor(nombre, apellido, domicilio, codigoPostal, telefono, dni, cuit) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.domicilio = domicilio;
      this.codigoPostal = codigoPostal;
      this.telefono = telefono;
      this.dni = dni;
      this.cuit = cuit;
    }
  
    //creo cliente
    static crear(cliente) {
      Cliente.clientes.push(cliente);
      Cliente.actualizarLista();
    }
  
    //lista de clientes
    static obtenerTodos() {
      return Cliente.clientes;
    }
  
    //actualizar un cliente
    static actualizar(index, datosCliente) {
      Object.assign(Cliente.clientes[index], datosCliente);
      Cliente.actualizarLista();
    }
  
    //eliminar cliente
    static eliminar(index) {
      Cliente.clientes.splice(index, 1);
      Cliente.actualizarLista();
    }
  
    //actualizar la lista de clientes (DOM)
    static actualizarLista() {
      // Implementar la lógica para actualizar el DOM
    }
  }
  
  
  Cliente.clientes = [];


  function submitForm() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const domicilio = document.getElementById('domicilio').value;
    const codigoPostal = document.getElementById('codigoPostal').value;
    const telefono = document.getElementById('telefono').value;
    const dni = document.getElementById('dni').value;
    const cuit = document.getElementById('cuit').value;
    
  
    // Crear o actualizar uno existente
    if (Cliente.clienteActual != null) {
      Cliente.actualizar(Cliente.clienteActual, { nombre, apellido, domicilio, codigoPostal, telefono, dni, cuit });
    } else {
      const nuevoCliente = new Cliente(nombre, apellido, domicilio, codigoPostal, telefono, dni, cuit );
      Cliente.crear(nuevoCliente);
    }
  
    // Restablecer el formulario y la variable clienteActual
    document.getElementById('formularioCliente').reset();
    Cliente.clienteActual = null;
  }
  
  // Inicializa la variable estática clienteActual
  Cliente.clienteActual = null;

  Cliente.actualizarLista = function() {
    const lista = document.getElementById('listaClientes');
    lista.innerHTML = ''; 
    Cliente.obtenerTodos().forEach((cliente, index) => {
      const elemento = document.createElement('div');
      elemento.innerHTML = `
     
        <h2>Clientes Agregados</h2>
        <h3>Nombre</h3><p>${cliente.nombre}</p>
        <h3>Apellido</h3><p>${cliente.apellido}</p> 
        <h3>Domicilio</h3><p>${cliente.domicilio}</p>
        <h3>Codigo Postal</h3><p>${cliente.codigoPostal}</p>
        <h3>Telefono</h3><p>${cliente.telefono}</p>
        <h3>DNI</h3><p>${cliente.dni}</p>
        <h3>CUIT</h3><p>${cliente.cuit}</p>
          
        - <button onclick="editarCliente(${index})">Editar</button>
        - <button onclick="Cliente.eliminar(${index})">Eliminar</button>
       
       
       
       
        
      `;
      lista.appendChild(elemento);
    });
  };
  
  function editarCliente(index) {
    const cliente = Cliente.clientes[index];
    document.getElementById('nombre').value = cliente.nombre;
    document.getElementById('apellido').value =cliente.apellido;
    document.getElementById('domicilio').value =cliente.domicilio;
    document.getElementById('codigoPostal').value =cliente.codigoPostal;
    document.getElementById('telefono').value =cliente.telefono;
    document.getElementById('dni').value =cliente.dni;
    document.getElementById('cuit').value =cliente.cuit;
    
    Cliente.clienteActual = index; 
  }