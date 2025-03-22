# react-supabase

โปรเจกต์นี้เป็นแอป React ที่เชื่อมต่อกับ Supabase สำหรับการจัดการการยืนยันตัวตนและฐานข้อมูล โดยให้ฟีเจอร์ต่าง ๆ เช่น การยืนยันตัวตนของผู้ใช้, การลงทะเบียน และการจัดการข้อมูลภายในแอป

## ฟีเจอร์

- การยืนยันตัวตนของผู้ใช้ด้วย Supabase Auth
- การจัดการฐานข้อมูลด้วย Supabase
- การอัปเดตแบบเรียลไทม์ผ่าน Supabase
- อินเทอร์เฟซที่ใช้งานง่ายสร้างด้วย React

## วิธีการติดตั้ง

### ขั้นตอนที่ 1: คลอนโปรเจกต์

เริ่มต้นด้วยการคลอนโปรเจกต์จาก GitHub:

```bash
git clone https://github.com/RonAsron/react-supabase.git

ขั้นตอนที่ 2: ติดตั้ง Dependencies
หลังจากคลอนโปรเจกต์แล้ว ให้ไปที่โฟลเดอร์โปรเจกต์:

bash
คัดลอก
แก้ไข
cd react-supabase
ติดตั้ง dependencies ที่จำเป็นสำหรับโปรเจกต์:

bash
คัดลอก
แก้ไข
npm install
หรือหากคุณใช้ Yarn:

bash
คัดลอก
แก้ไข
yarn install
ขั้นตอนที่ 3: ตั้งค่า Supabase
คุณต้องตั้งค่า Supabase client โดยการใช้ไฟล์ supabaseClient.js ที่อยู่ในโฟลเดอร์ src/api โดยสามารถสร้างบัญชีที่ supabase.io และสร้างโปรเจกต์ใหม่ จากนั้นคัดลอก URL และ API key มาใส่ในไฟล์ supabaseClient.js.

ตัวอย่างการตั้งค่าในไฟล์ supabaseClient.js:

javascript
คัดลอก
แก้ไข
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_API_KEY'
export const supabase = createClient(supabaseUrl, supabaseKey)
ขั้นตอนที่ 4: รันแอป
ตอนนี้คุณสามารถเริ่มต้นแอปได้โดยใช้คำสั่ง:

bash
คัดลอก
แก้ไข
npm start
หรือหากคุณใช้ Yarn:

bash
คัดลอก
แก้ไข
yarn start
แอปจะเปิดในเบราว์เซอร์ที่ http://localhost:3000

การพัฒนาแอปด้วย Vite
โปรเจกต์นี้ถูกสร้างด้วย Vite ซึ่งเป็นเครื่องมือที่รวดเร็วในการสร้างแอปเว็บที่ทันสมัย โดย Vite จะช่วยให้:

การอัปเดตโมดูลแบบทันที (Hot Module Replacement - HMR) เพื่อให้การพัฒนาแอปเป็นไปอย่างราบรื่น

รองรับ React และฟีเจอร์ JavaScript ที่ทันสมัยทันที

การขยายการตั้งค่า ESLint
หากคุณกำลังพัฒนาแอปในสภาพแวดล้อมการผลิต เราขอแนะนำให้ใช้ TypeScript และเปิดใช้งานกฎการตรวจสอบที่ระบุประเภทข้อมูล (type-aware lint rules) หากคุณต้องการใช้ TypeScript ในโปรเจกต์ของคุณ สามารถดู เทมเพลต TypeScript และใช้ typescript-eslint เพื่อปรับปรุงกระบวนการตรวจสอบโค้ด

License

### คำอธิบายการปรับปรุง:

1. **หัวข้อ `react-supabase`**: อธิบายเกี่ยวกับโปรเจกต์, ฟีเจอร์ต่าง ๆ และการติดตั้งในภาษาไทย
2. **การติดตั้งและรันโปรเจกต์**: ขั้นตอนการติดตั้งและการรันแอป รวมถึงการตั้งค่า Supabase
3. **การพัฒนาแอปด้วย Vite**: การใช้ Vite สำหรับการพัฒนาแอป และการตั้งค่า ESLint กับ TypeScript

คุณสามารถคัดลอกเนื้อหานี้ไปใช้ในไฟล์ `README.md` ของโปรเจกต์ได้เลยครับ!
