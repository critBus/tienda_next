'use client';

import Image from 'next/image';

export default function SecurePaymentImg() {
  return (
    <div className="w-full">
      <Image
        src="/assets/secure_payment/secure_payment.png"
        alt="Barra superior con oferta: Delivery GRATIS en pedidos desde $15"
        width={1920}
        height={200}
        className="sm:hidden w-full h-auto block"
      />
      <Image
        src="/assets/secure_payment/secure_payment_desk.png"
        alt="Barra superior con oferta: Delivery GRATIS en pedidos desde $15"
        width={1920}
        height={200}
        className="max-sm:hidden w-full h-auto block"
      />
    </div>
  );
} 