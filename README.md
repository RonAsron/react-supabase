<<<<<<< HEAD
# React Supabase

โปรเจกต์นี้เป็นแอปที่ใช้ React และ Supabase สำหรับการจัดการฐานข้อมูลและการใช้งานฟีเจอร์ต่าง ๆ เช่น การเข้าสู่ระบบ, การลงทะเบียน, และการจัดการข้อมูลในแอป
=======
# react-supabase

โปรเจกต์นี้เป็นแอป React ที่เชื่อมต่อกับ Supabase

## ฟีเจอร์

- มีระบบ แก้ไข ลบ เพิ่ม ค้าหา ข้อมูล ด้วย 
- การจัดการฐานข้อมูลด้วย Supabase
- React vite 
>>>>>>> 75fbfae4bc9083e46d0706062e80ea592a1c4293

## วิธีการติดตั้ง

### ขั้นตอนที่ 1: คลอนโปรเจกต์

เริ่มต้นด้วยการคลอนโปรเจกต์จาก GitHub:

```bash
git clone https://github.com/RonAsron/react-supabase.git
<<<<<<< HEAD
ขั้นตอนที่ 2: ติดตั้ง Dependencies
หลังจากที่คุณคลอนโปรเจกต์แล้ว ให้ไปที่โฟลเดอร์โปรเจกต์:

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
คุณต้องตั้งค่า Supabase client ด้วยการใช้ supabaseClient.js ในโฟลเดอร์ src/api. คุณสามารถสร้างบัญชีที่ Supabase และสร้างโปรเจกต์ใหม่ได้ จากนั้นคัดลอก URL และ API key และใส่ในไฟล์ supabaseClient.js.

ตัวอย่างการตั้งค่าใน supabaseClient.js:

javascript
คัดลอก
แก้ไข
=======
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
>>>>>>> 75fbfae4bc9083e46d0706062e80ea592a1c4293
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_API_KEY'
export const supabase = createClient(supabaseUrl, supabaseKey)
<<<<<<< HEAD
ขั้นตอนที่ 4: รันแอป
ตอนนี้คุณสามารถเริ่มต้นแอปได้โดยใช้คำสั่ง:

bash
คัดลอก
แก้ไข
npm start
หรือหากใช้ Yarn:

bash
คัดลอก
แก้ไข
yarn start
แอปจะเปิดในเบราว์เซอร์ที่ http://localhost:3000

ฟีเจอร์
การสมัครสมาชิกและเข้าสู่ระบบด้วย Supabase Auth

การแสดงข้อมูลจากฐานข้อมูล Supabase

การเพิ่ม, แก้ไข, และลบข้อมูลในแอป

ข้อกำหนด
Node.js 14.x ขึ้นไป

npm หรือ Yarn

Supabase account

การตั้งค่าในอนาคต
หากต้องการเพิ่มฟีเจอร์ใหม่หรือปรับแต่งแอปนี้ สามารถดูรายละเอียดในโค้ดหรือเพิ่มฟังก์ชันใหม่ตามที่ต้องการ

License
โปรเจกต์นี้ใช้ MIT License.

go
คัดลอก
แก้ไข

คุณสามารถคัดลอกและวางไฟล์นี้ลงในไฟล์ `README.md` ของโปรเจกต์คุณได้เลยครับ!
=======
```

### ขั้นตอนที่ 4: รันแอป

```bash
npm start
```
ปกติ จะใช้ อันนี้ 
```bash
npm run dev
```



>>>>>>> 75fbfae4bc9083e46d0706062e80ea592a1c4293
