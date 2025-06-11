"use client";

import Image from "next/image";

export default function SecurePaymentImg() {
  return (
    <div className="w-full">
      <Image
        src="/img/secure_payment/imagen2.png"
        alt="Barra superior con oferta: Delivery GRATIS en pedidos desde $15"
        width={1920}
        height={200}
        className="sm:hidden w-full h-auto block"
      />
      <Image
        src="/img/secure_payment/rectangulo2.png" //secure_payment_desk
        alt="Barra superior con oferta: Delivery GRATIS en pedidos desde $15"
        width={1024}
        height={249}
        className="max-sm:hidden w-full h-auto  block"
      />
    </div>
  );
}
