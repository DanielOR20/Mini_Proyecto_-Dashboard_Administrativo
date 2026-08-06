// =========================
// CRUD DE PROVEEDORES
// =========================

// Obtener proveedores
function getProveedores() {
    return JSON.parse(localStorage.getItem('proveedores')) || [];
}

// Guardar proveedores
function saveProveedores(proveedores) {
    localStorage.setItem('proveedores', JSON.stringify(proveedores));
}

// Crear o editar proveedor
document.getElementById('proveedorForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('proveedorId').value;
    const empresa = document.getElementById('empresaProveedor').value.trim();
    const contacto = document.getElementById('contactoProveedor').value.trim();
    const telefono = document.getElementById('telefonoProveedor').value.trim();
    const correo = document.getElementById('correoProveedor').value.trim();

    let proveedores = getProveedores();

    if (id) {
        // Editar
        proveedores = proveedores.map(p =>
            p.id === id
                ? { id, empresa, contacto, telefono, correo }
                : p
        );
    } else {
        // Crear
        proveedores.push({
            id: Date.now().toString(),
            empresa,
            contacto,
            telefono,
            correo
        });
    }

    saveProveedores(proveedores);
    resetProveedorForm();
    renderProveedores();
});

// Mostrar proveedores
function renderProveedores() {
    const tbody = document.getElementById('tablaProveedores');
    if (!tbody) return;

    const proveedores = getProveedores();
    tbody.innerHTML = '';

    if (proveedores.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;">
                    No hay proveedores registrados.
                </td>
            </tr>`;
        return;
    }

    proveedores.forEach(p => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${p.empresa}</td>
            <td>${p.contacto}</td>
            <td>${p.telefono}</td>
            <td>${p.correo}</td>
            <td>
                <button class="btn-action btn-edit"
                    onclick="cargarProveedor('${p.id}')">
                    Editar
                </button>

                <button class="btn-action btn-delete"
                    onclick="eliminarProveedor('${p.id}')">
                    Eliminar
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

// Cargar proveedor para editar
function cargarProveedor(id) {
    const proveedores = getProveedores();
    const p = proveedores.find(prov => prov.id === id);

    if (!p) return;

    document.getElementById('proveedorId').value = p.id;
    document.getElementById('empresaProveedor').value = p.empresa;
    document.getElementById('contactoProveedor').value = p.contacto;
    document.getElementById('telefonoProveedor').value = p.telefono;
    document.getElementById('correoProveedor').value = p.correo;

    document.getElementById('formTitleProv').innerText = "Editar Proveedor";
    document.getElementById('btnGuardarProv').innerText = "Actualizar Proveedor";
    document.getElementById('btnCancelarProv').style.display = "block";
}

// Limpiar formulario
function resetProveedorForm() {
    document.getElementById('proveedorForm').reset();

    document.getElementById('proveedorId').value = '';
    document.getElementById('formTitleProv').innerText = "Agregar Proveedor";
    document.getElementById('btnGuardarProv').innerText = "Guardar Proveedor";
    document.getElementById('btnCancelarProv').style.display = "none";
}

// Eliminar proveedor
function eliminarProveedor(id) {
    if (confirm('¿Está seguro de eliminar este proveedor?')) {
        let proveedores = getProveedores();

        proveedores = proveedores.filter(p => p.id !== id);

        saveProveedores(proveedores);
        renderProveedores();
    }
}


// =========================
// TEMA CLARO / OSCURO
// =========================

// Inicializar tema
function initTheme() {
    const savedTheme = localStorage.getItem('appTheme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeButton(true);
    } else {
        document.body.classList.remove('light-theme');
        updateThemeButton(false);
    }
}

// Cambiar tema
function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');

    localStorage.setItem(
        'appTheme',
        isLight ? 'light' : 'dark'
    );

    updateThemeButton(isLight);
}

// Cambiar texto del botón
function updateThemeButton(isLight) {
    const btn = document.getElementById('themeBtn');

    if (btn) {
        btn.innerText = isLight
            ? "☀️ Modo Claro"
            : "🌙 Modo Oscuro";
    }
}

// Cargar el tema al abrir la página
document.addEventListener('DOMContentLoaded', initTheme);