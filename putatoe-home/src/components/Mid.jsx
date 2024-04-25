import React from 'react'
import Card from './Card'

export default function Mid() {
  return (
    <div>
        <div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h3>Beverages</h3>
            <h3>View All</h3>
            </div>
            <div className='sections'>
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/Q6AOSM4" 
              name="Frooti"
              type="Cold Drinks"
              price="37"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/CYPAXGI" 
              name="Sprite"
              type="Cold Drinks"
              price="37"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/V8ZCN21" 
              name="Pepsi"
              type="Cold Drinks"
              price="47"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/AZFDMJA" 
              name="Thumps Up"
              type="Cold Drinks"
              price="47"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/ULFM611" 
              name="Mirinda"
              type="Cold Drinks"
              price="94"
              discount="6% OFF"
            />
            </div>           
        </div>
        <div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <h3>Dairy Products</h3>
            <h3>View All</h3>
            </div>
            <div className="sections">
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/2VUNCM1" 
              name="Anik Ghee"
              type="Ghee"
              price="74"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/CFWOVTH" 
              name="Gyan Lassi"
              type="Lassi"
              price="17"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/M8QE7DV" 
              name="Gyan Mattha"
              type="Mattha"
              price="10"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/4MQNV0T" 
              name="Gyan Meetha Dahi"
              type="Curd"
              price="20"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/OD7MBE3" 
              name="Gyan Paneer"
              type="Paneer"
              price="86"
              discount="6% OFF"
            />
            </div>
        </div>
        <div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <h3>Fruits</h3>
            <h3>View All</h3>
            </div>
            <div className="sections">
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/KLOYJ0A" 
              name="Banana"
              type="Fruits"
              price="250"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/NPKG0HL" 
              name="Mango"
              type="Fruits"
              price="480"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/ZFNT02V" 
              name="Pomogranate"
              type="Fruits"
              price="650"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/EFQA6EA" 
              name="Kiwi"
              type="Fruits"
              price="250"
              discount="6% OFF"
            />
            <Card 
              imgLink="https://storage.googleapis.com/putatoeapp/Image/testImage/37B17KT" 
              name="Coconut"
              type="Fruits"
              price="250"
              discount="6% OFF"
            />
            </div>
        </div>
    </div>
  )
}
