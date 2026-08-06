// --- LÓGICA DE GRÁFICO ESTADÍSTICO DE FLUJO ---
function renderChart(numClientes, numProductos, numProveedores) {
    const ctx = document.getElementById('flowChart')?.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Clientes', 'Productos (Tipos)', 'Proveedores'],
            datasets: [{
                label: 'Cantidad de Registros Activos',
                data: [numClientes, numProductos, numProveedores],
                backgroundColor: [
                    'rgba(2, 132, 199, 0.7)',
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(245, 158, 11, 0.7)'
                ],
                borderColor: [
                    '#0284c7',
                    '#22c55e',
                    '#f59e0b'
                ],
                borderWidth: 2,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#f8fafc' }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#94a3b8', stepSize: 1 },
                    grid: { color: '#334155' }
                },
                x: {
                    ticks: { color: '#94a3b8' },
                    grid: { color: '#334155' }
                }
            }
        }
    });
}