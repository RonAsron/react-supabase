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
```
### ขั้นตอนที่ 2: ติดตั้ง Dependencies
หลังจากคลอนโปรเจกต์แล้ว ให้ไปที่โฟลเดอร์โปรเจกต์:

```bash
cd react-supabase
```

ติดตั้ง dependencies ที่จำเป็นสำหรับโปรเจกต์:
```bash
npm install
```

### ขั้นตอนที่ 3: ตั้งค่า Supabase
คุณต้องตั้งค่า Supabase client โดยการใช้ไฟล์ supabaseClient.js ที่อยู่ในโฟลเดอร์ src/api โดยสามารถสร้างบัญชีที่ supabase.io และสร้างโปรเจกต์ใหม่ จากนั้นคัดลอก URL และ API key มาใส่ในไฟล์ supabaseClient.js.

ตัวอย่างการตั้งค่าในไฟล์ supabaseClient.js:
```bash
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_API_KEY'
export const supabase = createClient(supabaseUrl, supabaseKey)
```

### ขั้นตอนที่ 4: รันแอป

```bash
npm start
```




