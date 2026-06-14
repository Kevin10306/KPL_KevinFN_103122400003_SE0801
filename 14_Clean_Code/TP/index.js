const ORDER_STATUS = {
  DELIVERED: 'Delivered',
};

async function fetchOrderDetails(orderId, token) {
  try {
    const order = await getOrder(orderId, token);
    showOrderModal(order, token);
  } catch (error) {
    console.error('Error fetching order details:', error);
    showErrorMessage(error.message);
  }
}

async function getOrder(orderId, token) {
  const response = await fetch(`https://example.com/api/order/${orderId}`, {
    headers: { 'Authorization': token },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch order details (HTTP ${response.status})`);
  }

  return response.json();
}

function showOrderModal(order, token) {
  const modal = document.getElementById('orderModal');

  renderOrderDetails(modal, order);
  setupCloseButton(modal);
  setupConfirmButton(modal, order, token);

  modal.style.display = 'block';
}

function renderOrderDetails(modal, order) {
  const detailsDiv = modal.querySelector('#orderDetails');
  detailsDiv.innerHTML = '';

  const header = document.createElement('h3');
  header.textContent = `Order ID: ${order.id}`;

  const status = document.createElement('p');
  status.textContent = `Status: ${order.status}`;

  detailsDiv.append(header, status);
}

function setupCloseButton(modal) {
  const closeBtn = modal.querySelector('.close');
  const freshCloseBtn = closeBtn.cloneNode(true); // Hapus listener lama
  closeBtn.replaceWith(freshCloseBtn);

  freshCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

function setupConfirmButton(modal, order, token) {
  const confirmBtn = modal.querySelector('#confirmOrderBtn');
  const isDelivered = order.status === ORDER_STATUS.DELIVERED;

  confirmBtn.style.display = isDelivered ? 'none' : 'block';

  if (!isDelivered) {
    const freshConfirmBtn = confirmBtn.cloneNode(true); // Hapus listener lama
    confirmBtn.replaceWith(freshConfirmBtn);

    freshConfirmBtn.addEventListener('click', () => {
      confirmOrder(order.id, token);
    });
  }
}

function showErrorMessage(message) {
  // Sesuaikan dengan sistem notifikasi
  alert(`Error: ${message}`);
}