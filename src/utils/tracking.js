// utils/tracking.js

/**
 * 🧠 Evolvian Unified Tracking Utility
 * Compatible con Meta Pixel (fbq) + Google Ads/Analytics (gtag)
 * 
 * 👉 Ejemplo de uso:
 * trackEvent({ name: "Register_Click", category: "CTA", label: "Header", value: 1 });
 * trackConversion("SignUp");
 */

/* ===========================================================
   🟢 CONFIGURACIÓN DE IDs
   =========================================================== */
const META_PIXEL_ID = "805104092211918";
const GOOGLE_ADS_CONVERSION_ID = "AW-17638350094"; // ⚠️ reemplaza si tu ID de Google Ads es otro

/* ===========================================================
   1️⃣ EVENT TRACKING GENERAL
   =========================================================== */
export function trackEvent({ name, category = "interaction", label = "", value = "" }) {
  try {
    // 🟦 Google Analytics / Google Ads Event
    if (typeof gtag === "function") {
      gtag("event", name, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // 🟪 Meta Pixel Custom Event
    if (typeof fbq === "function") {
      fbq("trackCustom", name, { category, label, value });
    }

    // 🧠 Debug solo en modo desarrollo
    if (import.meta.env.DEV) {
      console.log(`✅ [Tracking] ${name}`, { category, label, value });
    }
  } catch (error) {
    console.warn("⚠️ Tracking error:", error);
  }
}

/* ===========================================================
   2️⃣ CONVERSION TRACKING
   =========================================================== */

/**
 * Registra conversiones importantes (Lead, SignUp, Purchase, etc.)
 * @param {string} type - Tipo de conversión
 * @param {object} data - Información opcional (valor, moneda, etc.)
 */
export function trackConversion(type = "Lead", data = {}) {
  try {
    // 🟦 Google Ads Conversion
    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: `${GOOGLE_ADS_CONVERSION_ID}/${type}`,
        ...data,
      });
    }

    // 🟪 Meta Pixel Conversion
    if (typeof fbq === "function") {
      fbq("track", type, data);
    }

    if (import.meta.env.DEV) {
      console.log(`💰 [Conversion] ${type}`, data);
    }
  } catch (error) {
    console.warn("⚠️ Conversion tracking error:", error);
  }
}
