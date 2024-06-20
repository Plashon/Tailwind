import React from 'react'
import  Card  from "./Card";

const Restaurant = () => {
    
    const restaurants = [
        {
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C3TCENJ1RVNUUE/list/09276f5c64a042f9a94abbac5064f76d_1660901896280768540.webp",
          title: "เช็งซิมอี๊ - เสาชิงช้า",
          type: "น้ำแข็งไส",
        },
        {
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C4EFGLCWLEMTN6/hero/15e8c356-c4a6-4995-af03-de75b945737a__store_cover__2024__05__04__10__28__06.webp",
          title: "หมูสะเต๊ะป้าสม ประตูผี - สำราญราษฎร์",
          type: "ปิ้งย่าง/บาร์บีคิว",
        },
        {
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-CZCUVJJKVFECAA/hero/b6ce86027fce4df98f6c95db8b4037ed_1590629317553319631.webp",
          title: "ทิพย์เบเกอรี่ - เสาชิงช้า",
          type: "เบเกอรี่, เค้ก, ทานเล่น/ขนมขบเคี้ยว",
        },
        {
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C36WVBUFSF5GEX/hero/8f457a47-af84-43e6-ac68-f1942276984f__store_cover__2023__03__21__11__06__48.webp",
          title: "ต้มเลือดหมูศาลเจ้าพ่อเสือ - ศาลเจ้าพ่อเสือ",
          type: "ฟาสต์ฟู้ด",
        },
        {
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2JAFCLUE76EC2/hero/2c788804ffbf4f5e87d2df31fe0104fd_1610947857755532835.webp",
          title: "ชิ้วเจริญเจ้าเก่า - ถ.ตะนาว",
          type: "อาหารตามสั่ง",
        },
        {
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6KYJAJTFGAKT6/hero/80f721e0-ca0a-4692-b5f2-1730f3a6b31d__store_cover__2024__04__19__18__37__58.webp",
          title: "กัง ส้มตำ - แยกบ่อสร้าง",
          type: "ฟาสต์ฟู้ด",
        },
      ];
    
    
      const cards = [];
      for (let i = 0; i < restaurants.length; i++) {
        const restaurant = restaurants[i];
        cards.push(
          <Card
            key={i} // การวนซ้ำแค่ละรอบ ค่าของ key ต้องไม่ซ้ำรอบก่อนหน้า
            img={restaurant.img}
            title={restaurant.title}
            type={restaurant.type}
          />
        );
      }
    
      return <>{cards}</>;
    };
export default Restaurant
