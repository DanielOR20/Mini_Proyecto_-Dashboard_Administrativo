// --- LÓGICA CRUD PRODUCTOS ---

function getProductos() {
    return JSON.parse(localStorage.getItem('productos')) || [];
}

function saveProductos(productos) {
    localStorage.setItem('productos', JSON.stringify(productos));
}

document.getElementById('productoForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('productoId').value;
    const nombre = document.getElementById('nombreProducto').value.trim();
    const categoria = document.getElementById('categoriaProducto').value.trim();
    const precio = parseFloat(document.getElementById('precioProducto').value);
    const stock = parseInt(document.getElementById('stockProducto').value);

    let productos = getProductos();

    if (id) {
        productos = productos.map(p => p.id === id ? { id, nombre, categoria, precio, stock } : p);
    } else {
        const nuevoProducto = {
            id: Date.now().toString(),
            nombre,
            categoria,
            precio,
            stock
        };
        productos.push(nuevoProducto);
    }

    saveProductos(productos);
    resetProductoForm();
    renderProductos();
});

function renderProductos() {
    const tbody = document.getElementById('tablaProductos');
    if (!tbody) return;

    const productos = getProductos();
    tbody.innerHTML = '';

    if (productos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No hay productos registrados.</td></tr>';
        return;
    }

    productos.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.nombre}</td>
            <td>${p.categoria}</td>
            <td>$${p.precio.toFixed(2)}</td>
            <td>${p.stock} unid.</td>
            <td>
                <button class="btn-action btn-edit" onclick="cargarProducto('${p.id}')">Editar</button>
                <button class="btn-action btn-delete" onclick="eliminarProducto('${p.id}')">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function cargarProducto(id) {
    const productos = getProductos();
    const p = productos.find(prod => prod.id === id);
    if (!p) return;

    document.getElementById('productoId').value = p.id;
    document.getElementById('nombreProducto').value = p.nombre;
    document.getElementById('categoriaProducto').value = p.categoria;
    document.getElementById('precioProducto').value = p.precio;
    document.getElementById('stockProducto').value = p.stock;

    document.getElementById('formTitleProd').innerText = "Editar Producto";
    document.getElementById('btnGuardarProd').innerText = "Actualizar Producto";
    document.getElementById('btnCancelarProd').style.display = "block";
}

function resetProductoForm() {
    const form = document.getElementById('productoForm');
    if (form) form.reset();
    
    document.getElementById('productoId').value = '';
    document.getElementById('formTitleProd').innerText = "Agregar Producto";
    document.getElementById('btnGuardarProd').innerText = "Guardar Producto";
    document.getElementById('btnCancelarProd').style.display = "none";
}

function eliminarProducto(id) {
    if (confirm('¿Está seguro de eliminar este producto?')) {
        let productos = getProductos();
        productos = productos.filter(p => p.id !== id);
        saveProductos(productos);
        renderProductos();
    }
}