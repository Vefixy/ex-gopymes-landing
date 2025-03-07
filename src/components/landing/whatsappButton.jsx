import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import './css/WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <div className="whatsapp-button-container">
      <FloatingWhatsApp
        phoneNumber="+5491123898361"
        accountName="Vefixy"
        avatar="/imagespublic/vefixy/isotipo.svg"
        chatMessage={"👋 ¡Hola! Somos el CRM ideal para empresas argentinas. 💼 ¿Listo para gestionar tu negocio de forma ágil y eficiente? 🚀"}
        statusMessage="En línea"
        placeholder="Escribe un mensaje..."
        darkMode={false}
        notification
      />
    </div>
  );
}

export default WhatsAppButton;