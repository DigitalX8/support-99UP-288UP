// ตั้งค่าช่องทางติดต่อที่ไฟล์นี้ แล้วรีโหลดหน้าเว็บเพื่อใช้ค่าใหม่
// enabled: true = แสดงการ์ด, false = ซ่อนทั้งการ์ดโดยไม่เหลือช่องว่าง
// url: ลิงก์ที่เปิดเมื่อคลิกการ์ด (ใส่ลิงก์เต็ม เช่น https://...)
window.CHANNELS_CONFIG = {
  // การ์ด LINE บริการ
  lineService: {
    enabled: true,
    url: "https://lin.ee/6AE5uVB"
  },
  // การ์ด LINE สำรอง
  lineBackup: {
    enabled: true,
    url: "https://lin.ee/6AE5uVB"
  },
  // การ์ด Telegram
  telegram: {
    enabled: true,
    url: "https://bit.ly/288up-kenni"
  },
  // การ์ด Live Chat: ของเดิมเปิดลิงก์ ไม่มีวิดเจ็ต เปลี่ยนลิงก์ได้ที่ url
  livechat: {
    enabled: true,
    url: "https://bit.ly/288up-kenni"
  },
  // การ์ดเว็บไซต์หลัก
  website: {
    enabled: true,
    url: "https://bit.ly/288up-kenni"
  },
  // การ์ด WhatsApp
  whatsapp: {
    enabled: true,
    url: "https://bit.ly/288up-kenni"
  }
};
