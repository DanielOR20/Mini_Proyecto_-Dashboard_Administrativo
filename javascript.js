// --- LÓGICA CRUD CLIENTES ---

function getClientes() {
    return JSON.parse(localStorage.getItem('clientes')) || [];
}

function saveClientes(clientes) {
    localStorage.setItem('clientes', JSON.stringify(clientes));
}

document.getElementById('clienteForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('clienteId').value;
    const nombre = document.getElementById('nombreCliente').value.trim();
    const correo = document.getElementById('correoCliente').value.trim();
    const telefono = document.getElementById('telefonoCliente').value.trim();
    const empresa = document.getElementById('empresaCliente').value.trim();

    let clientes = getClientes();

    if (id) {
        clientes = clientes.map(c => c.id === id ? { id, nombre, correo, telefono, empresa } : c);
    } else {
        const nuevoCliente = {
            id: Date.now().toString(),
            nombre,
            correo,
            telefono,
            empresa
        };
        clientes.push(nuevoCliente);
    }

    saveClientes(clientes);
    resetClienteForm();
    renderClientes();
});

function renderClientes() {
    const tbody = document.getElementById('tablaClientes');
    if (!tbody) return;

    const clientes = getClientes();
    tbody.innerHTML = '';

    if (clientes.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No hay clientes registrados.</td></tr>';
        return;
    }

    clientes.forEach(cliente => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.correo}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.empresa}</td>
            <td>
                <button class="btn-action btn-edit" onclick="cargarCliente('${cliente.id}')">Editar</button>
                <button class="btn-action btn-delete" onclick="eliminarCliente('${cliente.id}')">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function cargarCliente(id) {
    const clientes = getClientes();
    const cliente = clientes.find(c => c.id === id);
    if (!cliente) return;

    document.getElementById('clienteId').value = cliente.id;
    document.getElementById('nombreCliente').value = cliente.nombre;
    document.getElementById('correoCliente').value = cliente.correo;
    document.getElementById('telefonoCliente').value = cliente.telefono;
    document.getElementById('empresaCliente').value = cliente.empresa;

    document.getElementById('formTitle').innerText = "Editar Cliente";
    document.getElementById('btnGuardar').innerText = "Actualizar Cliente";
    document.getElementById('btnCancelar').style.display = "block";
}

function resetClienteForm() {
    const form = document.getElementById('clienteForm');
    if (form) form.reset();
    
    document.getElementById('clienteId').value = '';
    document.getElementById('formTitle').innerText = "Agregar Cliente";
    document.getElementById('btnGuardar').innerText = "Guardar Cliente";
    document.getElementById('btnCancelar').style.display = "none";
}

function eliminarCliente(id) {
    if (confirm('¿Está seguro de eliminar este cliente?')) {
        let clientes = getClientes();
        clientes = clientes.filter(c => c.id !== id);
        saveClientes(clientes);
        renderClientes();
    }
}